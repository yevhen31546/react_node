import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import history from './../../history';

import './style.css';
import { Link } from 'react-router-dom';
class SalesPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        var products = [{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },{
            model: "Makita DJK231",
            sn: "123JSD1",
            customer: "Mati",
            s_date: "01-01-2020",
            invoice: ""
        }, {
            model: "Milwaukee M80",
            sn: "89JS78X",
            customer: "John Appleseed",
            s_date: "07-01-2020",
            invoice: "File"
        },{
            model: "Bosch GK123",
            sn: "457756A",
            customer: "Appleseed Steve",
            s_date: "24-01-2020",
            invoice: "File"
        },];

        function editBtnFormatter() {
            return '<button type="button" class="btn btn-danger edit">Edit</Button>';
        }
        return (
            <div>
                <BootstrapTable
                    data={products}
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
                    <TableHeaderColumn dataField='customer'>Customer</TableHeaderColumn>
                    <TableHeaderColumn dataField='s_date'>Sales date</TableHeaderColumn>
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

export default SalesPage;