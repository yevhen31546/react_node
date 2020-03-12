import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import EditModal from '../../components/editSalesModal';

import './style.css';

class SalesPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            requiredItem: 0,
            error: null,
            isLoaded: false,
            salesList: [],
            modalShow: false,
            saleItem: {}
        };
    }

    callAPI() {
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
        this.callAPI();
    }

    editBtnFormatter = (cell, row) => {
        return <Button variant="danger" onClick={() => this.handleModalShow(row)}>Edit</Button>
    }

    handleModalShow = (row) => { 
        this.setState({modalShow: true, saleItem: row})
    }

    handleClose = ()=> {
        this.setState({modalShow: false, saleItem:{}})
    }

    handleSave = (data) => {
        console.log('update data..', data);
        fetch(process.env.REACT_APP_API_URL+"/sales/"+data.id, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
            // body: JSON.stringify(data)
            // body: data
        })
        .then(res => res.json())
        .then((result) => {
            console.log('update result' , result);
        }).catch((err) => {
            console.log(err);
        });
        
        this.setState({modalShow: false, saleItem: {}})
    }

    render() {

        const { error, isLoaded, salesList } = this.state;
        const { history } = this.props;

        function invoiceFormatter(cell, row) {
            if (row.invoice === null) {
                return ''
            } else {
                return <a href={row.invoice} target="blank"><i className="fa fa-file-o"></i></a>
            }            
        }

        if (error) {
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
                <div>
                    
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
                    
                    <Button variant="primary" onClick={()=>history.push('/registersale')}>Add new sale</Button>

                    <EditModal show={this.state.modalShow} data={this.state.saleItem} handleClose={this.handleClose} handleSave={this.handleSave} />
                    
                </div>
            )
        
        }
    }
}

export default withRouter(SalesPage);