import React from 'react';
import './logo.scss';
import logo from "../../assets/icons/logo.svg";
import bauman_logo from "../../assets/icons/bauman_logo.svg";
import crown_logo from "../../assets/icons/crown_logo.svg";

const Logo = ({ title = "" }) => {
    return (
        <div className="logo-row">
            <div className="hidden_logo">
                <img src={bauman_logo} className="logo-img logo-img-bauman" alt="" />
            </div>
            <div className="hidden_logo">
                <img src={crown_logo} className="logo-img" alt="" />
            </div>
            <div>
                <img src={logo} className="logo-img" alt="" />
            </div>
            <p className="title-text text-uppercase">{title}</p>
        </div>
    );
};

export default Logo;
