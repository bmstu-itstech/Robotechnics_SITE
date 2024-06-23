import "../../utils/roots/home_root.scss"
import "./home.scss"
import Logo from "../../utils/logo/Logo"
import { Contacts } from "../Contacts/Contacts";
import { News } from "../News/News";
import { Achievements } from "../Achievements/Achievements";
import vk_logo from "../../assets/icons/vk_logo.svg"
import React, { useRef } from "react";
import { func } from "prop-types";


export const Home = () => {
    const newsRef = useRef<HTMLDivElement | null>(null);

    function scrolToNews() {
        newsRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <div className={"pages-group"} >
            <section className="page main-page first-page" draggable="false" id="home">
                <Logo />
                <div className={"container-fluid container-fluid-margless main-text-block-main"}>
                    <p className={"title-main text-center text-md-start col-12 col-md-8 text-uppercase text-light "}>Центр молодежной <br />
                        робототехники</p>
                    <p className={"text-main text-center text-md-start h3  text-light col-12 col-md-8 "}>Центр Молодежной Робототехники - это инновационное
                        пространство, предназначенное для обучения и развития молодых талантов в области робототехники,
                        искусственного интеллекта и программирования. Наша миссия - предоставить молодежи возможность
                        исследовать и создавать будущее с помощью передовых технологий и творчества. Присоединяйтесь к
                        нам и откройте для себя мир будущего уже сегодня!</p>

                </div>
                <div className={"container-fluid container-fluid-margless position-relative h-auto"}>
                    <button className={"button-main col-4 justify-content-center"} onClick={scrolToNews} >
                        <a className={"more-text-main text-light text-uppercase m-0 h-100 w-100"}>подробнее</a>
                    </button >
                    <div className={"hidden position-absolute vk_logo "}>
                        <a className={""} href="https://vk.com/robotics_bmstu?ysclid=luzenwsftr242559607" role="button">
                            <img src={vk_logo} alt="vk_logo" draggable="false" />
                        </a>
                    </div>
                </div>
            </section>
            <div id="news" ref={newsRef}>
                <News />
            </div>
            <Achievements />
            <Contacts />
        </div>

    )
}