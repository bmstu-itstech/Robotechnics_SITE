import "./eventspage.scss"
import Circle from "../../utils/circle/Circle"
import arrow from "../../assets/icons/arrow.svg"

export const EventsPage = () => {
    return (
        <section className={"page-section"}>
            <Circle title="мероприятия"/>
            <div className={"d-flex justify-content-center"}>
                <div className="board d-flex flex-wrap justify-content-center">
                    <img className={"arrow-right"} src={arrow} alt=""/>
                    <img className={"arrow-left"} src={arrow} alt=""/>
                    <div className={"box wide"}>
                        <div className={"text"}>инженерный вызов 2022</div>
                    </div>
                    <div className={"box"}>
                        <div className={"text"}>транспорт будущего</div>
                    </div>
                    <div className={"box wide"}>
                        <div className={"text"}>инженерный вызов 2022</div>
                    </div>
                    <div className={"box"}>
                        <div className={"text"}>транспорт будущего</div>
                    </div>
                    <div className={"box"}>
                        <div className={"text"}>транспорт будущего</div>
                    </div>
                    <div className={"box wide"}>
                        <div className={"text"}>инженерный вызов 2022</div>
                    </div>
                    <div className={"box"}>
                        <div className={"text"}>транспорт будущего</div>
                    </div>
                </div>
            </div>

        </section>
    )
}