import "./mainpage.scss"
import Circle from "../../utils/circle/Circle"
import {Link} from "react-router-dom";
import React from "react";

export const MainPage = () => {
    return (
        <section className="main-page">
            <Circle />
            <div className={"container-fluid"}>
                <p className={"title-main col-11 text-uppercase text-light fw-bold lh-1"}>Центр молодежной
                    робототехники</p>
                <p className={"text-main h3 fw-light text-light"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className={"button-main "}>
                    <Link className="link" to="/news_page">
                        <p className={"text-light text-uppercase fw-bold fs-4 m-0"}>подробнее</p>
                    </Link>
                </button>
            </div>
        </section>
    )
}