import React, { useState } from "react";
import { Link } from 'react-router-dom';
import menu from "../../assets/icons/menu.svg"
import close from "../../assets/icons/close.svg"
import "./../roots/menu_root.scss"
import "./menu.scss"

const Menu = () => {
    const [isChecked, setChecked] = useState(false);

    const changeMenu = () => {
        setChecked(!isChecked);
    };
    const myOffcanvas = document.getElementById('offcanvasRight')
    if (myOffcanvas) {
        myOffcanvas.addEventListener("hide.bs.offcanvas", changeMenu)
    }


    return (
        <div>
            <button className="btn  position-fixed border-0 p-0 bg-transparent change-button " onClick={changeMenu} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img src={isChecked ? close : menu} alt="changeButton" className={"img-fluid img-fluid-height-100"} />
            </button>

            <div className="offcanvas offcanvas-end bg-transparent border-0 p-0 w-auto" tabIndex={-1} id="offcanvasRight" data-bs-backdrop="true" aria-labelledby="offcanvasRightLabel" >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"> </h5>
                    <button type="button" className="d-none btn-close-white" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                </div>
                <div className="offcanvas-body d-flex justify-content-end align-items-start mt-5 ps-0 overflow-visible" >
                    <div className={"list-group list-group-horizontal list-group-horizontal-menu list-group-flush"}>
                        <div className={"list-group list-group-flush justify-content-center"}>
                            <div className={"list-group-item  bg-transparent border-0 align-items-center d-flex justify-content-end my-auto ps-0"} >
                                <p className={"text-item"}>
                                    <button className={"menu-button text-uppercase text-white"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                        <Link className={"link"} to="/" >главная</Link>
                                    </button>
                                </p>
                                <div className={"dot position-absolute start-100"}></div>
                            </div>
                            <div className={"list-group-item bg-transparent border-0 align-items-center d-flex justify-content-end my-auto ps-0"}>
                                <p className={"text-item"}>
                                    <button className={"menu-button text-uppercase text-white"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                        <Link className={"link"} to="/events" >мероприятия</Link>
                                    </button>
                                </p>
                                <div className={"dot position-absolute start-100"}></div>
                            </div>
                            <div className={"list-group-item bg-transparent border-0 align-items-center d-flex justify-content-end my-auto ps-0"}>
                                <p className={"text-item"}>
                                    <button className={"menu-button text-uppercase text-white "} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                        <Link className={"link"} to="/hardathons" >хардатоны</Link>
                                    </button>
                                </p>
                                <div className={"dot position-absolute start-100"}></div>
                            </div>
                            <div className={"list-group-item bg-transparent border-0 align-items-center d-flex justify-content-end my-auto ps-0"}>
                                <p className={"text-item"}>
                                    <button className={"menu-button text-uppercase text-white"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                        <Link className={"link"} to="/partners" >партнёры</Link>
                                    </button>
                                </p>
                                <div className={"dot position-absolute start-100"}></div>
                            </div>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <div className={"my-auto"}>
                                <div className={"horizontal-line"}></div>
                            </div>
                            <div className={"my-auto"}>
                                <div className={"horizontal-line"}></div>
                            </div>
                            <div className={"my-auto"}>
                                <div className={"horizontal-line"}></div>
                            </div>
                            <div className={"my-auto"}>
                                <div className={"horizontal-line"}></div>
                            </div>
                        </div>
                        <div className={"vertical-line my-auto"}></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu