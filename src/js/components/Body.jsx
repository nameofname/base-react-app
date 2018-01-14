import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickers, fetchCorrelations } from '../store/actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// import router from '../router';

class Body extends Component {
    constructor() {
        super();
        this.fetchTickers = this.fetchTickers.bind(this);
        this.fetchCorrelations = this.fetchCorrelations.bind(this);
        this.state = {
            selected: []
        };
    }

    componentDidMount() {
        this.fetchTickers();
    }

    fetchTickers() {
        this.props.fetchTickers();
    }

    fetchCorrelations(valueArr) {
        const tickerArr = valueArr.map(({ value }) => value);
        this.setState({
            selected: tickerArr
        });
        this.props.fetchCorrelations(tickerArr);
    }

    render() {
        const { fetchCorrelations } = this;
        const { tickers, correlations } = this.props;
        const { selected } = this.state;

        return (
            <div className="app-body">
                <p>Choose tickers :</p>
                <Select
                    name="tickers-select"
                    value={selected}
                    onChange={fetchCorrelations}
                    options={tickers.map(t => ({ value: t, label: t }))}
                    multi={true}
                />
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
