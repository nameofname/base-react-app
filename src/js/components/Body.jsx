import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExample } from '../redux/actions';
import { Loading } from './Loading';
import { Error } from './Error';
import { ExampleContent } from './ExampleContent';

class Body extends Component {
    render() {
        const { isLoading, errorMessages } = this.props;
        let Body;

        if (isLoading) {
            Body = <Loading />;
        } else if (errorMessages && errorMessages.length) {
            Body = (
                <React.Fragment>
                    <Error messages={errorMessages} />
                    <ExampleContent />
                </React.Fragment>
            );
        } else {
            Body = <ExampleContent />;
        }

        return <div className="app-body">{Body}</div>;
    }
}

const mapStateToProps = ({
    async: { ExampleContent, isLoading, errorMessages }
}) => ({ ExampleContent, isLoading, errorMessages });

const mapDispatchToProps = {
    fetchExample
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
