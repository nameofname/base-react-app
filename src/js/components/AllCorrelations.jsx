import React, { Component } from 'react';
import ComparisonTable from './ComparisonTable';
import { connect } from 'react-redux';

class AllCorrelations extends Component {
    render() {
        const { allCorrelations } = this.props;
        return (
            <div>
                <h2>Most positively correlated stocks :</h2>
                <hr />
                <ComparisonTable correlations={allCorrelations.slice(0, 10)} />

                <h2>Least correlated stocks :</h2>
                <hr />
                <ComparisonTable correlations={allCorrelations.slice(-10)} />
            </div>
        );
    }
}

const mapStateToProps = ({ async: { allCorrelations } }) => ({
    allCorrelations
});
export default connect(mapStateToProps)(AllCorrelations);
