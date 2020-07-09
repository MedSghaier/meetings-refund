import React from 'react';

const Button = ({ children, ...otherProps }) => (
    <button className="btn" {...otherProps}>{children}</button>
);

export default Button;
