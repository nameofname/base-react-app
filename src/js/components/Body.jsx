import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickers, fetchCorrelations } from '../store/actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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

    componentDidMount() {
        this.props.fetchTickers();
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
        const { tickers, correlations } = this.props;
        const { selected } = this.state;

        if (tickers.length === 0) {
            return (
                <div className="app-body">
                    <p>loading</p>
                </div>
            );
        }

        return (
            <div className="app-body">
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

const mapStateToProps = ({ async: { tickers, correlations } }) => ({
    tickers,
    correlations
});
const mapDispatchToProps = { fetchTickers, fetchCorrelations };
export default connect(mapStateToProps, mapDispatchToProps)(Body);
