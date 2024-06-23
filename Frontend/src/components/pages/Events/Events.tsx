import './events.scss'
import React, {ReactElement, useState} from 'react';
import logo from '../../assets/icons/logo.svg';
import leftArrow from '../../assets/icons/left-arrow.svg';
import Carousel from 'react-bootstrap/Carousel';
import {ListPopup} from "./widgets/ListPopup/ListPopup";
import {ListPopupTile} from "./widgets/ListPopup/ListPopupTile";

interface Event {
    title?: string;
    description?: string;
    photo?: string;
    registration_link?: string;
}

const backendUrl = 'http://localhost:8000';


const LayoutComponent = ({children, backgroundImageUrl}: {
    children: string | ReactElement | ReactElement[],
    backgroundImageUrl: string | undefined,
}) => {
    return (
        <div
            style={{
                zIndex: 101,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                minHeight: '100vh',
                backgroundColor: 'black',
                color: 'white',
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${backendUrl}${backgroundImageUrl})`,
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
                <button
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        position: 'absolute',
                        top: 113,
                        right: 160,
                        zIndex: 200,
                        width: 100,
                        height: 100,
                        justifyContent: 'end',
                    }}
                    onClick={() => {
                        // setShowMenu(!showMenu);
                    }}
                >
                    <img
                        style={{
                            objectFit: 'none',
                            userSelect: 'none',
                        }}
                        // src={showMenu ? closeIcon : menuIcon}
                        alt='menu'
                    />
                </button>
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
                            paddingBottom: 80,
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
    event: Event,
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
                {event.title}
            </h1>
            <div style={{height: 60}}/>
            <div style={{
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 36 / 30,
                textAlign: 'left',
            }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.

                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.
                </p>
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
    // const [events, setEvents] = useState<Event[]>([]);
    //
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/v0/classic_events/?page=1')
    //         .then(res => {
    //             setEvents(res.data.classic_events);
    //         }).catch(err => {
    //         console.log('error');
    //     })
    // }, []);
    const [popup, setPopup] = useState<PopupType>(PopupType.none);
    const items: Event[] = [
        {title: 'ИНЖЕНЕРНЫЙ ВЫЗОВ', photo: '/media/photos/2024/06/23/a.jpg'},
        {title: 'ИНЖЕНЕРНЫЙ ВЫЗОВ 2'},
        {title: 'ИНЖЕНЕРНЫЙ ВЫЗОВ 3'},
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        if (selectedIndex < 0)
            setIndex(items.length - 1);
        else if (selectedIndex >= items.length)
            setIndex(0);
        else
            setIndex(selectedIndex);
    };


    // @ts-ignore
    return (
        <>
            {
                popup === PopupType.listParticipants ? <ListPopup
                    onClose={() => setPopup(PopupType.none)}
                    title={'ПОИСК КОМАНДЫ'}
                    children={
                        Array.from(Array(10).keys()).map(
                            () => <ListPopupTile onClick={() => setPopup(PopupType.participant)} children={'Анкета от Иванова И.И.'}/>,
                        )
                    }
                /> : null
            }
            {
                popup === PopupType.info ? <ListPopup
                    onClose={() => setPopup(PopupType.none)}
                    title={'ПОДРОБНЕЕ'}
                    children={[
                        <ListPopupTile children={'Дата проведения: 00.00.00'}/>,
                        <ListPopupTile children={'Место проведения'}/>,
                        <ListPopupTile children={'Фото'}/>,
                        <ListPopupTile children={'Упоминания в СМИ'}/>,
                        <ListPopupTile children={'Документы'}/>,
                    ]}
                /> : null
            }
            {
                popup === PopupType.participant ? <ListPopup
                    onClose={() => setPopup(PopupType.none)}
                    title={'Анкета от: Иванов И.И.'}
                    children={[
                        <ListPopupTile>
                            Команда
                        </ListPopupTile>,
                        <ListPopupTile>
                            Вконтакте
                        </ListPopupTile>,
                        <ListPopupTile>
                            Количество людей: N
                        </ListPopupTile>,
                        <ListPopupTile>
                            <div style={{minHeight: 200, padding: '10px'}}>
                                Компетенции:
                                <p style={{color: '#595959', display: 'block'}}>
                                    текст
                                </p>
                            </div>
                        </ListPopupTile>,
                        <ListPopupTile>
                            <div style={{minHeight: 200, padding: '10px'}}>
                                Дополнительная информация:
                                <p style={{color: '#595959', display: 'block'}}>
                                    текст
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
                    >
                        {items.map((event) => {
                            return (
                                <Carousel.Item key={event.title}>
                                    <EventComponent event={event} setPopup={setPopup}/>
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