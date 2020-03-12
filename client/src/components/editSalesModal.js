import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            sn: '',
            buyer: '',
            s_date: '',
            invoice: ''
        };
    }

    componentDidUpdate(previousProps, previousState ) {
        if (previousProps.data !== this.props.data) {
            this.setState({...this.state, ...this.props.data})
            this.setState({s_date: this.props.data.date}) // set state for s_date
        }
    }

    handleChange =function (e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (e) => {
        this.setState({ invoice: e.target.files[0] })
    }

    // preprocessing for update
    handleBeforeUpdate = (e) => {
        e.preventDefault();
        const { model, sn, buyer, s_date } = this.state;

        if (model && sn && buyer && s_date) {
            this.props.handleUpdate(this.state)
        }
    }

    render() {
        const {model, sn, buyer, s_date} = this.state;

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update sale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><input className="form-control" type="text" name="model" defaultValue={this.props.data.model} onChange={(e) => this.handleChange(e)} /></p>
                    {!model && <div className="help-block">Please provide model name</div>}
                    <p><input className="form-control" type="text" name="sn" defaultValue={this.props.data.sn} onChange={(e) => this.handleChange(e)} /></p>
                    {!sn && <div className="help-block">Please provide serial number</div>}
                    <p><input className="form-control" type="text" name="buyer" defaultValue={this.props.data.buyer} onChange={(e) => this.handleChange(e)} /></p>
                    {!buyer && <div className="help-block">Please provide buyer information</div>}
                    <p><input className="form-control" type="date" name="s_date" defaultValue={this.props.data.date} onChange={(e) => this.handleChange(e)} /></p>
                    {!s_date && <div className="help-block">Please provide sales date</div>}
                    <p><input type="file" name="invoice" onChange={(e) => this.handleFileChange(e)} /></p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={ this.handleBeforeUpdate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditModal;