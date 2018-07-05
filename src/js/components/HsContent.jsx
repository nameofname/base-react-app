import React, { Component } from 'react';
import { connect } from 'react-redux';
// import get from 'lodash.get';

class HsContentComponent extends Component {
    render() {
        const { image, fields } = this.props || {};

        return (
            <React.Fragment>
                <img
                    src={image}
                    alt="form image..."
                    style={{
                        float: 'left',
                        maxWidth: '300px'
                    }}
                />
                {fields.map(({ type, uuid, name, bounding_box }) => (
                    <p>{type}</p>
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ async: { image, fields } }) => ({
    image,
    fields
});

export const HsContent = connect(mapStateToProps)(HsContentComponent);
