import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import bizikov from "../../assets/images/bizikov.png"
import React, {useEffect, useState} from "react";
import axios from "axios";

interface Hardathon {
    title: string,
    photo: string
}

export const Hardathon = () => {

    const [hardathons, setHardathons] = useState<Hardathon[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v0/hardatons/?page=1')
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
        <section className={"events-page"}>
            <Logo title="Хардатон 2023"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className="board">
                    <div className={"bizikov-pic"}>
                        <div className={"d-flex justify-content-center"}>
                            <img src={bizikov} alt=""/>
                        </div>

                    </div>
                    <div className={"box-hardathon d-inline-block"}>
                        <div className={"quote"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className={"author"}>— главный организатор хардатона,
                                Валерий Бизиков</p>
                        </div>
                        <div className={"buttons"}>
                            <button className={"event-btn w-400"}>
                                <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                            </button>
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