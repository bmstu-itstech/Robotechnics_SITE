import React, { useEffect, useState } from 'react';
import "./achievements.scss"
import Logo from "../../utils/logo/Logo"
import AchieveCard from "../../utils/achieve-card/AchieveCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";

interface Achievement {
    title: string,
    description: string,
    photo_album_url: string,
    link_to_media: string,
    photo: string
}

export const Achievements = () => {

    const [achievements, setAchievements] = useState<Achievement[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v0/achievements/?page=1')
            .then(res => {
                setAchievements(res.data.achievements);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const responsive = {
        0: { items: 1 },
        1100: { items: 2 },
        1650: { items: 3 },
        2350: { items: 4 }
    };

    const Carousel = ({ items }: { items: Achievement[] }) => (
        <AliceCarousel
            mouseTracking
            items={items.map((item, index) => (
                <div key={index}>
                    <AchieveCard
                        title={item.title}
                        description={item.description}
                        photo_album_url={item.photo_album_url}
                        link_to_media={item.link_to_media}
                        photo={item.photo}
                    />
                </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={true}
            infinite={true}
        />
    );

    return (
        <section className="achievements-page">
            <div className={"logo-row mx-auto justify-content-center"}>
                <p title="достижения" className={"title-text text-uppercase align-self-end"}>
                    достижения
                </p>
            </div>
            <div className="container-fluid achievements-carousel d-flex justify-content-center">
                <div className="container-fluid desktop-carousel-achievements">
                    {achievements.map((achievement, index) => (
                        <AchieveCard
                            title={achievement.title}
                            description={achievement.description}
                            photo_album_url={achievement.photo_album_url}
                            link_to_media={achievement.link_to_media}
                            photo={achievement.photo}
                        />
                    ))}
                </div>
                <div className="container-fluid mobile-carousel-achievements">
                    {achievements.map((achievement, index) => (
                        <AchieveCard
                            title={achievement.title}
                            description={achievement.description}
                            photo_album_url={achievement.photo_album_url}
                            link_to_media={achievement.link_to_media}
                            photo={achievement.photo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}