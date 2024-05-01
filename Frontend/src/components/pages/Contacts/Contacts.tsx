import "./contacts.scss"
import Logo from "../../utils/logo/Logo"
import main_director_photo from "../../assets/images/contacts/main_director.jpg"
import diagonal_arrow from "../../assets/icons/diagonal_arrow.svg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from "react";



export const Contacts = () => {

    const items = [
        <div className={"card mx-auto w-100 my-auto"}>
            <div className="contact-photo">
                <img src={main_director_photo} className={""} alt="ЦРМ_main_director" />
            </div>
            <div>
                <p className={"text-scale-large"}>Бизиков Валерий</p>
                <p className={"text-scale-normal"}>Руководитель ЦМР</p>
            </div>
        </div>,


        <div className={"card col-4 px-4 py-3 mx-auto w-100 my-auto"}>
            <div className="row row-cols-1 links information-card  text-start h-100">
                <div className="col d-flex flex-wrap ">
                    <span className="text-weight-normal text-scale-normal">Телефон: <a className="text-weight-normal text-scale-normal" href="tel:+78005553535">8(800)555-35-35</a></span>
                    <span className="text-weight-normal text-scale-normal">Email: <a className="text-weight-normal text-scale-normal" href="mailto:cmr@bmstu.ru">cmr@bmstu.ru</a></span>
                </div>
                <button className="col  bg-transparent border-0 d-flex more-arrow text-white text-weight-normal text-scale-normal w-auto">Политика перс. данных</button>
                <button className="col  bg-transparent border-0 d-flex more-arrow text-white text-weight-normal text-scale-normal w-auto">Сайт Университета</button>
            </div>
        </div>
    ];

    const Carousel = () => (
        <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            disableDotsControls={true}

        />
    );

    return (
        <section className="contacts-section">
            <Logo title="контакты" />
            <main className="h-100 w-100">
                <div className="desktop h-100 w-100">
                    <div className="container-fluid d-flex flex-row wrapper justify-content-center h-100 align-items-center my-0">
                        <div className="card col-4 orange-overlay">
                            <img src={main_director_photo} className={"contact-photo"} alt="ЦРМ_director_photo" />
                            <div className={"card-img-overlay d-flex flex-column justify-content-end align-items-center"}>
                                <p className={"text-weight-normal text-scale-large"}>Бизиков Валерий</p>
                                <p className={"text-weight-bold text-scale-normal"}>Руководитель ЦМР</p>
                                <p className={"text-weight-normal text-scale-normal"}>+7 (999) 999-99-99</p>
                                <p className={"text-weight-normal text-scale-normal"}>1234567@mail.ru</p>
                            </div>
                        </div>
                        <div className={"card col-4 px-4 py-3"}>
                            <div className="row row-cols-1 links information-card  text-start h-100">
                                <div className="col d-flex flex-wrap ">
                                    <span className="text-scale-normal">Телефон: <a className="text-weight-normal text-scale-normal" href="tel:+78005553535">8(800)555-35-35</a></span>
                                    <span className="text-scale-normal">Email: <a className="text-weight-normal text-scale-normal" href="mailto:cmr@bmstu.ru">cmr@bmstu.ru</a></span>
                                </div>
                                <button className="col bg-transparent border-0 d-flex more-arrow text-white text-weight-normal text-scale-normal w-auto">Политика перс. данных</button>
                                <button className="col bg-transparent border-0 d-flex more-arrow text-white text-weight-normal text-scale-normal w-auto">Сайт Университета</button>
                                <div className="col">

                                    <span className={"text-weight-normal text-scale-normal"}>Адрес: </span>
                                    <p className="text-weight-normal text-scale-normal">105005, г. Москва, 2-ая Бауманская, д.5, стр.1</p>

                                </div>
                                <div className="col">
                                    <span className="text-weight-normal text-scale-normal">Соцсети:</span>
                                    <div className="d-flex flex-row justify-content-between">
                                        <a className="text-weight-normal d-flex more-arrow text-scale-normal" href="https://vk.com/robotics_bmstu">ВКонтакте</a>
                                        <a className="text-weight-normal  d-flex more-arrow text-scale-normal" href="https://t.me/robotics_bmstu">Телеграм</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile h-100 w-100 ">
                    <div className="container-fluid d-flex align-items-center h-100 my-0 flex-column">
                        <Carousel />
                        <div className="contact-information mb-auto text-start w-100">
                            <div className="d-flex flex-row ">
                                <span className={"text-weight-normal text-scale-normal contact-main-text"}>Адрес: </span>
                                <p className="text-weight-normal text-scale-normal contact-desc-text">105005, г. Москва, 2-ая Бауманская, д.5, стр.1</p>

                            </div>
                            <div className=" d-flex flex-row">
                                <span className="text-weight-normal text-scale-normal contact-main-text">Соцсети:</span>
                                <div className="d-flex flex-row justify-content-between contact-desc-text">
                                    <a className="text-weight-normal d-flex more-arrow text-scale-normal more-arrow" href="https://vk.com/robotics_bmstu">ВКонтакте</a>
                                    <a className="text-weight-normal d-flex more-arrow text-scale-normal more-arrow" href="https://t.me/robotics_bmstu">Телеграм</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
            <footer>
                <p className="text-white text-scale-normal">Developed @ 2023 by ITS tech</p>
            </footer>
        </section>
    )
}