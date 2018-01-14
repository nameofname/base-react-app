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
                <p>Here are a few links in the sample router :</p>
                <div className="sample-links">
                    <p>
                        <a href="/one">Link one</a>
                        <a href="/two">Link two</a>
                    </p>
                </div>
                <p>Here's an arbitrary bit of text from the store :</p>
                <div className="redux-data">
                    <p>{text}</p>
                </div>
                <p>And here's some API data I also keep in redux :</p>
                <div className="fetch-data">
                    {data.map(({ title, link }, idx) => {
                        return (
                            <a key={idx} href={link}>
                                <p>{title}</p>
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
