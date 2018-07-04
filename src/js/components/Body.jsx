import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExample } from '../redux/actions';

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
    async: { exampleData, isLoading, errorMessages }
}) => ({ exampleData, isLoading, errorMessages });

const mapDispatchToProps = {
    fetchExample
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
