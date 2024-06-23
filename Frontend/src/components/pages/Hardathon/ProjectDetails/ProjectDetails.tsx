import "./ProjectDetails.scss"
import React, {useEffect, useState} from "react";
import Logo from "../../../utils/logo/Logo"
import {Link} from "react-router-dom";


export const ProjectDetails = () => {
    return (
        <section className={"page page-section"}>
            <Logo title="хардатон 2024"/>
             <button className={"button-main2"}>
                <Link className="link" to="../.." relative={"path"}>
                    <p className={"text-light text-uppercase fw-bold fs-6 m-0"}>назад</p>
                </Link>
            </button>
            <div className = {"main-container"}>
                <div className={"text-main1"}>
                    <p>Дата проведения: 31.10.2024</p>
                    <p>Старт приёма заявок: 20.10.2024</p>
                    <p>Окончание регистрации: 26.10.2024</p>
                    <p>Подведение итогов: 10.11.2024</p>
                    <p>Место проведения: <a className="link-place" href="#form">адрес/ссылка</a></p>
                </div>
            </div>
            
            <div className={"buttons-group"}>
                    <button className={"button-gr"} >
                        <a className="link-group" href="#form">УПОМИНАНИЯ В СМИ</a>
                    </button>
                    <button className={"button-gr"}>
                        <Link className="link-group" to="">
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
                    {/*<Link className="link" to={"../partners"} relative={"path"}>*/}
                    <Link className="link" to={"/partners"} relative={"path"}>
                        <p className={"link-group"}>ПАРТНЁРЫ</p>
                    </Link>
                    </button>
            </div>
        </section>
    )
}