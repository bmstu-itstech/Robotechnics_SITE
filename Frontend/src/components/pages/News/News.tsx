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
        1650: { items: 3 },
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
            disableButtonsControls={true}
            responsive={responsive}
            infinite={true}
        />
    );

    return (
        <section className={"news-page"}>
            <div className={"logo-row mx-auto justify-content-center"}>
                <p title="новости" className={"title-text text-uppercase align-self-end"}>
                    новости
                </p>
            </div>
            <div className="news-carousel">
                <div className="desktop-carousel">
                    <Carousel items={news} />
                </div>
                <div className="mobile-carousel">
                    {news.map((item, index) => (
                        <NewsCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            new_url={item.new_url}
                            photo={item.photo}
                        />
                    ))}
                    <button className={'btn position-absolute start-0 top-50 swap-btn-news rotate-180 ms-2'} type="button">
                        <img className={'img-fluid'} src={arrow} alt="prevButton" />
                    </button>
                    <button className={'btn position-absolute end-0 top-50 swap-btn-news me-2'} type="button">
                        <img className={'img-fluid'} src={arrow} alt="nextButton" />
                    </button>
                    <button className={"container-fluid container-fluid-margless button-main col-4 justify-content-center"}>
                        <Link className="link" to="/news">
                            <p className={"more-text-main text-light text-uppercase  m-0"}>подробнее</p>
                        </Link>
                    </button >
                </div>
            </div>

        </section>
    )
}
