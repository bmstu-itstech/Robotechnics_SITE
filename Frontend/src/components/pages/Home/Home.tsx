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
                <p className={"text-main h3 fw-light text-light"}>Центр Молодежной Робототехники - это инновационное
                    пространство, предназначенное для обучения и развития молодых талантов в области робототехники,
                    искусственного интеллекта и программирования. Наша миссия - предоставить молодежи возможность
                    исследовать и создавать будущее с помощью передовых технологий и творчества. Присоединяйтесь к
                    нам и откройте для себя мир будущего уже сегодня!</p>
                <button className={"button-main1"}>
                    <Link className="link" to="/../news">
                        <p className={"text-light text-uppercase fw-bold fs-4 m-0"}>подробнее</p>
                    </Link>
                </button>
            </div>
        </section>
    )
}