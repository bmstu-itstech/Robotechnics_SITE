import React from 'react';
import './logo.scss';

const Logo = ({ title = "" }) => {
    return (
        <div className="logo-row">
            <p className="title-text text-uppercase">{title}</p>
        </div>
    );
};

export default Logo;
