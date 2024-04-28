import "./events.scss"
import Logo from "../../utils/logo/Logo"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"
import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {localhost} from "../../../index"



interface Event { 
    title: string;
     photo: string; 
}

export const Events = () => {


    const [events, setEvents] = useState<Event[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect( () => {
        axios.get(localhost + `classic_events/?page=${currentPage}`)
            .then(res => {
                setEvents(res.data.classic_events);
            }).catch( err => {
                console.log('error');
            })
    }, [currentPage]);

    const Pagination = ({currentPage, setCurrentPage}: {currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>}) => {

 
        const handlePagination = (pageNumber: number) => {
            setCurrentPage(pageNumber);
        }
        
        return (
            <div className="pagination">
                <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePagination(currentPage + 1)}>Next</button>
            </div>
        );
    }

   

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
            <Logo title="мероприятия"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <div className={"slider-container"}>
                    <div className="board">
                        {events.map((event, index) => (
                            <Link to={"/event/"+(index+1)}>
                                <div key={index} className={`event-card ${index % 2 === 0 ? 'wide' : '' || index === events.length - 1 ? 'wide' : ''}`}>
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
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </section>
    )
}
