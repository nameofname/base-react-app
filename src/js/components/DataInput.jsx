import React from 'react';

const rowStyles = {
    backgroundColor: '#f1f1f1',
    border: '1px solid #ccc',
    margin: '10px',
    padding: '10px'
};

const CheckBox = ({ type, uuid, name }) => (
    <label>
        <input name={name} type="checkbox" />
        {name}
    </label>
);

const Entry = ({ type, uuid, name }) => (
    <label>
        {name}
        <input name={name} />
    </label>
);

const DataInput = field => {
    const { type, uuid, name } = field;
    return (
        <div style={rowStyles}>
            <p>{name}</p>
            {type === 'checkbox' ? (
                <CheckBox {...field} />
            ) : (
                <Entry {...field} />
            )}
        </div>
    );
};

export { DataInput };
