import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import history from './../../history';

import './style.css';
import { Link } from 'react-router-dom';

class SalesPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            salesList: []
        };
    }

    callAPI() {
        fetch(process.env.REACT_APP_API_URL+"/sales")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        salesList: result
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

    render() {

        const { error, isLoaded, salesList } = this.state;

        function editBtnFormatter() {
            return '<button type="button" class="btn btn-danger edit">Edit</Button>';
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(salesList);

            return (
                <div>
                    <BootstrapTable
                        data={salesList}
                        bordered={false}
                        striped
                        hover
                        pagination
                        paginationRowsPerPageOptions={10, 15, 20, 25, 30}
                        search
                        searchPlaceholder="Serial number"
                        >
                        <TableHeaderColumn isKey dataField='model'>Make and Model</TableHeaderColumn>
                        <TableHeaderColumn dataField='sn' dataSort>Serial number</TableHeaderColumn>
                        <TableHeaderColumn dataField='buyer'>Customer</TableHeaderColumn>
                        <TableHeaderColumn dataField='date'>Sales date</TableHeaderColumn>
                        <TableHeaderColumn dataField='invoice' dataAlign="center">Invoice</TableHeaderColumn>
                        <TableHeaderColumn dataField='button' dataFormat={editBtnFormatter}></TableHeaderColumn>
                    </BootstrapTable>
                    
                    {/* <Button variant="primary" onClick={()=>history.push('/registersale')}>Add new sale</Button> */}
                    <Link to="/registersale">
                        <Button variant="primary">Add new sale</Button>
                    </Link>
                </div>
            )
        
        }
    }
}

export default SalesPage;