import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'
// import component
import EditModal from '../../components/editSalesModal';
// import style
import './style.css';

class SalesPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            salesList: [],
            modalShow: false,
            saleItem: {},
            updating: false
        };
    }

    // Get all sales list
    getAllSalesList() {
        fetch(process.env.REACT_APP_API_URL+"/sales")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        salesList: result,
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            );
    }    

    componentDidMount() {
        this.getAllSalesList();
    }

    // Edit sales button
    editBtnFormatter = (cell, row) => {
        return <Button variant="danger" onClick={() => this.handleModalShow(row)}>Edit</Button>
    }
    
    // Display edit modal
    handleModalShow = (row) => { 
        this.setState({modalShow: true, saleItem: row})
    }

    // Close edit modal
    handleClose = ()=> {
        this.setState({modalShow: false, saleItem:{}})
    }

    // Update sales data
    handleUpdate = (data) => {
        // Preparing form data for update
        const formData = new FormData();
            formData.append('model', data.model);            
            formData.append('sn', data.sn);
            formData.append('buyer', data.buyer);
            formData.append('s_date', data.s_date);
            formData.append('invoice', data.invoice);
            this.setState({
                ...this.state,
                updating: true
            });

        fetch(process.env.REACT_APP_API_URL+"/sales/"+data.id, {
            method: 'PUT',
            body: formData
        })
        .then(res => res.json())
        .then((result) => {
            // update row
            let {salesList} = this.state;
            for (let i =0; i<salesList.length; i++) {
                if(salesList[i].id === data.id) {
                    salesList[i] = {...salesList[i], ...result}
                    continue
                }
            }
            this.setState({...this.state.salesList, ...salesList})
            this.setState({updating: false})
        }).catch((err) => {
            console.log(err);
        });
        
        this.setState({modalShow: false, saleItem: {}})
    }

    render() {

        const { error, isLoaded, salesList } = this.state;
        const { history } = this.props;

        // invoice file icon
        function invoiceFormatter(cell, row) {
            if (row.invoice === null) {
                return ''
            } else {
                return <a href={row.invoice} target="blank"><i className="fa fa-file-o"></i></a>
            }            
        }

        if (error) { // sales list load error
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
            
                    />
        } else {
            return (
                <>
                    <BootstrapTable
                        data={salesList}
                        bordered={false}
                        striped
                        hover
                        pagination
                        search
                        searchPlaceholder="Serial number"
                        >
                        <TableHeaderColumn isKey dataField='model'>Make and Model</TableHeaderColumn>
                        <TableHeaderColumn dataField='sn' dataSort>Serial number</TableHeaderColumn>
                        <TableHeaderColumn dataField='buyer'>Customer</TableHeaderColumn>
                        <TableHeaderColumn dataField='date'>Sales date</TableHeaderColumn>
                        <TableHeaderColumn dataField='invoice' dataFormat={invoiceFormatter}>Invoice</TableHeaderColumn>
                        <TableHeaderColumn dataField='button' dataFormat={this.editBtnFormatter}></TableHeaderColumn>
                    </BootstrapTable>
                    {/* register sale button */}
                    <Button variant="primary" onClick={()=>history.push('/registersale')}>Add new sale</Button>
                    {/* edit modal */}
                    <EditModal show={this.state.modalShow} data={this.state.saleItem} handleClose={this.handleClose} handleUpdate={this.handleUpdate} />
                </>
            )
        
        }
    }
}

export default withRouter(SalesPage);