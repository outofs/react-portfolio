import React, { useState } from "react";
import "../../components/header/header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 50) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  });

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* <a href="#" className="nav__logo">
          Oleksandr Hirych
        </a> */}

        <div
          className={showMenu ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  activeNav === "#home" ? "active-link" : ""
                }`}
                onClick={() => {
                  setActiveNav("#home");
                }}
              >
                <i className="uil nav__icon uil-estate"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  activeNav === "#about" ? "active-link" : ""
                }`}
                onClick={() => {
                  setActiveNav("#about");
                }}
              >
                <i className="uil nav__icon uil-user"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeNav === "#skills" ? "active-link" : ""
                }`}
                onClick={() => {
                  setActiveNav("#skills");
                }}
              >
                <i className="uil nav__icon uil-file-alt"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${
                  activeNav === "#portfolio" ? "active-link" : ""
                }`}
                onClick={() => {
                  setActiveNav("#portfolio");
                }}
              >
                <i className="uil nav__icon uil-scenery"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  activeNav === "#contact" ? "active-link" : ""
                }`}
                onClick={() => {
                  setActiveNav("#contact");
                }}
              >
                <i className="uil nav__icon uil-message"></i> Contactme
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          ></i>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className="uil nav__icon uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
