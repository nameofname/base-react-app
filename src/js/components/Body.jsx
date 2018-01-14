import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickers, fetchCorrelations } from '../store/actions';
import router from '../router';

class Body extends Component {
    constructor() {
        super();
        this.fetchTickers = this.fetchTickers.bind(this);
        this.fetchCorrelations = this.fetchCorrelations.bind(this);
    }

    fetchTickers() {
        this.props.fetchTickers();
    }

    fetchCorrelations() {
        // TODO ! connect to input.
        this.props.fetchCorrelations(['AAPL', 'MSFT']);
    }

    render() {
        const { fetchTickers, fetchCorrelations } = this;
        const { data } = this.props;
        return (
            <div className="app-body">
                <p>
                    Welcome to my base react app. Everything is all set up for
                    you to start coding.
                </p>
                <p>Choose from the following list of tickers</p>
                <div className="fetch-data">
                    {data.map(({ title, link }, idx) => {
                        return (
                            <a key={idx} href={link}>
                                <p>{title}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ async: { data } }) => ({ data });
const mapDispatchToProps = { fetchTickers, fetchCorrelations };
export default connect(mapStateToProps, mapDispatchToProps)(Body);
