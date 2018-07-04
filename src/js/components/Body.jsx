import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickers, fetchAllCorrelations } from '../redux/actions';

const Loading = () => (
    <div className="app-body">
        <p>loading</p>
    </div>
);

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
