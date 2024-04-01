import "./partners.scss"
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Logo from "../../utils/logo/Logo"
import pic1 from "../../assets/images/partners/pic1.png"
import pic2 from "../../assets/images/partners/pic2.png"
import pic3 from "../../assets/images/partners/pic3.png"
import pic4 from "../../assets/images/partners/pic4.png"

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

export const Partners = () => {
    return (
        <section className={"page-section"}>
            <Logo title="наши партнёры"/>
            <Carousel/>
        </section>
    )
}