import React, { Component } from 'react';

class Body extends Component {
    constructor() {
        super();
        this.fetchApi = this.fetchApi.bind(this);
    }

    fetchApi() {
        console.log('this is me fetching.');
    }

    render() {
        return (
            <div className="app-body">This is the inside of your thing.</div>
        );
    }
}

export default Body;
