import "./partners.scss"
import Circle from "../../utils/circle/Circle"
import pic1 from "../../assets/images/partners/pic1.png"
import pic2 from "../../assets/images/partners/pic2.png"
import pic3 from "../../assets/images/partners/pic3.png"
import pic4 from "../../assets/images/partners/pic4.png"

export const Partners = () => {
    return (
        <section className={"page-section"}>
            <Circle title="наши партнёры"/>
            <div className={"partner-card"}>
                <div className={"d-flex justify-content-around align-items-center"}>
                    <img className={"partner-img"} src={pic3} alt=""/>
                    <img className={"partner-img"} src={pic2} alt=""/>
                    <img className={"partner-img"} src={pic1} alt=""/>
                    <img className={"partner-img"} src={pic4} alt=""/>
                </div>
            </div>
        </section>
    )
}