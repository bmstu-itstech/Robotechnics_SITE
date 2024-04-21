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
        <div className="card">
            <div className={"orange-gradient"}>
                <img src={photo} className={"card-img img-fluid"} alt="card-img" />
            </div>
            <div className={"card-img-overlay"}>
                <h1 className="card-header fw-bold card-title-mobile text-center">
                    {title}
                </h1>
                <div className="card-text hidden">
                    <p className="m-0 text-black lh-sm fw-light text-start">{description}</p>
                </div>
                <a href={new_url} className={"hidden"}>
                    <div className="card-about">
                        <p className="m-0 fw-light">Узнать подробности</p>
                        <img src={arrow} alt="get-more-btn" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
