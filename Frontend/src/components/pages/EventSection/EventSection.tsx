import "./eventsection.scss"
import React from "react";

export const EventSection = () => {
    return (
        <section className={"page-section"}>
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
                        <button className={"event-btn"}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                        </button>
                        <button className={"event-btn"}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">зарегестрироваться</p>
                        </button>
                        <button className={"event-btn"}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">поиск команды</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

