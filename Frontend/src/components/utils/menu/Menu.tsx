import React, {useState} from "react";
import "./menu.scss"
import "../vars/root.scss"
import {Link} from 'react-router-dom';

import menu from "../../assets/icons/menu.svg"
import close from "../../assets/icons/close.svg"

const Menu = () => {
    const [isChecked, setChecked] = useState(false);

    const changeMenu = () => {
        setChecked(!isChecked);
    };

    return (
      <div className={"menu"}>
          <input type="checkbox" id="checkbox-toggle" onChange={changeMenu} checked={isChecked} />
          <div className={"menu-closed"}></div>

          <label htmlFor="checkbox-toggle">
              <div className={"change-button"}><img src={isChecked ? close : menu} alt=""/></div>
          </label>

          <div className={"menu-opened"}>
              <div className={"navigation"}>

                  <div className={"list"}>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}>
                                  <Link onClick={changeMenu} className="link" to="/">главная</Link>
                              </button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}>
                                  <Link onClick={changeMenu} className="link" to="/events">мероприятия</Link>
                              </button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}>
                                  <Link onClick={changeMenu} className="link" to="/hardathon">хардатон</Link>
                              </button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}>
                                  <Link onClick={changeMenu} className="link" to="/contacts">политика <br></br>перс.данных</Link> {/* заменить url на нужную вкладку  */}
                              </button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}>
                                  <Link onClick={changeMenu} className="link" to="/partners">партнёры</Link>
                              </button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                  </div>
                  <div className={"vertical-line"}></div>
              </div>
          </div>
      </div>
  )
}

export default Menu