import React from 'react';
import './achievecard.scss';
import arrow from "../../assets/icons/arrow.svg";

const AchieveCard = ({ img = "achieve1.png", txt = "Достижение" }) => {
    const imagePath = require(`../../assets/images/achievements/${img}`);

    return (
        <div className="achieve-card">
            <div className="achieve-title"><p className="m-0 fw-bold text-white">{txt}</p></div>
            <div className="achieve-text">
                <p className="m-0 text-white lh-sm fw-light">День программиста – настоящая точка притяжения
                    программистов и топовых российских IT-компаний. В течение дня бауманцы смогут узнать всю
                    самую интересную информацию об актуальных профессиях в сфере IT.</p>
            </div>
            <div className="position-relative">
                <div className="achieve-photo">
                    <img src={imagePath} alt=""/>
                </div>
                <div className="overlay-gradient"></div>
                <div className="d-flex justify-content-center gap-5 px-5 my-3 position-absolute bottom-0 w-100">
                    <button className="achieve-button">
                        <a href="https://vk.com/robotics_bmstu" className="text-white fw-bold">фото</a>
                    </button>
                    <button className="achieve-button">
                        <a href="https://vk.com/robotics_bmstu" className="text-white fw-bold">сми</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AchieveCard;
