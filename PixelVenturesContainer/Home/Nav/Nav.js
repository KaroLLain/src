import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import logo from "../../../assets/img/LogoPV2.png";
import "./Nav.css";

export default function Nav() {
  const [isMenuOpen, handleMenu] = useState(false);

  const handleCloseMenu = () => {
    handleMenu(false);
  };

  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };

  return (
    <nav className="nav">
      <div className="navWrapper">
        <div className="logoWrapper">
          <a href="#home" className="nav__list__link">
            <img
              src={logo}
              alt="logo Karolina"
              className="nav__list__link--img"
            />
          </a>
        </div>
        <div className="linkWrapper">
          <ul className="nav__list">
            <li className="nav__list__item">
              <a href="#home" className="nav__list__link">
                HOME
              </a>
            </li>
            <li className="nav__list__item">
              <a href="#portfolioSection" className="nav__list__link">
                MY WORK
              </a>
            </li>
            <li className="nav__list__item">
              <a href="#aboutSection" className="nav__list__link">
                ABOUT
              </a>
            </li>
            <li className="nav__list__item">
              <a href="#contactSection" className="nav__list__link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navBurgerContainer">
        <Menu
          isOpen={isMenuOpen}
          onStateChange={handleStateChange}
        >
          <a onClick={() => handleCloseMenu()} href="#home">
            HOME
          </a>
          <a onClick={() => handleCloseMenu()} href="#portfolioSection">
            WORK
          </a>
          <a onClick={() => handleCloseMenu()} href="#aboutSection">
            ABOUT
          </a>
          <a onClick={() => handleCloseMenu()} href="#contactSection">
            CONTACT
          </a>
        </Menu>
      </div>
    </nav>
  );
}
