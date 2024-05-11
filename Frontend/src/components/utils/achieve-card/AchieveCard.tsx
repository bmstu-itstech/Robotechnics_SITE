import React from 'react';
import '../roots/achieveCard_root.scss'
import './achievecard.scss';
import arrow from "../../assets/icons/arrow.svg";
import { useLayoutEffect, useRef, useState, Ref } from 'react';

const AchieveCard = ({ title, description, photo_album_url, link_to_media, photo, index, inputRef }: {
    title: string,
    description: string,
    photo_album_url: string,
    link_to_media: string,
    photo: string,
    index: number,
    inputRef: Ref<HTMLDivElement>

}) => {

    return (
        <div className={"achieve-card position-relative "} ref={inputRef} >
            <div className="d-inline-flex achieve-mobile" >
                <div className={"achieve-card-mobile list-group list-group-horizontal flex-fill"}>
                    <div className="achieve-photo border-0 p-0">
                        <img src={photo} alt="achieve-photo-img" />
                    </div>
                    <div className={"achieve-vertical-line list-group-item p-0 border-0 "}></div>
                    <div className={"d-flex list-group-item list-group p-0 bg-transparent border-0 my-auto flex-grow-1 achieve-vertical-group"}>
                        <div className="list-group-item achieve-title p-0 bg-transparent border-0 flex-grow-1">
                            <p className="text-white text-uppercase text-center">{title}</p>
                        </div>
                        <div className={"achieve-horizontal-line mx-auto"}></div>
                        <button className={"btn achieve-more list-group-item bg-transparent flex-grow-1 p-0 border-0 "}>
                            <a href={link_to_media} className={"text-white fw-light text-uppercase text-center"}>Подробнее</a>
                        </button>
                    </div>
                </div>
            </div>

            <button className="d-flex achieve-desktop border-0 p-0 bg-transparent">
                <a className={"card achieve-card-desktop h-100"} href={link_to_media}>
                    <img className={"achieve-photo"} src={photo} alt="card-img" />
                    <div className={"card-img-overlay overlay-gradient d-flex  "}>
                        <h3 className="card-title text-uppercase text-center">{title}</h3>
                        <div className={"first-card"}>
                            <p className={"achieve-description text-break"}>{description}</p>
                            <div className={"d-flex flex-row"}>
                                <button className={"btn achieve-button-f-card"}>Фото</button>
                                <button className={"btn achieve-button-f-card"}>СМИ</button>
                            </div>
                        </div>
                    </div>
                </a>
            </button>
            <script src="scrollIntoView.js"></script>
        </div>
    );
};

export default AchieveCard;
