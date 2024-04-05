import "./hardathon.scss"
import Logo from "../../utils/logo/Logo"
import arrow from "../../assets/icons/arrow.svg"
import pic1 from "../../assets/images/events/event1.png"

export const Hardathon = () => {
    return (
        <section className={"events-page"}>
            <Logo title="мероприятия"/>
            <div className={"board-outer d-flex justify-content-center"}>
                <img className={"arrow-left"} src={arrow} alt=""/>
                <div className="board">
                    <div className={"event-hard-card"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>инженерный вызов 2023</p>
                        </div>
                    </div>
                    <div className={"event-hard-card"}>
                        <img src={pic1} alt=""/>
                        <div className={"text"}>
                            <p>инженерный вызов 2023</p>
                        </div>
                    </div>
                </div>
                <img className={"arrow-right"} src={arrow} alt=""/>
            </div>
        </section>
    )
}