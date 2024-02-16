import "./mainpage.scss"
import Circle from "../../utils/circle/Circle"

export const MainPage = () => {
    return (
        <section>
            <Circle />
            <div className={"container-fluid"}>
                <p className={"title-main col-11 text-uppercase text-light fw-bold lh-1"}>Центр молодежной
                    робототехники</p>
                <p className={"text-main h3 fw-light text-light"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className={"button-main "}>
                    <p className={"text-light fw-bold fs-4 m-0"}>ПОДРОБНЕЕ</p>
                </button>
            </div>
        </section>
    )
}