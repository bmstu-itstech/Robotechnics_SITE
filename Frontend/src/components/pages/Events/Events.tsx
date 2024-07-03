import './events.scss'
import React, {ReactElement, useState} from 'react';
import logo from '../../assets/icons/logo.svg';
import leftArrow from '../../assets/icons/left-arrow.svg';
import menuImg from '../../assets/icons/events-menu.svg';
import Carousel from 'react-bootstrap/Carousel';
import {ListPopup} from './widgets/ListPopup/ListPopup';
import {ListPopupTile} from './widgets/ListPopup/ListPopupTile';
import {useQuery} from '@tanstack/react-query';
import templateBGImage from '../../assets/images/events-template-bg.png';
import moment from 'moment';


interface ShortEvent {
    id: number
    title: string
    photo: string
}

interface Event extends ShortEvent {
    description: string
    photo_album_url: string
    documents_url: string
    location: string
    event_date: string
    social_media_mention: string
    registration_link: string
}

export interface ShortQuestionnaire {
    id: number
    searcher_fio: string
    classic_event: number
}

export interface Questionnaire extends ShortQuestionnaire {
    searcher_bmstu_group: string
    participants_count: number
    required_competencies: string
    seacher_VK: string
    additional: string
}

const backendUrl = 'http://localhost:8000';


const LayoutComponent = ({children, backgroundImageUrl}: {
    children: string | ReactElement | ReactElement[],
    backgroundImageUrl: string | undefined,
}) => {
    return (
        <div
            style={{
                zIndex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                minHeight: '100vh',
                backgroundColor: 'black',
                color: 'white',
                backgroundImage: backgroundImageUrl !== '' ? `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85) ), url(${backendUrl}${backgroundImageUrl})` : templateBGImage,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div style={{
                position: 'relative',
                minHeight: '100vh',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                paddingBottom: 80,
            }}>
                <div
                    style={{
                        paddingTop: 76,
                        paddingLeft: 160,
                        paddingRight: 110,
                        // position: 'absolute',
                        // top: 0,
                        // left: 0,
                        // right: 0,
                    }}
                >
                    <a
                        href={'/'}
                        style={{
                            position: 'absolute',
                            width: 112,
                            height: 114,
                        }}
                    >
                        <img
                            src={logo}
                            className='logo-img'
                            alt=''
                            style={{
                                display: 'block'
                            }}
                        />
                    </a>
                    <div
                        style={{
                            top: 222 - 76,
                            left: 0,
                            right: 0,
                            height: 'max-content',
                            position: 'absolute',
                            paddingBottom: 120,
                            color: 'white',
                            // backgroundColor: 'red',
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

const RegistrationButton = () => {
    return (
        <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            justifyItems: 'center',
            marginTop: 10,
            color: 'white',
        }}>
            <div style={{
                backgroundColor: 'red',
                content: '',
                alignSelf: 'center',
                width: 27,
                height: 27,
                borderRadius: 100,
                textAlign: 'center',
            }}/>
            <div style={{width: 13}}/>
            <div style={{
                padding: '10px 0px',
                color: 'white', textTransform: 'uppercase',
                fontFamily: 'Intro Black',
                fontSize: 35,
                fontWeight: 900,
                lineHeight: 1,
                textAlign: 'left',
            }}>
                ЗАРЕГИСТРИРОВАТЬСЯ
            </div>
            <span style={{
                marginLeft: 'auto',
                paddingLeft: 4,
                paddingTop: 8,
                fontSize: 16,
                transform: 'rotate(-45deg)',
            }}>➔</span>
        </button>
    )
}

const ButtonComponent = ({text, onClick}: { text: string, onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            style={{
                textTransform: 'uppercase',
                backgroundColor: 'red',
                borderRadius: 60,
                border: 'none',
                color: 'white',
                width: '100%',
                height: 80,
                padding: '24px 24px',
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 36 / 30,
                textAlign: 'center',
            }}
        >
            {text}
        </button>
    )
}

enum PopupType {
    none,
    info,
    listParticipants,
    participant,
}

const EventComponent = ({event, setPopup}: {
    event?: Event,
    setPopup: (value: (((prevState: PopupType) => PopupType) | PopupType)) => void
}) => {

    return (
        <>
            <h1
                style={{
                    fontSize: 75,
                    lineHeight: '90px',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: 'white',
                    textTransform: 'uppercase',
                    textDecoration: 'underline',
                    textDecorationColor: 'red',
                    textDecorationThickness: '4px',
                    textUnderlineOffset: '2px',
                }}
            >
                {event?.title}
            </h1>
            <div style={{height: 60}}/>
            <div style={{
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 36 / 30,
                textAlign: 'left',
                textWrap: 'wrap',
                height: 300,
                width: '70vw',
                overflowX: "scroll"
            }}>
                <p
                    style={{
                        textWrap: "wrap",
                    }}
                >{event?.description ?? ''}</p>
            </div>
            <div style={{height: 62}}/>
            <RegistrationButton/>
            <div style={{height: 62}}/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 104,
            }}>
                <ButtonComponent onClick={() => setPopup(PopupType.listParticipants)} text={'СПИСОК КОМАНД'}/>
                <ButtonComponent onClick={() => setPopup(PopupType.info)} text={'ПОДРОБНЕЕ'}/>
            </div>
        </>
    )
}


export const Events = () => {
    const [popup, setPopup] = useState<PopupType>(PopupType.none);

    const {data: eventsList} = useQuery<ShortEvent[]>({
            queryKey: ['event-list'],
            queryFn: () => fetch(`${backendUrl}/api/v0/classic_events/`)
                .then(r => r.json())
                .then(d => d['events']),
            placeholderData: () => [
                {
                    id: 1,
                    title: 'инженерный вызов',
                    photo: '',
                }
            ],
        }
    );

    const items = eventsList ?? [];

    // const items: ShortEvent[] = [
    //     {
    //         id: 1,
    //         title: 'Dalle',
    //         photo: '',
    //     },
    //     {
    //         id: 2,
    //         title: 'Dalle 2',
    //         photo: '/media/photos/2024/06/23/a.jpg',
    //     },
    //     {
    //         id: 3,
    //         title: 'Dalle 3',
    //         photo: '/media/photos/2024/06/23/a.jpg',
    //     },
    // ]

    const [index, setIndex] = useState(0);

    const {data: fullEvent} = useQuery<Event>({
        queryKey: ['events', index],
        queryFn: () => fetch(`${backendUrl}/api/v0/classic_events/${items[index].id}/`).then(r => r.json()),
        placeholderData: _ => ({
            id: items[index].id,
            title: items[index].title,
            photo: items[index].photo,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            photo_album_url: '',
            documents_url: '',
            location: '',
            event_date: '',
            social_media_mention: '',
            registration_link: '',
        }),
    });

    const handleSelect = (selectedIndex: number) => {
        if (selectedIndex < 0)
            setIndex(items.length - 1);
        else if (selectedIndex >= items.length)
            setIndex(0);
        else
            setIndex(selectedIndex);
    };

    const [participantId, setParticipant] = useState<number | null>(null)

    const {data: questionnairies} = useQuery<Questionnaire[]>({
        queryKey: ['events', index, 'participants'],
        queryFn: () => fetch(`${backendUrl}/api/v0/questionnaire/`)
            .then(r => r.json())
            .then(d => d['questionnaires']),
    });

    const {data: participant} = useQuery<Questionnaire>({
        enabled: participantId != null,
        queryKey: ['events', index, 'participants', participantId],
        queryFn: () => fetch(`${backendUrl}/api/v0/questionnaire/${participantId}/`)
            .then(r => r.json()),
    });


    // @ts-ignore
    return (
        <>
            {
                popup === PopupType.listParticipants ? <ListPopup
                    onClose={() => setPopup(PopupType.none)}
                    title={'ПОИСК КОМАНДЫ'}
                    children={
                        questionnairies?.map(
                            questionnaire => <ListPopupTile
                                onClick={() => setPopup(PopupType.participant)}
                            >
                                <a onClick={() => setParticipant(questionnaire.id)}>
                                    {`Анкета от ${questionnaire.searcher_fio}`}
                                </a>
                            </ListPopupTile>
                        )
                    }
                /> : null
            }
            {
                popup === PopupType.info ? <ListPopup
                    onClose={() => setPopup(PopupType.none)}
                    title={'ПОДРОБНЕЕ'}
                    children={[
                        <ListPopupTile
                            children={`Дата проведения: ${moment(fullEvent?.event_date).format('YYYY-MM-DD')}`}/>,
                        <ListPopupTile><a href={fullEvent?.location}>Место проведения</a></ListPopupTile>,
                        <ListPopupTile><a href={fullEvent?.photo_album_url}>Фото</a></ListPopupTile>,
                        <ListPopupTile><a href={fullEvent?.photo_album_url}>Упоминания в СМИ</a></ListPopupTile>,
                        <ListPopupTile><a href={fullEvent?.documents_url}>Документы</a></ListPopupTile>,
                    ]}
                /> : null
            }
            {
                popup === PopupType.participant ? <ListPopup
                    onClose={() => setPopup(PopupType.none)}
                    onBack={() => setPopup(PopupType.listParticipants)}
                    title={<>Анкета от: <br/>{participant?.searcher_fio ?? ''}</>}
                    children={[
                        <ListPopupTile>
                            Команда
                        </ListPopupTile>,
                        <ListPopupTile>
                            <a href={participant?.seacher_VK}>
                                Вконтакте
                            </a>
                        </ListPopupTile>,
                        <ListPopupTile>
                            Количество людей: {participant?.participants_count}
                        </ListPopupTile>,
                        <ListPopupTile>
                            <div style={{minHeight: 200, padding: '10px'}}>
                                Компетенции:
                                <p style={{color: '#595959', display: 'block'}}>
                                    {participant?.required_competencies}
                                </p>
                            </div>
                        </ListPopupTile>,
                        <ListPopupTile>
                            <div style={{minHeight: 200, padding: '10px'}}>
                                Дополнительная информация:
                                <p style={{color: '#595959', display: 'block'}}>
                                    {participant?.additional}
                                </p>
                            </div>
                        </ListPopupTile>,
                    ]}
                /> : null
            }
            <LayoutComponent backgroundImageUrl={items[index].photo ?? undefined}>
                <div style={{
                    gap: 82,
                    paddingTop: 76,
                    paddingLeft: 160,
                    paddingRight: 110,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <button
                        onClick={() => handleSelect(index - 1)}
                        style={{
                            width: 61,
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <img src={leftArrow} alt={''}/>
                    </button>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        slide={false}
                        controls={false}
                        indicators={false}
                        interval={10000000000}
                    >
                        {items.map((event) => {
                            return (
                                <Carousel.Item key={event.title}>
                                    <EventComponent event={fullEvent} setPopup={setPopup}/>
                                </Carousel.Item>
                            );
                        })}

                    </Carousel>
                    <button
                        onClick={() => handleSelect(index + 1)}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            width: 61,
                        }}
                    >
                        <img src={leftArrow} alt={''} style={{transform: 'rotate(180deg)'}}/>
                    </button>
                </div>
            </LayoutComponent>
        </>
    )
}