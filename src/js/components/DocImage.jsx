import React from 'react';

const blueOverlayStyles = {
    color: 'blue',
    opacity: '0.2'
};

const LilBlueBox = () => (
    <div
        style={blueOverlayStyles}
        onClick={e => {
            console.log('yall clicked!');
        }}
    />
);

const DocImage = ({ image, fields }) => {
    return (
        <div
            style={{
                float: 'left',
                position: 'relative'
            }}
        >
            <img
                src={image}
                alt="form image..."
                style={{
                    maxWidth: '600px'
                }}
            />
            {fields.map(({ bounding_box }) => {
                <LilBlueBox {...bounding_box} />;
            })}
        </div>
    );
};

export { DocImage };
