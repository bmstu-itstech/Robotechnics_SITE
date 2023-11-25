import React from "react";
import "./menu.scss"

// @ts-ignore
import menu from "./menu.svg"
// @ts-ignore
import close from "./close.svg"
import {findAllByDisplayValue} from "@testing-library/react";
// src={"../../../../src/components/assets/icons/menu.svg"}

const Menu = () => {
  return (
      <div className={"menu"}>
          <input type="checkbox" id="checkbox-toggle" />
          <div className={"circle"}>
              <div className={"corner"}>
                  <label htmlFor="checkbox-toggle" className={"fs-3"}>
                      <img className={"menu-icon"} src={menu} alt="" />
                  </label>
              </div>
          </div>

          <div className={"cropper"}>
              <div className={"ellipse"}></div>
              <div className={"navigation"}>
                  <div className={"close-button"}>
                      <label htmlFor="checkbox-toggle" className={"fs-3"}>
                          <img src={close} alt=""/>
                      </label>
                  </div>
                  <div className={"list"}>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ГЛАВНАЯ</button>
                          </p>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>НОВОСТИ</button>
                          </p>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>МЕРОПРИЯТИЯ</button>
                          </p>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ХАРДАТОН</button>
                          </p>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ДОСТИЖЕНИЯ</button>
                          </p>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>ПАРТНЁРЫ</button>
                          </p>
                          <div className={"horizontal-line"}></div>
                      </div>
                      <div className={"list-item"}>
                          <p className={"text-item"}>
                              <button className={"menu-button text-white"}>КОНТАКТЫ</button>
                          </p>
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