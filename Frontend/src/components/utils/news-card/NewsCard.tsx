import React from 'react';
import "../roots/newsCard_root.scss"
import './newscard.scss';
import arrow from "../../assets/icons/arrow.svg";

const NewsCard = ({ title, description, new_url, photo }: {
    title: string;
    description: string;
    new_url: string;
    photo: string;
}) => {
    return (
        <div className="news-card">
            <div className='desktop'>
                <div className={"news-photo orange-gradient"}>
                    <img src={photo} alt="" />
                </div>
                <div className="card-title"><p className="m-0 fw-bold text-white">{title}</p></div>
                <div className="card-text">
                    <p className="m-0 text-black lh-sm fw-light">{description}</p>
                </div>
                <a href={new_url}>
                    <div className="card-about">
                        <p className="m-0 fw-light">Узнать подробности</p>
                        <img src={arrow} alt="get-more-btn" />
                    </div>
                </a>
            </div>
            <div className={"mobile"}></div>
        </div>
    );
};

export default NewsCard;
