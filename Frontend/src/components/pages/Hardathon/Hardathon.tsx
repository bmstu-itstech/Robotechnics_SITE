import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"
import {useEffect, useState} from "react";
import axios from "axios";

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
        <section className={"events-page"}>
            <Logo title="мероприятия"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <img className={"arrow-left"} src={arrow} alt="" onClick={slideLeft}/>
                <div className="board">
                    {hardathons.map((hardathon, index) => (
                        <div className={"event-hard-card"}>
                            <img src={hardathon.photo} alt=""/>
                            <div className={"text"}>
                                <p>{hardathon.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <img className={"arrow-right"} src={arrow} alt="" onClick={slideRight}/>
            </div>
        </section>
    )
}