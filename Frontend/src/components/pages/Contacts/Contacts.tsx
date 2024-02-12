import "./contacts.scss"

// @ts-ignore
import photo1 from "../../assets/images/contacts/photo1.png"
// @ts-ignore
import arrow from "../../assets/icons/arrow.svg"
import React from "react";

export const Contacts = () => {
    return (
        <section className={"page-section"}>
            <div className={"line d-flex justify-content-center align-items-center"}>
                <div className={"circle me-auto"}></div>
                <div className={"title text-uppercase"}>контакты</div>
            </div>
            <div className="container">
                <div className={"row justify-content-center m-5"}>
                    <div className="card text-light row align-items-center">
                        <div className="col-md-3">
                            <img className={"card-photo"} src={photo1} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h3 className={"d-inline"}>Бизиков Валерий</h3>
                            <p>Руководитель ЦМР</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-3">
                    <div className="col">
                        <p>Телефон: <a className={"text-light"} href="tel:+78005553535">8(800)555-35-35</a></p>
                        <p>Email: <a className={"text-light"} href="mailto:cmr@bmstu.ru">cmr@bmstu.ru</a></p>
                    </div>
                    <div className="col">
                        <p>Адрес: <a className={"text-light"} href="">105005, г. Москва, 2-ая Бауманская, д.5, стр.1</a>
                        </p>
                        <p><a className={"text-light"} href="">Схема проезда</a></p>
                    </div>
                    <div className="col">
                        <p>Соцсети:</p>
                        <p><a className={"text-light"} href="">ВКонтакте</a></p>
                        <p><a className={"text-light"} href="">Телеграм</a></p>
                    </div>
                </div>
            </div>
            <footer>
                <p className={"footer-text text-black"}>Developed @ 2023 by ITS tech</p>
            </footer>
        </section>
    )
}