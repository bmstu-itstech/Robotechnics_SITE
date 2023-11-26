import React, {useState} from "react";
import "./menu.scss"

// @ts-ignore
import menu from "./menu.svg"
// @ts-ignore
import close from "./close.svg"

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
              <img className={"change-button"} src={isChecked ? close : menu} alt="" />
          </label>

          <div className={"menu-opened"}>
              <div className={"navigation"}>

                  <div className={"list"}>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ГЛАВНАЯ</button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>НОВОСТИ</button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>МЕРОПРИЯТИЯ</button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ХАРДАТОН</button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ДОСТИЖЕНИЯ</button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ПАРТНЁРЫ</button>
                          </p>
                          <div className={"dot"}></div>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>КОНТАКТЫ</button>
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