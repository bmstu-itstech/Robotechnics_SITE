import React from 'react';
import "./achievements.scss"
import Logo from "../../utils/logo/Logo"
import AchieveCard from "../../utils/achieve-card/AchieveCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    1100: { items: 2 },
    1650: { items: 3 },
    2350: { items: 4 }
};

const items = [
    <AchieveCard img="achieve1.png" txt="День программиста" />,
    <AchieveCard img="achieve2.png" txt="Транспорт будущего" />,
    <AchieveCard img="achieve3.png" txt="Регистрация на Инженерный вызов 2023"/>
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

export const Achievements = () => {
    return (
        <section className="achievements-page">
            <Logo title="достижения"/>
            <div className="achievements-carousel">
                <div className="desktop-carousel">
                    <Carousel/>
                </div>
                <div className="mobile-carousel">
                    {items}
                </div>
            </div>
        </section>
    )
}