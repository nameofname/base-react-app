import React from 'react';

export const Error = ({ messages }) => (
    <React.Fragment>{messages.map(message => <p>message</p>)}</React.Fragment>
);
