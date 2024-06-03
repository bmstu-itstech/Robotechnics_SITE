import React from 'react';
import '../../utils/roots/logo_root.scss'
import './logo.scss';
import logo from "../../assets/icons/logo.svg";
import bauman_logo from "../../assets/icons/bauman_logo.svg";
import crown_logo from "../../assets/icons/crown_logo.svg";

const Logo = ({ title = "" }) => {
    return (
        <div className="container-fluid logo-row container-fluid-margless px-0">
            <div className="container logo-block mx-0 px-0 col-1 hidden_logo">
                <img src={bauman_logo} className="logo-img logo-img-bauman img-fluid" draggable="false" alt="bauman_logo" />
            </div>
            <div className="container logo-block mx-0 px-0 col-1 hidden_logo ">
                <img src={crown_logo} className="logo-img img-fluid" draggable="false" alt="crown_logo" />
            </div>
            <div className={"container logo-block mx-0 px-0 col-1 hidden_logo display-mobile"}>
                <img src={logo} className="logo-img img-fluid" draggable="false" alt="crm_logo" />
            </div>
            <p className="title-text text-uppercase position-absolute top-50 start-50 translate-middle">{title}</p>
        </div>
    );
};

export default Logo;
