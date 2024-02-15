import React, {useState} from "react";
import "./menu.scss"
import {Link} from 'react-router-dom';

import menu from "../../assets/icons/menu.svg"
import close from "../../assets/icons/close.svg"

const Menu = () => {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (
      <div className={"menu"}>
          <input type="checkbox" id="checkbox-toggle" onChange={handleCheckboxChange} checked={isChecked} />
          <div className={"menu-closed"}></div>

          <label htmlFor="checkbox-toggle">
              <div className={"change-button"}><img src={isChecked ? close : menu} alt=""/></div>
          </label>

          <div className={"menu-opened"}>
              <div className={"navigation"}>

                  <div className={"list"}>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/">главная</Link></button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/news_page">новости</Link></button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/events_page">мероприятия</Link></button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/">ХАРДАТОН</Link></button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/">ДОСТИЖЕНИЯ</Link></button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/partners">ПАРТНЁРЫ</Link></button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-uppercase text-white"}><Link className="link" to="/contacts">КОНТАКТЫ</Link></button>
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