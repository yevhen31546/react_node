import React from 'react';

class WarrantyPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch(process.env.REACT_APP_API_URL+"/warranty")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
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
