import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'
// import component
// import EditModal from '../../components/editWarrantyModal';
import UpdateWarranty from "./UpdateWarranty";
// import style
import './style.css';

class WarrantyPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            warrantyList: [],
            editShow: false,
            warrantyItem: {},
            options: ['Paid', 'Debt']
        };
    }

    // Get all warranty list
    getAllWarrantyList() {
        fetch(process.env.REACT_APP_API_URL+"/warranty")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        warrantyList: result,
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
        this.getAllWarrantyList();
    }

    // Edit warranty button
    editBtnFormatter = (cell, row) => {
        return <Button variant="danger" onClick={() => this.showEditWarranty(row)}>Edit</Button>
    }

    // Print warranty button
    printBtnFormatter = (cell, row) => {
        return <Button variant="success">Print</Button>
    }
    
    // Display edit component
    showEditWarranty = (row) => { 
        this.setState({editShow: true, warrantyItem: row})
    }

    // Update warranty data
    handleUpdate = (data) => {
        // update row 
        let {warrantyList} = this.state;
        for (let i =0; i<warrantyList.length; i++) {
            if(warrantyList[i].id === data.id) {
                warrantyList[i] = {...warrantyList[i], ...data}
                continue
            }
        }
        this.setState({...this.state.warrantyList, ...warrantyList, editShow: false, warrantyItem: {}})
    }

    render() {

        const { error, isLoaded, warrantyList } = this.state;
        const { history } = this.props;
        let index = 0;
        for (var i=0; i<warrantyList.length; i++) {
            index++;
            warrantyList[i]['index'] = index;
        }
        console.log('warranty list..', warrantyList)

        if (error) { // warranty list load error
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
                {/* edit warranty */}
                {(this.state.editShow) ?
                        <UpdateWarranty data={this.state.warrantyItem} handleUpdate={this.handleUpdate} /> : 
                        <>
                        <BootstrapTable
                            data={warrantyList}
                            bordered={false}
                            striped
                            hover
                            pagination
                            search
                            searchPlaceholder="Serial number"
                            >
                            <TableHeaderColumn isKey dataField='index'>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='model'>Make and Model</TableHeaderColumn>
                            <TableHeaderColumn dataField='sn' dataSort>Serial number</TableHeaderColumn>
                            <TableHeaderColumn dataField='rec_date'>Receive date</TableHeaderColumn>
                            <TableHeaderColumn dataField='buyer'>Customer</TableHeaderColumn>
                            <TableHeaderColumn dataField='ret_date'>Returned date</TableHeaderColumn>
                            <TableHeaderColumn dataField='deliv_date'>Delivery date</TableHeaderColumn>
                            <TableHeaderColumn dataField='updated_at'>Last update</TableHeaderColumn>
                            <TableHeaderColumn dataField='button' dataFormat={this.editBtnFormatter}></TableHeaderColumn>
                            <TableHeaderColumn dataField='button' dataFormat={this.printBtnFormatter}></TableHeaderColumn>
                        </BootstrapTable>
                        {/* register warranty button */}
                        <Button variant="primary" onClick={()=>history.push('/registerwarranty')}>Add new warranty</Button>
                        </>
                }
                </>
            )
        
        }
    }
}

export default withRouter(WarrantyPage);