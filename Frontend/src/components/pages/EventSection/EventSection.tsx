import "./eventsection.scss"
import React, { useState } from 'react';
import close from "../../assets/icons/close.svg"
import add from "../../assets/icons/add.png"

export const EventSection = () => {
    const [finderState, changeFinder] = useState(false);
    const [aboutState, changeAbout] = useState(false);
    const [formState, changeForm] = useState(false);

    const finderBtn = () => {
        changeFinder(!finderState);
    };

    const aboutBtn = () => {
        changeAbout(!aboutState);
    };

    const formBtn = () => {
        changeForm(!formState);
    };

    return (
        <section className={"page-section"}>

            <div className={`${finderState ? 'dark-back' : ''}`}></div>
            <div className={`sidebar ${finderState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-uppercase text-light"}>Поиск команды</p>
                    <img src={close} onClick={finderBtn} alt=""/>
                </div>
                <div className={"team-board team-scrollbar d-flex flex-column"}>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
                    <button className={"form"} onClick={formBtn}>Анкета от Иванова И.И.</button>
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


            <div className={`sidebar ${formState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-light"}>Анкета от: Иванов И.И.</p>
                    <img src={close} onClick={formBtn} alt=""/>
                </div>
                <button className={"about-form member"}>группа</button>
                <button className={"about-form member"}>Вконтакте</button>
                <button className={"about-form member"}>Количество людей: N</button>
                <div className={"outer-box"}>
                    <div className={"team-board member-scrollbar member-board d-flex flex-column"}>
                        Компетенции
                        <p>Текст</p>
                        <p>Текст</p>
                        <p>Текст</p>
                        <p>Текст</p>
                    </div>
                </div>
                <div className={"outer-box"}>
                    <div className={"team-board member-scrollbar member-board d-flex flex-column"}>
                        Дополнительная информация
                        <p>Текст</p>
                        <p>Текст</p>
                        <p>Текст</p>
                        <p>Текст</p>
                    </div>
                </div>
            </div>

            <div className={"circle me-auto"}></div>
            <div className={"navigation-bar"}>
                <div className={"v-line"}></div>
                <div className={"list-bar"}>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v1"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v2"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v3"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v4"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v5"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v6"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v7"} className={"pointer"}></div>
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

