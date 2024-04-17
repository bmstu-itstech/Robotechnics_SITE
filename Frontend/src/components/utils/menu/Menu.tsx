import React, { useState } from "react";
import "../roots/menu_root.scss"
import "./menu.scss"
import { Link } from 'react-router-dom';

import menu from "../../assets/icons/menu.svg"
import close from "../../assets/icons/close.svg"

const Menu = () => {
    const [isChecked, setChecked] = useState(false);

    const changeMenu = () => {
        setChecked(!isChecked);
    };

    return (
        <div>
            <button className="btn position-fixed z-1 top-0 end-0 bg-transparent me-3 mt-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={isChecked ? close : menu} alt="changeButton" /></button>

            <div className="offcanvas offcanvas-end bg-transparent" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"> </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                </div>
                <div className="offcanvas-body d-flex justify-content-center align-items-start mt-5 ps-0">
                    <div className={"list-group list-group-horizontal list-group-flush"}>
                        <div className={"list-group list-group-flush justify-content-center"}>
                            <div className={"list-group-item  bg-transparent border-0 align-items-center d-flex justify-content-end"}>
                                <p className={"text-item me-2 mb-3"}>
                                    <button className={"menu-button text-uppercase text-white  "}>
                                        <Link onClick={changeMenu} className={"link"} to="/">главная</Link>
                                    </button>
                                </p>
                            </div>
                            <div className={"list-group-item bg-transparent border-0 align-items-center d-flex justify-content-end"}>
                                <p className={"text-item me-2  mb-3"}>
                                    <button className={"menu-button text-uppercase text-white"}>
                                        <Link onClick={changeMenu} className={"link"} to="/events">мероприятия</Link>
                                    </button>
                                </p>

                            </div>
                            <div className={"list-group-item bg-transparent border-0 align-items-center d-flex justify-content-end"}>
                                <p className={"text-item me-2  mb-3"}>
                                    <button className={"menu-button text-uppercase text-white "}>
                                        <Link onClick={changeMenu} className={"link"} to="/hardathon">хардатон</Link>
                                    </button>
                                </p>
                            </div>
                            <div className={"list-group-item bg-transparent border-0 align-items-center d-flex justify-content-end"}>
                                <p className={"text-item me-2  mb-3"}>
                                    <button className={"menu-button text-uppercase text-white"}>
                                        <Link onClick={changeMenu} className={"link"} to="/partners">партнёры</Link>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className={"d-flex flex-column justify-content-around"}>
                            <div>
                                <div className={"dot"}></div>
                                <div className={"horizontal-line"}></div>
                            </div>
                            <div>
                                <div className={"dot"}></div>
                                <div className={"horizontal-line"}></div>
                            </div>
                            <div>
                                <div className={"dot"}></div>
                                <div className={"horizontal-line"}></div>
                            </div>
                            <div>
                                <div className={"dot"}></div>
                                <div className={"horizontal-line"}></div>
                            </div>
                        </div>
                        <div className={"vertical-line"}></div>
                    </div>
                </div>
            </div>
        </div>


        // <div className={"menu"}>
        //     <input type="checkbox" id="checkbox-toggle" onChange={changeMenu} checked={isChecked} />
        //     <div className={"menu-closed"}></div>

        //     <label htmlFor="checkbox-toggle">
        //         <div className={"change-button"}><img src={isChecked ? close : menu} alt="changeButton" /></div>
        //     </label>

        //     <div className={"menu-opened"}>
        //         <div className={"navigation"}>

        //             <div className={"list "}>
        //                 <div className={"list-item"}>
        //                     <p className={"text-item"}>
        //                         <button className={"menu-button text-uppercase text-white"}>
        //                             <Link onClick={changeMenu} className="link" to="/">главная</Link>
        //                         </button>
        //                     </p>
        //                     <div className={"dot"}></div>
        //                     <div className={"horizontal-line"}></div>
        //                 </div>
        //                 <div className={"list-item"}>
        //                     <p className={"text-item"}>
        //                         <button className={"menu-button text-uppercase text-white"}>
        //                             <Link onClick={changeMenu} className="link" to="/events">мероприятия</Link>
        //                         </button>
        //                     </p>
        //                     <div className={"dot"}></div>
        //                     <div className={"horizontal-line"}></div>
        //                 </div>
        //                 <div className={"list-item"}>
        //                     <p className={"text-item"}>
        //                         <button className={"menu-button text-uppercase text-white"}>
        //                             <Link onClick={changeMenu} className="link" to="/hardathon">хардатон</Link>
        //                         </button>
        //                     </p>
        //                     <div className={"dot"}></div>
        //                     <div className={"horizontal-line"}></div>
        //                 </div>
        //                 <div className={"list-item"}>
        //                     <p className={"text-item"}>
        //                         <button className={"menu-button text-uppercase text-white"}>
        //                             <Link onClick={changeMenu} className="link" to="/partners">партнёры</Link>
        //                         </button>
        //                     </p>
        //                     <div className={"dot"}></div>
        //                     <div className={"horizontal-line"}></div>
        //                 </div>
        //             </div>
        //             <div className={"vertical-line"}></div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Menu