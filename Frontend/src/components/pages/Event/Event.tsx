import "./event.scss"
import React, {useEffect, useState} from 'react';
import close from "../../assets/icons/close.svg"
import add from "../../assets/icons/add.png"
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom";
import Logo from "../../utils/logo/Logo";

interface EventInf {
    title: string;
    description: string;
    photo: string;
    photo_album_url: string;
    documents_url: string;
    location: string;
    event_date: string;
    social_media_mention: string;
    registration_link: string;
}

interface Questionnaires {
    searcher_fio: string
}

interface Questionnaire {
    searcher_fio: string,
    searcher_bmstu_group: string,
    participants_count: number,
    required_competencies: string,
    searcher_VK: string,
    additional: string
}

export const Event = () => {
    const [finderState, changeFinder] = useState(false);
    const [aboutState, changeAbout] = useState(false);
    const [formState, changeForm] = useState(false);

    const finderBtn = () => {
        changeFinder(!finderState);
    };

    const aboutBtn = () => {
        changeAbout(!aboutState);
    };

    const respBtn = async (index: number) => {
        try {
            const response = await axios.get(
                `/api/v0/questionnaire/${index+1}/`
            );
            setQuestionnaire(response.data);
            changeForm(!formState);
        } catch (err) {
            console.log(err);
        }
    };

    const formBtn = () => {
        changeForm(!formState);
    };

    const params = useParams();

    const [eventsInf, setEventsInf] = useState<EventInf>();
    const [questionnaires, setQuestionnaires] = useState<Questionnaires[]>([]);
    const [questionnaire, setQuestionnaire] = useState<Questionnaire>();

    useEffect(() => {
        axios.get('/api/v0/questionnaire/?page=1')
            .then(res => {
                setQuestionnaires(res.data.questionnaires);
            }).catch(err => {
                console.log(err);
        })
    }, []);

    useEffect(() => {
        axios.get('//darleet.com/api/v0/classic_events/' + params.id + '/')
            .then(res => {
                setEventsInf(res.data);
            }).catch(err => {
                console.log(err);
        })
    }, [params]);

    const navigate = useNavigate();

    const handleClick = () => {
        if (params.id !== undefined) {
            const nextId = parseInt(params.id) + 1;
            navigate("/events/" + nextId);
        }
    };

    return (
        <section className={"page page-section"}>

            <div className={`${finderState ? 'dark-back' : ''}`}></div>
            <div className={`sidebar ${finderState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-uppercase text-light"}>Поиск команды</p>
                    <img src={close} onClick={finderBtn} alt=""/>
                </div>
                <div className={"team-board team-scrollbar d-flex flex-column"}>
                    {questionnaires.map((questionnaire, index) => (
                        <button key={index} className={"form"} onClick={() => respBtn(questionnaires.length-index-1)}>{questionnaire.searcher_fio}</button>
                    ))}
                </div>
            </div>

            <div className={`${aboutState ? 'dark-back' : ''}`}></div>
            <div className={`sidebar ${aboutState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-uppercase text-light"}>подробнее</p>
                    <img src={close} onClick={aboutBtn} alt=""/>
                </div>
                <button className={"about-form"}>Дата проведения: {eventsInf?.event_date}</button>
                <Link to={eventsInf?.location || ''} className="link"><button className={"about-form"}>Место проведения</button></Link>
                <Link to={eventsInf?.photo_album_url || ''} className="link"><button className={"about-form"}>Фото</button></Link>
                <Link to={eventsInf?.social_media_mention || ''} className="link"><button className={"about-form"}>Упоминания в СМИ</button></Link>
                <Link to={eventsInf?.documents_url || ''} className="link"><button className={"about-form"}>Документы</button></Link>
            </div>


            <div className={`sidebar ${formState ? 'sidebar-closed' : ''}`}>
                <div className={"d-flex align-items-center justify-content-around mt-5"}>
                    <p className={"m-0 fw-bold fs-1 text-light"}>Анкета от: {questionnaire?.searcher_fio}</p>
                    <img src={close} onClick={() => formBtn()} alt=""/>
                </div>
                <button className={"about-form member"}>группа {questionnaire?.searcher_bmstu_group}</button>
                <Link to={questionnaire?.searcher_VK || ''}>
                    <button className={"about-form member"}>Вконтакте</button>
                </Link>
                <button className={"about-form member"}>Количество людей: {questionnaire?.participants_count}</button>
                <div className={"outer-box"}>
                    <div className={"team-board member-scrollbar member-board d-flex flex-column"}>
                        Компетенции
                        <p>{questionnaire?.required_competencies}</p>
                    </div>
                </div>
                <div className={"outer-box"}>
                    <div className={"team-board member-scrollbar member-board d-flex flex-column"}>
                        Дополнительная информация
                        <p>{questionnaire?.additional}</p>
                    </div>
                </div>
            </div>

            <Logo></Logo>
            <div className={"navigation-bar"}>
                <div className={"v-line"}></div>
                <div className={"list-bar"}>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v1"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v2"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v3"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v4"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v5"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v6"} className={"pointer"}></div>
                    </div>
                    <div className={"elem"}>
                        <div className={"h-line"}></div>
                        <div id={"v7"} className={"pointer"}></div>
                    </div>
                </div>
            </div>

            <div className={"container"}>
                <button className={"event-btn prev-btn"}>
                    <p className="fw-bolder fs-4 text-uppercase text-light m-0">предыдущее мероприятие</p>
                </button>
                <div className={"my-5 row"}>
                    <div className={"col-7"}>
                        <p className="fw-bold title-1 text-uppercase text-light">{eventsInf?.title}</p>
                        <div className={"my-5 text-light fs-4"}>
                            {eventsInf?.description}
                        </div>
                        <button className={"event-btn next-btn"} onClick={handleClick}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">следующее мероприятие</p>
                        </button>
                    </div>
                    <div className={"col-5 my-5 d-flex flex-column"}>
                        <button className={"event-btn"} onClick={aboutBtn}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">подробнее</p>
                        </button>
                        <Link to={eventsInf?.registration_link || ''} className="link">
                            <button className={"event-btn"}>
                                <p className="fw-bolder fs-4 text-uppercase text-light m-0">
                                    зарегистрироваться
                                </p>
                            </button>
                        </Link>
                        <button id={"team-find"} className={"event-btn"} onClick={finderBtn}>
                            <p className="fw-bolder fs-4 text-uppercase text-light m-0">поиск команды</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

