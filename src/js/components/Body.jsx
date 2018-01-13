import React, { Component } from 'react';
import { connect } from 'react-redux';

class Body extends Component {
    constructor() {
        super();
        this.fetchApi = this.fetchApi.bind(this);
    }

    fetchApi() {
        console.log('this is me fetching.');
    }

    render() {
        const { fetchApi } = this;
        const { text } = this.props;
        return (
            <div>
                <div className="app-body">
                    This is the inside of your thing.
                </div>
                <p>{text}</p>
                <button onClick={fetchApi}>Click it.</button>
            </div>
        );
    }
}

export default connect(({ ui: { text } }) => ({ text }))(Body);
