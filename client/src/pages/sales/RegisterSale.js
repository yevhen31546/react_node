import React from 'react';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';

import './style.css'


class RegisterSale extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            model: '',
            sn: '',
            buyer: '',
            s_date: '',
            invoice: '',
            submitted: '',
            registering: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFileChange(e) {
        this.setState({ invoice: e.target.files[0] })
    }

    handleSave(e) {
        e.preventDefault();

        this.setState({...this.state, submitted: true });
        const { model, sn, buyer, s_date, invoice } = this.state;
        
        if (model && sn && buyer && s_date && invoice) {
            const formData = new FormData();
            formData.append('model', model);            
            formData.append('sn', sn);
            formData.append('buyer', buyer);
            formData.append('s_date', s_date);
            formData.append('invoice', invoice);
            this.setState({
                ...this.state,
                submitted: true,
                registering: true
            });
            console.log(this.state);
            // console.log("form data", formData);
            fetch(process.env.REACT_APP_API_URL+"/sales", {
                method: 'POST',
                // headers: {'Content-type': 'application/json'},
                body: formData
                // body: JSON.stringify(this.state)
            }).then((data) => {
                const tempData = JSON.parse(JSON.stringify(this.state));
                Object.keys(tempData).map(key => tempData[key] = '');
                this.setState({...tempData});
                console.log(this.state);
            }).catch((err) => {
                console.log(err);
            });
        }
        
    }

    render() {
        const {model, sn, buyer, s_date, invoice, submitted, registering} = this.state;
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    </Col>
                    <Col md="auto" id="form_area">
                        <h2 className="mt-4 mb-4">
                            Register new sales
                        </h2>
                        {registering &&
                            alert('Successfully added!')
                        }
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" name="model" value={model} onChange={this.handleChange} placeholder="Make and Model" />
                                {submitted && !model &&
                                    <div className="help-block">Please provide model name</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="sn" value={sn} onChange={this.handleChange} placeholder="Serial number" />
                                {submitted && !sn &&
                                    <div className="help-block">Please provide serial number</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" name="buyer" value={buyer} onChange={this.handleChange} placeholder="Buyer information" />
                                {submitted && !buyer &&
                                    <div className="help-block">Please provide buyer information</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Sales date</Form.Label>
                                <Form.Control type="date" name="s_date" value={s_date} onChange={this.handleChange} date-format="DD MMMM YYYY"/>
                                {submitted && !s_date &&
                                    <div className="help-block">Please select sales date</div>
                                }
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Invoice PDF</Form.Label>
                                <Form.Control type="file" name="invoice" onChange={this.handleFileChange} />
                                {submitted && !invoice &&
                                    <div className="help-block">Please choose invoice file</div>
                                }
                            </Form.Group>
                            
                            <Button variant="primary" type="button" onClick={this.handleSave}>
                                SAVE
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

export default RegisterSale;
