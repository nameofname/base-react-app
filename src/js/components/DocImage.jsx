import React from 'react';

const totalWidth = '600';
const totalHeight = '776.5';
const pos = (total, n) => `${n * total}px`;
const perc = (total, a, b) => {
    const res = `${total * Math.abs(b - a)}px`;
    console.log(res, total, a, b);
    return res;
};

const blueOverlayStyles = box => ({
    position: 'absolute',
    backgroundColor: 'blue',
    opacity: '0.2',
    top: pos(totalHeight, box[0]),
    left: pos(totalWidth, box[1]),
    height: perc(totalHeight, box[0], box[2]),
    width: perc(totalWidth, box[1], box[3]),
    zIndex: 1
});

const LilBlueBox = ({ box }) => {
    return (
        <div
            style={blueOverlayStyles(box)}
            onClick={e => {
                console.log('yall clicked!');
            }}
        />
    );
};

const DocImage = ({ image, fields }) => {
    return (
        <div
            style={{
                float: 'left',
                position: 'relative',
                width: `${totalWidth}px`,
                height: `${totalHeight}px`
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    width: `${totalWidth}px`,
                    height: `${totalHeight}px`
                }}
            >
                {fields.map(({ bounding_box }, idx) => {
                    return <LilBlueBox box={bounding_box} key={idx} />;
                })}
                <img
                    src={image}
                    alt="form image..."
                    style={{
                        position: 'absolute',
                        zIndex: 0,
                        width: `${totalWidth}px`,
                        height: `${totalHeight}px`,
                        top: '0px',
                        left: '0px'
                    }}
                />
            </div>
        </div>
    );
};

export { DocImage };
