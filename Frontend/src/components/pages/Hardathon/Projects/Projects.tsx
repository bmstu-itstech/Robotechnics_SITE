import "./Projects.scss"
import React, {useEffect, useState} from "react";
import Logo from "../../../utils/logo/Logo"
import {Link} from "react-router-dom";


export const Proj = () => {
    return (
        <section className={"page-section"}>
             <button className={"button-main-back"}>
                    <Link className="link" to="/Hardathon/ProjectDetails">
                        <p className={"text-light text-uppercase fw-bold fs-6 m-0"}>назад</p>
                    </Link>
                </button>
            <Logo title="название проекта"/>
            <div className = {"main-container-proj"}></div>
            <div className={"buttons-group-projects"}>
                    <button className={"button-gr-proj"} >
                        <a className="link-group" href="#form">ОПИСАНИЕ</a>
                    </button>
                    <button className={"button-gr-proj"}>
                        <a className="link-group" href="#form">ПРАВИЛА СОРЕВНОВАНИЯ</a>
                    </button>
                    <button className={"button-gr-proj"}>
                        <a className="link-group" href="#form">МАСШТАБ РЕАЛИЗАЦИИ</a>
                    </button>
            </div>
        </section>
    )
}