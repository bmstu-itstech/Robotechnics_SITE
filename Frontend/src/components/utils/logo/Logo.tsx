import React from 'react';
import './logo.scss';
import logo from "../../assets/icons/logo.svg";

const Logo = ({ title = "" }) => {
    return (
        <div className="logo-row">
            <img src={logo} className="logo-img" alt=""/>
            <p className="title-text text-uppercase">{title}</p>
        </div>
    );
};

export default Logo;
