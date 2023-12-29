import "./eventsection.scss"
import React, { useState } from 'react';
import close from "../../assets/icons/close.svg"
import add from "../../assets/icons/add.png"

export const EventSection = () => {
    const [isFinderVisible, setFinderVisible] = useState(false);
    const [isAboutVisible, setAboutVisible] = useState(false);

    const closeFinder = () => {
        setFinderVisible(false);
    };
    const openFinder = () => {
        setFinderVisible(true);
    };

    const closeAbout = () => {
        setAboutVisible(false);
    };
    const openAbout = () => {
        setAboutVisible(true);
    };


    const [finderState, changeFinder] = useState(false);
    const [aboutState, changeAbout] = useState(false);

    const finderBtn = () => {
        changeFinder(!finderState);
    };

    const aboutBtn = () => {
        changeAbout(!aboutState);
    };

    return (
        <section className={"page-section"}>
            <div className={`${finderState ? 'dark-back' : ''}`}></div>
            <div className={`sidebar ${finderState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-uppercase text-light"}>Поиск команды</p>
                    <img src={close} onClick={finderBtn} alt=""/>
                </div>
                <div className={"team-board d-flex flex-column"}>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                    <button className={"form"}>Анкета от Иванова И.И.</button>
                </div>
                <button className={"add-form"}><img src={add} alt=""/></button>
            </div>

            <div className={`${aboutState ? 'dark-back' : ''}`}></div>
            <div className={`sidebar ${aboutState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-uppercase text-light"}>подробнее</p>
                    <img src={close} onClick={aboutBtn} alt=""/>
                </div>
                <button className={"about-form"}>Дата проведения: 00.00.00</button>
                <button className={"about-form"}>Место проведения</button>
                <button className={"about-form"}>Фото</button>
                <button className={"about-form"}>Упоминания в СМИ</button>
                <button className={"about-form"}>Документы</button>
            </div>

            <div className={"circle me-auto"}></div>

            <div className={"navigation-bar"}>
                <div className={"v-line"}></div>
                <div className={"list-bar"}>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div className={"pointer"}></div>
                    </div>
                </div>
            </div>

            <div className={"container"}>
                <button className={"event-btn prev-btn"}>
                    <p className="fw-bolder fs-4 text-uppercase text-light m-0">предыдущее мероприятие</p>
                </button>
                <div className={"my-5 row"}>
                    <div className={"col-7"}>
                        <p className="fw-bold title-1 text-uppercase text-light">инженерный вызов</p>
                        <div className={"my-5 text-light fs-4"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className={"my-4 text-light fs-4"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <button className={"event-btn next-btn"}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">следующее мероприятие</p>
                        </button>
                    </div>
                    <div className={"col-5 my-5 d-flex flex-column"}>
                        <button className={"event-btn"} onClick={aboutBtn}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                        </button>
                        <button className={"event-btn"}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">зарегестрироваться</p>
                        </button>
                        <button id={"team-find"} className={"event-btn"} onClick={finderBtn}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">поиск команды</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

