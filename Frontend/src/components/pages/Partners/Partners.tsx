import "./partners.scss"
import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Logo from "../../utils/logo/Logo"
import pic1 from "../../assets/images/partners/pic1.png"
import pic2 from "../../assets/images/partners/pic2.png"
import pic3 from "../../assets/images/partners/pic3.png"
import pic4 from "../../assets/images/partners/pic4.png"
import axios from "axios";
import AchieveCard from "../../utils/achieve-card/AchieveCard";
import {Link} from "react-router-dom";

interface Partners {
    title: string;
    link: string;
    photo: string;
}

export const Partners = () => {
    const [partners, setPartners] = useState<Partners[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v0/partners/?page=1')
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

    const Carousel = ({ items } : { items: Partners[] }) => (
        <AliceCarousel
            mouseTracking
            items={items.map((item, index) => (
                <div key={index}>
                    <Link to={item.link}>
                        <div className={"partner-card"}>
                             <img src={item.photo}/>
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
        <section className={"page page-section"}>
            <Logo title="наши партнёры"/>
            <Carousel items={partners}/>
        </section>
    )
}