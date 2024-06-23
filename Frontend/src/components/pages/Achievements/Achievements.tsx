import React, { useEffect, useState, useRef, Ref } from 'react';
import "./achievements.scss"
import Logo from "../../utils/logo/Logo"
import AchieveCard from "../../utils/achieve-card/AchieveCard";
import 'react-alice-carousel/lib/alice-carousel.css';
import down_arrow from "../../assets/icons/arrow.svg";
import axios from "axios";

interface Achievement {
    title: string,
    description: string,
    photo_album_url: string,
    link_to_media: string,
    photo: string,
    index: number,
    inputRef: Ref<HTMLDivElement>
}

export const Achievements = () => {

    const [achievements, setAchievements] = useState<Achievement[]>([]);

    useEffect(() => {
        axios.get('//darleet.com/api/v0/achievements/?page=1')
            .then(res => {
                setAchievements(res.data.achievements);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const InputRefs = useRef<(HTMLDivElement | null)[]>([])
    
    var cur_pos = 0;
    function swapHandler() {
        console.log(cur_pos)
        InputRefs.current[cur_pos++]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }


    return (
        <section className="achievements-page page" id="achievements">
            <Logo title="достижения" />
            <div className="container-fluid mt-0 h-100 achievements-carousel d-flex justify-content-center px-0" >
                <div className="desktop-carousel-achievements">
                    {achievements.map((achievement, index) => (
                        < AchieveCard
                            title={achievement.title}
                            description={achievement.description}
                            photo_album_url={achievement.photo_album_url}
                            link_to_media={achievement.link_to_media}
                            photo={achievement.photo}
                            index={index}
                            inputRef={(ref) => InputRefs.current[index] = ref}
                        />
                    ))}
                </div>
                <div className="mobile-carousel-achievements" id="achieve-wrapper">
                    {achievements.map((achievement, index) => (
                        <AchieveCard
                            title={achievement.title}
                            description={achievement.description}
                            photo_album_url={achievement.photo_album_url}
                            link_to_media={achievement.link_to_media}
                            photo={achievement.photo}
                            index={index}
                            inputRef={(ref) => InputRefs.current[index] = ref}
                        />
                    ))}
                    <button className={"btn b-0 p-0 bg-transparent swap-card"} onClick={swapHandler}>
                        <img src={down_arrow} alt="down-arrow" />
                    </button>
                </div>
            </div>
        </section>
    )
}