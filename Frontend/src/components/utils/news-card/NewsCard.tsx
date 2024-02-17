import React from 'react';
import './newscard.scss';
import arrow from "../../assets/icons/arrow.svg";

const NewsCard = ({ img = "news1.png" }) => {
    const imagePath = require(`../../assets/images/news/${img}`);

    return (
        <div className="news-card">
            <div className="news-photo">
                <img src={imagePath} alt=""/>
            </div>
            <div className="card-title"><p className="m-0 fw-bold text-white">День программиста</p></div>
            <div className="card-text">
                <p className="m-0 text-black lh-sm fw-light">День программиста – настоящая точка притяжения
                    программистов и топовых российских IT-компаний. В течение дня бауманцы смогут узнать всю
                    самую интересную информацию об актуальных профессиях в сфере IT.</p>
            </div>
            <a href="https://vk.com/robotics_bmstu">
                <div className="card-about">
                    <p className="m-0 fw-light">Узнать подробности</p>
                    <img src={arrow} alt=""/>
                </div>
            </a>
        </div>
    );
};

export default NewsCard;
