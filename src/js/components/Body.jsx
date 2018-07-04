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
    render() {
        return (
            <div className="app-body">
                <p>heer is the inside of your app.</p>
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
