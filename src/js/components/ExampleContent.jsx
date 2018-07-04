import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExample } from '../redux/actions';

class ExampleContentComponent extends Component {
    constructor() {
        super();
        this.fetchExample = this.fetchExample.bind(this);
    }

    fetchExample(e) {
        this.props.fetchExample(e.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <p>here is the inside of your app...</p>
                <input type="text" onBlur={this.fetchExample} />
                <p>{this.props.exampleData}</p>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ async: { exampleData } }) => ({
    exampleData
});
const mapDispatchToProps = { fetchExample };

export const ExampleContent = connect(mapStateToProps, mapDispatchToProps)(
    ExampleContentComponent
);
