import "./PartnersHard.scss"
import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Logo from "../../../utils/logo/Logo"
import axios from "axios";
import AchieveCard from "../../../utils/achieve-card/AchieveCard";
import {Link} from "react-router-dom";

interface PartnersHardathon {
    title1: string;
    link1: string;
    photo1: string;
}

export const PartnersHardathon = () => {
    const [partners, setPartners] = useState<PartnersHardathon[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v0/hardatons/?page=6')
            .then(res => {
                setPartners(res.data.partners);
            }).catch(err => {
                console.log(err);
        })
    }, [])

    const responsive = {
        0: { items: 1 },
        750: { items: 2 },
        1050: { items: 3 },
        1550: { items: 4 }
    };

    const Carousel = ({ items } : { items: PartnersHardathon[] }) => (
        <AliceCarousel
            mouseTracking
            items={items.map((item, index) => (
                <div key={index}>
                    <Link to={item.link1}>
                        <div className={"partner-card1"}>
                             <img src={item.photo1}/>
                        </div>
                    </Link>
                </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={true}
            infinite={true}
        />
    );


    return (
        <section className={"page page-section1"}>
             <button className={"button-main3"}>
                    <Link className="link1" to="../details" relative={"path"}>
                        <p className={"text-light text-uppercase fw-bold fs-6 m-0"}>назад</p>
                    </Link>
                </button>
            <Logo title="партнеры хардатона"/>
            <Carousel items={partners}/>
        </section>
    )
}