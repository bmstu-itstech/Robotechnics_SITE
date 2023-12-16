import "./eventspage.scss"

// @ts-ignore
import pic1 from "../../assets/images/pic1.jpeg"
// @ts-ignore
import arrow from "../../assets/icons/arrow.svg"

export const EventsPage = () => {
    return (
        <section className={"page-section"}>
            <div className={"line d-flex justify-content-center align-items-center"}>
                <div className={"circle me-auto"}></div>
                <div className={"title text-uppercase"}>мероприятия</div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
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
        </section>
    )
}