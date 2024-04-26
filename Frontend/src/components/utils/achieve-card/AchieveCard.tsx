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
        <div className="achieve-mobile d-inline-flex">
            <div className={"achieve-card-mobile list-group list-group-horizontal flex-fill"}>
                <div className="achieve-photo border-0 p-0">
                    <img src={photo} alt="achieve-photo-img" />
                </div>
                <div className={"achieve-vertical-line list-group-item p-0 border-0 "}></div>
                <div className={"d-flex list-group-item list-group p-0 bg-transparent border-0 my-auto flex-grow-1 achieve-vertical-group"}>
                    <div className="list-group-item achieve-title p-0 bg-transparent border-0 flex-grow-1">
                        <p className="fw-bold text-white text-uppercase text-center">{title}</p>
                    </div>
                    <div className={"achieve-horizontal-line mx-auto"}></div>
                    <button className={"btn achieve-more list-group-item bg-transparent flex-grow-1 p-0 border-0 "}>
                        <a href={link_to_media} className={"text-white fw-light text-uppercase text-center"}>Подробнее</a>
                    </button>
                </div>


            </div>

        </div>
        // <div className={"card"}>
        //     <img src={photo} className={"rounded card-img-top"} alt="card-photo"></img>
        //     <div className={"card-img-overlay"}>
        //         <div className={"card-header "}>
        //             <h5 className={"card-title"}>{title}</h5>
        //             <p className={"card-text"}>{description}</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AchieveCard;
