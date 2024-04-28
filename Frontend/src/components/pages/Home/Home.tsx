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
            <Logo />
            <div className={"container-fluid main-text-block-main"}>
                <p className={"title-main text-center text-md-start col col-xl-11 text-uppercase text-light fw-bold"}>Центр молодежной <br />
                    робототехники</p>
                <p className={"text-main text-center text-md-start h3 fw-light text-light"}>Центр Молодежной Робототехники - это инновационное
                    пространство, предназначенное для обучения и развития молодых талантов в области робототехники,
                    искусственного интеллекта и программирования. Наша миссия - предоставить молодежи возможность
                    исследовать и создавать будущее с помощью передовых технологий и творчества. Присоединяйтесь к
                    нам и откройте для себя мир будущего уже сегодня!</p>

            </div>
            <div className={"container-fluid container-fluid-margless position-relative "}>
                <button className={"button-main col-4 justify-content-center"}>
                    <Link className="link" to="/news">
                        <p className={"more-text-main text-light text-uppercase  m-0"}>подробнее</p>
                    </Link>
                </button >
                <button className={"btn arrow-btn-main hidden col-1 border-0"}>
                    <img src={arrow_down} alt="arrow" className={"img-fluid"} />
                </button >
                <div className={"hidden position-absolute vk_logo "}>
                    <a className={""} href="https://vk.com/robotics_bmstu?ysclid=luzenwsftr242559607" role="button">
                        <img src={vk_logo} alt="vk_logo" draggable="false" />
                    </a>
                </div>
            </div>
        </section>
    )
}