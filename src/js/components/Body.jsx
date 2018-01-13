import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolitics } from '../store/actions';

class Body extends Component {
    constructor() {
        super();
        this.fetchApi = this.fetchApi.bind(this);
    }

    fetchApi() {
        console.log('this is me fetching');
        fetchPolitics();
    }

    render() {
        const { fetchApi } = this;
        const { text, data } = this.props;
        return (
            <div className="app-body">
                <div>This is the inside of your thing.</div>
                <p>Here's an arbitrary bit of text from the store :</p>
                <p>{text}</p>
                <p>And here's some data that I keep in my store as well :</p>
                {data.map((str, idx) => {
                    return <p key={idx}>{str}</p>;
                })}
                <button onClick={fetchApi}>Click it.</button>
            </div>
        );
    }
}

export default connect(({ ui: { text }, async: { data } }) => ({ text, data }))(
    Body
);
