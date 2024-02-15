import "./mainpage.scss"

import pic1 from "../../assets/images/pic1.jpeg"

export const MainPage = () => {
    return (
        <section>
            <div className={"circle-row"}>
                <div className={"ico-circle"}></div>
            </div>
            <div className={"container-fluid"}>
                <p className={"col-11 text-uppercase text-light fw-bold lh-1 title-main"}>Центр молодежной
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