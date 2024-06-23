import "./events.scss"
import Logo from "../../utils/logo/Logo"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"
import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "react-slick";
import {Link} from "react-router-dom";

interface Event {
    title: string;
    photo: string;
}

export const Events = () => {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect( () => {
        axios.get('//darleet.com/api/v0/classic_events/?page=1')
            .then(res => {
                setEvents(res.data.classic_events);
            }).catch( err => {
                console.log('error');
        })
    },[]);

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        slidesPerRow: 2
    }

    return (
        <section className={"page events-page"}>
            <Logo title="мероприятия"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className={"slider-container"}>
                    <div className="board">
                        {events.map((event, index) => (
                            <Link to={"/events/"+(index+1)}>
                                <div className={`event-card ${index % 2 === 0 ? 'wide' : '' || index === events.length - 1 ? 'wide' : ''}`}>
                                    <img src={event.photo} alt={event.title}/>
                                    <div className={"text"}>
                                        <p>{event.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}