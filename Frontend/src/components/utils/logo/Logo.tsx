import React from 'react';
import '../../utils/roots/logo_root.scss'
import './logo.scss';
import logo from "../../assets/icons/logo.svg";
import bauman_logo from "../../assets/icons/bauman_logo.svg";
import crown_logo from "../../assets/icons/crown_logo.svg";

const Logo = ({ title = "" }) => {
    return (
        <div className="logo-row">
            <div className="hidden_logo">
                <img src={bauman_logo} className="logo-img logo-img-bauman" draggable="false" alt="bauman_logo" />
            </div>
            <div className="hidden_logo">
                <img src={crown_logo} className="logo-img" draggable="false" alt="crown_logo" />
            </div>
            <div>
                <img src={logo} className="logo-img" draggable="false" alt="crm_logo" />
            </div>
            <p className="title-text text-uppercase">{title}</p>
        </div>
    );
};

export default Logo;
