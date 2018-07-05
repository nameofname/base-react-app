import React from 'react';

export const Error = ({ messages }) => (
    <React.Fragment>
        {messages.map((message, idx) => (
            <p key={idx} style={{ color: 'red' }}>
                {JSON.stringify(message)}
            </p>
        ))}
    </React.Fragment>
);
