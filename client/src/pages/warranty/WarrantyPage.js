import React from 'react';

class WarrantyPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/warranty")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        console.log(this.state.apiResponse)
    }

    render() {
        return (
            <div>
                <h2>
                    {this.state.apiResponse}
                </h2>
            </div>
        )
    }
}

export default WarrantyPage;
