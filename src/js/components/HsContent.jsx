import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataInput } from './DataInput';
import { DocImage } from './DocImage';
const fieldStyles = {
    float: 'left'
};

class HsContentComponent extends Component {
    render() {
        const { image, fields, template_name } = this.props || {};

        return (
            <React.Fragment>
                <h1>{template_name}</h1>
                <DocImage image={image} fields={fields} />
                <div style={fieldStyles}>
                    {fields.map((field, idx) => (
                        <DataInput {...field} key={idx} />
                    ))}
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ async: { image, fields } }) => ({
    image,
    fields
});

export const HsContent = connect(mapStateToProps)(HsContentComponent);
