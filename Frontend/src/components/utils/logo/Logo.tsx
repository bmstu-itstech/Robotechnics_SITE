import React from 'react';
import './logo.scss';
import logo from "../../assets/icons/logo.svg";

const Logo = ({ title = "" }) => {
    return (
        <div className="circle-row">
            <img src={logo} className="ico-circle" alt=""/>
            <p className="title-text text-uppercase">{title}</p>
        </div>
    );
};

export default Logo;
