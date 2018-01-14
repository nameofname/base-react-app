import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolitics } from '../store/actions';

class Body extends Component {
    constructor() {
        super();
        this.fetchApi = this.fetchApi.bind(this);
    }

    fetchApi() {
        this.props.fetchPolitics();
    }

    render() {
        const { fetchApi } = this;
        const { text, data } = this.props;
        return (
            <div className="app-body">
                <p>
                    Welcome to my base react app. Everything is all set up for
                    you to start coding.
                </p>
                <p>Here's an arbitrary bit of text from the store :</p>
                <div className="redux-data">
                    <p>{text}</p>
                </div>
                <p>And here's some API data I also keep in redux :</p>
                <div className="fetch-data">
                    {data.map(({ title, permalink }, idx) => {
                        return (
                            <a href={`http://reddit.com/${permalink}`}>
                                <p key={idx}>{title}</p>
                            </a>
                        );
                    })}
                </div>
                <button onClick={fetchApi}>Click to fetch data.</button>
            </div>
        );
    }
}

const mapStateToProps = ({ ui: { text }, async: { data } }) => ({ text, data });
const mapDispatchToProps = { fetchPolitics };
export default connect(mapStateToProps, mapDispatchToProps)(Body);
