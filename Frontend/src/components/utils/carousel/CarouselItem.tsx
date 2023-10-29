import React from "react";

// @ts-ignore
import arrow from "./arrow.png"

// @ts-ignore
import banner1 from "./banner1.png"

const CarouselItem = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#FF5C00",
            padding: "10px",
            borderRadius: "50px",
            width: "495px",
            margin: "30px"
        }}>
            <img src={banner1} style={{height: "300px"}} alt=""/>
            <p style={{fontSize: "25px", color: "white", textAlign: "center", fontWeight: "bold", marginTop: "15px", marginBottom: "15px"}}>ДЕНЬ ПРОГРАММИСТА</p>
            <div style={{backgroundColor: "white", padding: "30px", fontSize: "18px", borderRadius: "0 0 50px 50px"}}>
                <p>День программиста – настоящая точка притяжения программистов и топовых российских IT-компаний. В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных профессиях в сфере IT.</p>
                <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row", marginTop: "30px"}}>
                    <p style={{fontSize: "16px", marginTop: "15px"}}>Узнать подробнее о мероприятии</p>
                    <img src={arrow} alt="Нет"/>
                </div>
            </div>
        </div>
    )
}