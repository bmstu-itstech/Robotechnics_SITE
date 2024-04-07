import React from 'react';
import './achievecard.scss';
import arrow from "../../assets/icons/arrow.svg";

const AchieveCard = ({ title, description, photo_album_url, link_to_media, photo }: {
    title: string,
    description: string,
    photo_album_url: string,
    link_to_media: string,
    photo: string
}) => {
    return (
        <div className="achieve-card">
            <div className="achieve-title"><p className="m-0 fw-bold text-white">{title}</p></div>
            <div className="achieve-text">
                <p className="m-0 text-white lh-sm fw-light">{description}.</p>
            </div>
            <div className="position-relative">
                <div className="achieve-photo">
                    <img src={photo} alt=""/>
                </div>
                <div className="overlay-gradient"></div>
                <div className="d-flex justify-content-center gap-5 px-5 my-3 position-absolute bottom-0 w-100">
                    <button className="achieve-button">
                        <a href={photo_album_url} className="text-white fw-bold">фото</a>
                    </button>
                    <button className="achieve-button">
                        <a href={link_to_media} className="text-white fw-bold">сми</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AchieveCard;
