import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import bizikov from "../../assets/images/bizikov.png"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

interface Hardathon {
    title: string,
    photo: string
}

export const Hardathon = () => {

    const [hardathons, setHardathons] = useState<Hardathon[]>([]);

    useEffect(() => {
        axios.get('//darleet.com/api/v0/hardatons/?page=1')
            .then(res => {
                setHardathons(res.data.hardatons);
            }).catch(err => {
                console.log(err);
        })
    }, []);

    const slideRight = () => {
        const board = document.querySelector('.board');
        if (board) {
            const firstSlide = board.firstElementChild;
            const lastSlide = board.lastElementChild;
            if (firstSlide) {
                board.removeChild(firstSlide);
                board.appendChild(firstSlide);
            }
        }
    }

    const slideLeft = () => {
        const board = document.querySelector('.board');
        if (board) {
            const firstSlide = board.firstElementChild;
            const lastSlide = board.lastElementChild;
            if (lastSlide) {
                board.removeChild(lastSlide);
                board.insertBefore(lastSlide, firstSlide);
            }
        }
    }

    return (
        <section className={"page events-page"}>
            <Logo title="Хардатон 2024"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className="board">
                    <div className={"bizikov-pic"}>
                        <div className={"d-flex justify-content-center"}>
                            <img src={bizikov} alt=""/>
                        </div>

                    </div>
                    <div className={"box-hardathon d-inline-block"}>
                        <div className={"quote"}>
                            <p>Давно полюбившийся формат робототехнических соревнований, где в течение нескольких дней финала участники разрабатывают робототехнический проект на определённую тему, а затем командам предстоит защитить свою работу.</p>
                            <p className={"author"}>— главный организатор хардатона,
                                Валерий Бизиков</p>
                        </div>
                        <div className={"buttons"}>
                            <Link to={"/hardathons/1/details"}>
                                <button className={"event-btn w-400"}>
                                    <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                                </button>
                            </Link>
                            <button className={"event-btn w-400"}>
                                <p className="fw-bolder fs-4 text-uppercase text-light m-0">подать заявку</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}