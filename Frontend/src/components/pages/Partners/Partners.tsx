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

const responsive = {
    0: { items: 1 },
    750: { items: 2 },
    1050: { items: 3 },
    1550: { items: 4 }
};

const items = [
    <div className="partner-card">
        <img src={pic3} alt=""/>
    </div>,
    <div className="partner-card">
        <img src={pic2} alt=""/>
    </div>,
    <div className="partner-card">
        <img src={pic1} alt=""/>
    </div>,
    <div className="partner-card">
        <img src={pic4} alt=""/>
    </div>
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls={true}
        infinite={true}
    />
);

interface Item {
    title: string;
    link: string;
    photo: string;
}

export const Partners = () => {

    const [partners, setPartners] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v0/partners/?page=1')
            .then(res => {
            })
    }, [])

    return (
        <section className={"page-section"}>
            <Logo title="наши партнёры"/>
            <Carousel/>
        </section>
    )
}