import "./eventspage.scss"
import Circle from "../../utils/circle/Circle"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"
import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "react-slick";

interface Event {
    title: string;
    photo: string;
}

export const EventsPage = () => {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/v0/classic_events/?page=1')
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
        <section className={"events-page"}>
            <Circle title="мероприятия"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className={"slider-container"}>
                    <div className="board">
                        <Slider {...settings}>
                            {events.map((event, index) => (
                                <div className={`event-card ${index % 2 === 0 ? 'wide' : ''}`}>
                                    <img src={event.photo} alt={event.title}/>
                                    <div className={"text"}>
                                        <p>{event.title}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}