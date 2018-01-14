import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    fetchTickers,
    fetchCorrelations,
    fetchAllCorrelations
} from '../store/actions';
import AllCorrelations from './AllCorrelations';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Loading = () => (
    <div className="app-body">
        <p>loading</p>
    </div>
);

// import router from '../router';

class Body extends Component {
    constructor() {
        super();
        this.updateSelected = this.updateSelected.bind(this);
        this.fetchCorrelations = this.fetchCorrelations.bind(this);
        this.state = {
            selected: []
        };
    }

    updateSelected(valueArr) {
        const tickerArr = valueArr.map(({ value }) => value);
        this.setState({
            selected: tickerArr
        });
    }

    fetchCorrelations() {
        const { selected } = this.state;
        this.props.fetchCorrelations(selected);
    }

    fetchAllCorrelations() {
        this.props.fetchAllCorrelations(this.props.tickers);
    }

    render() {
        const { updateSelected, fetchCorrelations } = this;
        const {
            tickers,
            correlations,
            allCorrelations,
            fetchTickers
        } = this.props;
        const { selected } = this.state;

        if (tickers.length === 0) {
            fetchTickers();
            return <Loading />;
        } else if (allCorrelations.length === 0) {
            this.fetchAllCorrelations();
            return <Loading />;
        }

        return (
            <div className="app-body">
                <div>
                    <p>Choose tickers :</p>
                    <Select
                        name="tickers-select"
                        value={selected}
                        onChange={updateSelected}
                        options={tickers.map(t => ({ value: t, label: t }))}
                        multi={true}
                    />
                </div>

                <button
                    className="button"
                    type="submit"
                    onClick={fetchCorrelations}
                >
                    Compare
                </button>

                <div className="fetch-data">
                    {correlations.map(({ pair, value }) => (
                        <div>
                            <p>{pair.join(' and ')}</p>
                            <p>value : {value}</p>
                        </div>
                    ))}
                </div>

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
    fetchCorrelations,
    fetchAllCorrelations
};
export default connect(mapStateToProps, mapDispatchToProps)(Body);
