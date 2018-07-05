import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExampleTwo } from '../redux/actions';
import get from 'lodash.get';

class ExampleContentComponent extends Component {
    constructor() {
        super();
        this.fetch = this.fetch.bind(this);
    }

    fetch(e) {
        this.props.fetchExampleTwo();
    }

    render() {
        const data = get(this, 'props.exampleTwo') || [];
        return (
            <React.Fragment>
                <p>Example app content goes here...</p>
                <button type="text" onClick={this.fetch}>
                    click it
                </button>
                {data.map((obj, idx) => <p key={idx}>{obj.text}</p>)}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ async: { exampleTwo } }) => ({
    exampleTwo
});
const mapDispatchToProps = { fetchExampleTwo };

export const ExampleContent = connect(mapStateToProps, mapDispatchToProps)(
    ExampleContentComponent
);
