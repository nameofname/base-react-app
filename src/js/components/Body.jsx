import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickers, fetchCorrelations } from '../store/actions';
// import router from '../router';

class Body extends Component {
    constructor() {
        super();
        this.fetchTickers = this.fetchTickers.bind(this);
        this.fetchCorrelations = this.fetchCorrelations.bind(this);
    }

    componentDidMount() {
        this.fetchTickers();
    }

    fetchTickers() {
        this.props.fetchTickers();
    }

    fetchCorrelations() {
        // TODO ! connect to input.
        this.props.fetchCorrelations(['AAPL', 'MSFT']);
    }

    render() {
        const { fetchCorrelations } = this;
        const { tickers, correlations } = this.props;
        return (
            <div className="app-body">
                <p>
                    Welcome to my base react app. Everything is all set up for
                    you to start coding.
                </p>
                <p>Choose from the following list of tickers</p>
                <div>{tickers.map(ticker => <p>{ticker}</p>)}</div>
                <div className="fetch-data" />
            </div>
        );
    }
}

const mapStateToProps = ({ async: { tickers, correlations } }) => ({
    tickers,
    correlations
});
const mapDispatchToProps = { fetchTickers, fetchCorrelations };
export default connect(mapStateToProps, mapDispatchToProps)(Body);
