import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

var messages = []
class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            sn: '',
            buyer: '',
            s_date: '',
            invoice: '',
            update: false,
            err: {
                display: false,
                msg: []
            }
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

    handleItem = async() => {
        messages = []
        let data = this.state;
        let keys = Object.keys(data)
        console.log(data);
        // console.log(keys[3]);
        // console.log(data[keys[3]])
        for (let i =0; i< 5; i++) {
            if (data[keys[i]] === '') messages.push(keys[i])
        }
        console.log(messages)
        if(messages.length > 0) {
            await this.setState({err: {
            display: true,
            msg: [...messages]
            }}) 
        } else {
            this.setState({err:{display: false}})
        }

        console.log(this.state.err.display)
        if(!this.state.err.display) {
            this.setState({ display: false})
            this.props.handleSave(this.state)
        }
    }

    render() {
        var err_result = messages.map ((item, index) => (
            <p key={index}>error in {item}</p>
        ))

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update sale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><input className="form-control" type="text" name="model" defaultValue={this.props.data.model} onChange={(e) => this.handleChange(e)} /></p>
                    <p><input className="form-control" type="text" name="sn" defaultValue={this.props.data.sn} onChange={(e) => this.handleChange(e)} /></p>
                    <p><input className="form-control" type="text" name="buyer" defaultValue={this.props.data.buyer} onChange={(e) => this.handleChange(e)} /></p>
                    <p><input className="form-control" type="date" name="s_date" defaultValue={this.props.data.date} onChange={(e) => this.handleChange(e)} /></p>
                    <p><input type="file" name="invoice" onChange={(e) => this.handleFileChange(e)} /></p>
                    <div className="show_msg" style={{color: 'red', display: this.state.err.display ? '' : 'none'}}>{err_result}</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={ this.handleItem}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditModal;