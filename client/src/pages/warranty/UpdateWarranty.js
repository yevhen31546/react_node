import React from 'react';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';
import './style.css'


class UpdateWarranty extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            model: '',// model
            sn: '', // searial number
            war_req_des: '', // description of warranty request
            war_type: '', // warranty type
            buyer: '', // buyer information
            contact_info: '', // buyer contact information
            rec_date: '', // received date
            rec_user: '', // received by user
            ret_date: '', // returned from warranty date
            war_res_des: '', // description of warranty result
            service_code: '', // service code
            price: '', // price
            invoice_flag: '', // added to invoice
            invoice_sent: '', // invoice sent
            deliv_date: '', // returned to customer
            updating: '',
            options: ['Paid', 'Debt']
        };

    }

    componentDidMount() {
        this.setState({...this.state, ...this.props.data})
    }

    handleChange = (e) => {
        if(this.state.updating) {
            this.setState({updating: ''});
        }        
      
        const { name, value } = e.target;
     
        this.setState({ [name]: value });
        if(name==="war_type") {
            this.setState({war_type:value});
        } else if (e.target.type === "checkbox") {
            this.setState({ [name]: e.target.checked });
        }
    }

    // Update warranty
    handleWarrantyUpdate = (e) => {
        e.preventDefault();

        const { model, sn, buyer, rec_date } = this.state;
        if (model && sn && buyer && rec_date) {
            this.setState({
                ...this.state,
                updating: ''
            });
            // Preparing form data for register
            // console.log('updating...', this.state)

            // Update API call
            fetch(process.env.REACT_APP_API_URL+"/warranty/"+this.state.id, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(this.state)
            })
            .then(res=>res.json())
            .then((res) => {
                // console.log('updated response..', res)
                this.props.handleUpdate(this.state);
                // intialize form field by initializing state
                // const tempData = JSON.parse(JSON.stringify(this.state));
                // Object.keys(tempData).map(key => tempData[key] = '');
                // tempData.options = ['Paid', 'Debt']
                // this.setState({...tempData});
            }).catch((err) => {
                console.log(err);
            });
        }
        
    }

    render() {
        
        const {model, sn, buyer, rec_date, updating, war_req_des,
        war_type, contact_info,  rec_user, war_res_des, service_code,
        price, ret_date, invoice_flag, invoice_sent, deliv_date} = this.state;
        let optionResult = ''
        const { options } = this.state;
        optionResult = options.map((item, index) => (
            <option value={item} key={index}>{item}</option>
        ))
        
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    </Col>
                    <Col lg="8" id="form_area">
                        <h2 className="mt-4 mb-4">
                            Update warranty
                        </h2>
                        {updating &&
                            alert('Successfully updated')
                        }
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" name="model" value={model} onChange={this.handleChange} placeholder="Make and Model" />
                                {!model &&
                                    <div className="help-block">Please provide model name</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="sn" value={sn} onChange={this.handleChange} placeholder="Serial number" />
                                {!sn &&
                                    <div className="help-block">Please provide serial number</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" name="war_req_des" value={war_req_des} rows="3" onChange={this.handleChange} placeholder="Description of the warranty request" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Warranty type</Form.Label>
                                <Form.Control as="select" name="war_type" value={war_type} onChange={this.handleChange}>
                                    {optionResult}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="buyer" value={buyer} onChange={this.handleChange} placeholder="Buyer information" />
                                {!buyer &&
                                    <div className="help-block">Please provide buyer information</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="contact_info" value={contact_info} onChange={this.handleChange} placeholder="Buyer contact information" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Received date</Form.Label>
                                <Form.Control type="date" name="rec_date" value={rec_date} onChange={this.handleChange} data-date="" data-date-format="DD MMMM YYYY"/>
                                {!rec_date &&
                                    <div className="help-block">Please provide received date</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Received by user</Form.Label>
                                <Form.Control type="text" name="rec_user" value={rec_user} onChange={this.handleChange} placeholder="" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Returned from warranty date</Form.Label>
                                <Form.Control type="date" name="ret_date" value={ret_date} onChange={this.handleChange} date-format="DD MM YYYY"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" name="war_res_des" rows="3" value={war_res_des} onChange={this.handleChange} placeholder="Description of the warranty result" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="service_code" value={service_code} onChange={this.handleChange} placeholder="Service Code" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="price" value={price} onChange={this.handleChange} placeholder="Price" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Check type="checkbox" name="invoice_flag" checked={invoice_flag} onChange={this.handleChange} label="Added to Invoice" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Check type="checkbox" name="invoice_sent" checked={invoice_sent} onChange={this.handleChange} label="Invoice sent" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Returned to customer</Form.Label>
                                <Form.Control type="date" name="deliv_date" value={deliv_date} onChange={this.handleChange} date-format="DD MMMM YYYY"/>
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={this.handleWarrantyUpdate}>
                                Update
                            </Button>
                        </Form>
                    </Col>
                    <Col xs lg="2">
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UpdateWarranty;
