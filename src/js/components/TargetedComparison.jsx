import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCorrelations } from '../store/actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class TargetedComparison extends Component {
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

    render() {
        const { updateSelected, fetchCorrelations } = this;
        const { correlations, tickers } = this.props;
        const { selected } = this.state;

        return (
            <div>
                <p>Choose tickers :</p>
                <Select
                    name="tickers-select"
                    value={selected}
                    onChange={updateSelected}
                    options={tickers.map(t => ({ value: t, label: t }))}
                    multi={true}
                />

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
            </div>
        );
    }
}

const mapStateToProps = ({ async: { correlations, tickers } }) => ({
    correlations,
    tickers
});
const mapDispatchToProps = {
    fetchCorrelations
};
export default connect(mapStateToProps, mapDispatchToProps)(TargetedComparison);
