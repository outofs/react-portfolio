import React from "react";
import "../home/home.scss";
const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/oleksandr-hirych-0757b3243/"
                target="_blank"
                className="home__social-icon" rel="noreferrer"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://www.artstation.com/outofs"
                target="_blank"
                className="home__social-icon" rel="noreferrer"
              >
                <i className="uil uil-palette"></i>
              </a>
              <a
                href="https://github.com/outofs"
                target="_blank"
                className="home__social-icon" rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
            <div className="home__img">
              <picture>
                <source
                  srcSet={require("../../assets/portfolio-img-small.webp")}
                  type="image/web"
                />
                <img
                  src={require("../../assets/portfolio-img-small.png")}
                  alt=""
                />
              </picture>
            </div>
            <div className="home__data">
              <h1 className="home__title">Hi, I'am Oleksandr</h1>
              <h3 className="home__subtitle">Fullstack developer</h3>
              <p className="home__description">
                Welcome to my portfolio! Wish that you'll find something
                interesting here.
              </p>
              <a href="#contact" className="button button--flex">
                Contact Me
                <i className="uil nav__icon uil-message button__icon"></i>
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt-2 home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll Down</span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
