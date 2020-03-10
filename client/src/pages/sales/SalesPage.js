import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class SalesPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        var products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }];
        return (
            <BootstrapTable
                data={products}
                striped
                hover
                condensed
                pagination
                insertRow
                deleteRow
                search
                >
                <TableHeaderColumn isKey dataField='id' dataAlign="right" dataSort>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name' dataSort>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price' dataAlign="center">Product Price</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default SalesPage;