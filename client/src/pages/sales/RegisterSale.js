import React from 'react';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';
import './style.css'

class RegisterSale extends React.Component {
    constructor (props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    </Col>
                    <Col md="auto" id="form_area">
                        <h2 className="mt-4 mb-4">
                            Register new sales
                        </h2>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Make and Model" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" placeholder="Serial number" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" placeholder="Buyer information" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Sales date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Invoice PDF</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
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
