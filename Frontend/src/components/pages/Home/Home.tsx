import "./home.scss"
import Logo from "../../utils/logo/Logo"
import {Link} from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <section className="main-page">
            <Logo />
            <div className={"container-fluid"}>
                <p className={"title-main col-11 text-uppercase text-light fw-bold lh-1"}>Центр молодежной
                    робототехники</p>
                <p className={"text-main h3 fw-light text-light"}>Центр молодёжной робототехники – идеальное место
                    для создания своих робототехнических проектов различной направленности: от колесных роботов и
                    манипуляторов до беспилотников. Кроме того, команды нашего Центра регулярно участвуют в
                    различных соревнованиях и конференциях, включая мировой уровень.</p>
                <button className={"button-main "}>
                    <Link className="link" to="/news">
                        <p className={"text-light text-uppercase fw-bold fs-4 m-0"}>подробнее</p>
                    </Link>
                </button>
            </div>
        </section>
    )
}