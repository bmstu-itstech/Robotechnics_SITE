import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"
import {useEffect, useState} from "react";
import axios from "axios";
import 'react-alice-carousel/lib/alice-carousel.css';

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

        const newHardathon0 = { title: "ИНЖЕНЕРНЫЙ ВЫЗОВ 2020", photo: pic1 };
        const newHardathon1 = { title: "ИНЖЕНЕРНЫЙ ВЫЗОВ 2021", photo: pic1 };
        const newHardathon2 = { title: "ИНЖЕНЕРНЫЙ ВЫЗОВ 2022", photo: pic1 };
        setHardathons([...hardathons, newHardathon0, newHardathon1, newHardathon2]);
    }, []);

    const slideRight = () => {
        setHardathons((prevHardathons) => {
            const updatedHardathons = [...prevHardathons];
            const firstCard = updatedHardathons.shift();
            if (firstCard) {
                updatedHardathons.push(firstCard);
            }
            return updatedHardathons;
        });
    }

    const slideLeft = () => {
        setHardathons((prevHardathons) => {
            const updatedHardathons = [...prevHardathons];
            const lastCard = updatedHardathons.pop();
            if (lastCard) {
                updatedHardathons.unshift(lastCard);
            }
            return updatedHardathons;
        });
    }

    return (
        <section className={"events-page"}>
            <Logo title="Хардатоны"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <img className={"arrow-left"} src={arrow} alt="" onClick={slideLeft}/>
                <div className="board">
                    {hardathons.slice(0, 2).map((hardathon, index) => (
                        <div key={index} className={"event-hard-card"}>
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