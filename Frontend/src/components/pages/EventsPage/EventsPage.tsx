import "./eventspage.scss"
import Circle from "../../utils/circle/Circle"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"
import {useEffect} from "react";
import axios from "axios";

export const EventsPage = () => {

    useEffect( () => {
       // axios.get('')
    },[]);

    return (
        <section className={"events-page"}>
            <Circle title="мероприятия"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <img className={"arrow-left"} src={arrow} alt=""/>
                <div className="board">
                    <div className={"event-card wide"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>инженерный вызов 2022</p>
                        </div>
                    </div>
                    <div className={"event-card"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>транспорт будущего</p>
                        </div>
                    </div>
                    <div className={"event-card wide"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>инженерный вызов 2022</p>
                        </div>
                    </div>
                    <div className={"event-card"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>транспорт будущего</p>
                        </div>
                    </div>
                    <div className={"event-card"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>транспорт будущего</p>
                        </div>
                    </div>
                    <div className={"event-card wide"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>инженерный вызов 2022</p>
                        </div>
                    </div>
                    <div className={"event-card"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>транспорт будущего</p>
                        </div>
                    </div>
                </div>
                <img className={"arrow-right"} src={arrow} alt=""/>
            </div>
        </section>
    )
}