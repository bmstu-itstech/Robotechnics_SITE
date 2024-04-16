import "../../utils/roots/home_root.scss"
import "./home.scss"
import Logo from "../../utils/logo/Logo"
import { Link } from "react-router-dom";
import vk_logo from "../../assets/icons/vk_logo.svg"
import arrow_down from "../../assets/icons/arrow_down.svg"
import React from "react";

export const Home = () => {
    return (
        <section className="main-page" draggable="false">
            <Logo  />
            <div className={"container-fluid"}>
                <p className={"title-main text-center text-md-start col-11 text-uppercase text-light fw-bold lh-1"}>Центр молодежной
                    робототехники</p>
                <p className={"text-main text-center text-md-start h3 fw-light text-light"}>Центр Молодежной Робототехники - это инновационное
                    пространство, предназначенное для обучения и развития молодых талантов в области робототехники,
                    искусственного интеллекта и программирования. Наша миссия - предоставить молодежи возможность
                    исследовать и создавать будущее с помощью передовых технологий и творчества. Присоединяйтесь к
                    нам и откройте для себя мир будущего уже сегодня!</p>
                <div className={"row"}>
                    <button className={"button-main col-4"}>
                        <Link className="link" to="/news">
                            <p className={"text-light text-uppercase fw-bold fs-4 m-0"}>подробнее</p>
                        </Link>
                    </button >
                    <button className={"btn arrow-btn-main hidden col-1"}>
                        <img src={arrow_down} alt="arrow" />
                    </button >
                    <div className={"hidden col vk_link-main"}>
                        <a className={""} href="https://vk.com/robotics_bmstu?ysclid=luzenwsftr242559607" target="_blank" role="button">
                            <img src={vk_logo} alt="vk_logo" draggable="false" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}