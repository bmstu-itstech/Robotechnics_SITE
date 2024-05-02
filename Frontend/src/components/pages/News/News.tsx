import React, { useEffect, useState } from 'react';
import '../../utils/roots/news_root.scss'
import '../../utils/logo/logo.scss'
import Logo from "../../utils/logo/Logo"
import arrow from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import NewsCard from "../../utils/news-card/NewsCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";
import Slider from "react-slick"
import "./news.scss"
import { func } from 'prop-types';

interface News {
    title: string;
    description: string;
    new_url: string;
    photo: string;
}


export const News = () => {

    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v0/news/?page=1')
            .then(res => {
                setNews(res.data.news);
            }).catch(err => {
                console.log('error')
            })
    }, []);

    const responsive = {
        0: { items: 1 },
        1100: { items: 2 },
        1600: { items: 3 },
        2350: { items: 4 }
    };

    const Carousel = ({ items }: { items: News[] }) => (
        <AliceCarousel
            mouseTracking
            items={items.map((item, index) => (
                <div key={index}>
                    <NewsCard
                        title={item.title}
                        description={item.description}
                        new_url={item.new_url}
                        photo={item.photo}
                    />
                </div>
            ))}
            controlsStrategy="alternate"
            responsive={responsive}
            infinite={true}
            autoHeight={true}
            disableDotsControls={true}

        />
    );

    return (
        <section className={"news-page page"}>
            <Logo title="новости"/>
            {/* <div className={"logo-row mx-auto justify-content-center"}>
                <p title="новости" className={"title-text text-uppercase align-self-end"}>
                    новости
                </p>
            </div> */}
            <div className="news-carousel">
                <Carousel items={news} />
                <button className={"container-fluid-margless button-news mx-auto"}>
                    <Link className="link" to="/news">
                        <p className={"more-text-main text-light text-uppercase  m-0 fs-5"}>подробнее</p>
                    </Link>
                </button >
            </div>

        </section>
    )
}
