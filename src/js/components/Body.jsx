import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickers, fetchAllCorrelations } from '../store/actions';
import AllCorrelations from './AllCorrelations';
import TargetedComparison from './TargetedComparison';

const Loading = () => (
    <div className="app-body">
        <p>loading</p>
    </div>
);

// import router from '../router';

class Body extends Component {
    fetchAllCorrelations() {
        this.props.fetchAllCorrelations(this.props.tickers);
    }

    render() {
        const { tickers, allCorrelations, fetchTickers } = this.props;

        if (tickers.length === 0) {
            fetchTickers();
            return <Loading />;
        } else if (allCorrelations.length === 0) {
            this.fetchAllCorrelations();
            return <Loading />;
        }

        return (
            <div className="app-body">
                <TargetedComparison />
                <AllCorrelations />
            </div>
        );
    }
}

const mapStateToProps = ({
    async: { tickers, correlations, allCorrelations }
}) => ({
    tickers,
    correlations,
    allCorrelations
});
const mapDispatchToProps = {
    fetchTickers,
    fetchAllCorrelations
};
export default connect(mapStateToProps, mapDispatchToProps)(Body);
