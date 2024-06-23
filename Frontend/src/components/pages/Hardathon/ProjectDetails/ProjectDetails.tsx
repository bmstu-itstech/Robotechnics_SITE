import "./ProjectDetails.scss"
import React, {useEffect, useState} from "react";
import Logo from "../../../utils/logo/Logo"
import {Link} from "react-router-dom";


export const PartnersH = () => {
    return (
        <section className={"page-section"}>
             <button className={"button-main-back"}>
                    <Link className="link" to="">
                        <p className={"text-light text-uppercase fw-bold fs-6 m-0"}>назад</p>
                    </Link>
                </button>
            <Logo title="хардатон 2023"/>
            <div className = {"main-container"}>
                <div className={"text-main1"}>
                    <p>Дата проведения: xx.xx.20xx</p>
                    <p>Старт приёма заявок: xx.xx.20xx</p>
                    <p>Окончание регистрации: xx.xx.20xx</p>
                    <p>Подведение итогов: xx.xx.20xx</p>
                    <p>Место проведения: <a className="link-place" href="#form">адрес/ссылка</a></p>
                </div>
                <div className = {"additional-container"}></div>
            </div>
            
            <div className={"buttons-group"}>
                    <button className={"button-gr"} >
                        <a className="link-group" href="#form">УПОМИНАНИЯ В СМИ</a>
                    </button>
                    <button className={"button-gr"}>
                        <Link className="link-group" to="/Hardathon/Projects">
                            <p className={"text-projects"}>ПРОЕКТЫ</p>
                     </Link>
                    </button>
                    <button className={"button-gr"}>
                        <a className="link-group" href="#form">ФОТО</a>
                    </button>
                    <button className={"button-gr"}>
                        <a className="link-group" href="#form">ДОКУМЕНТЫ</a>
                    </button>
                    <button className={"button-gr"}>
                    <Link className="link" to="/Hardathon/Partners">
                        <p className={"link-group"}>ПАРТНЁРЫ</p>
                    </Link>
                    </button>
            </div>
        </section>
    )
}