import React, { useState } from "react";
import "./about.scss";

const About = () => {
  const [spinImg, setSpinImg] = useState(false);

  return (
    <>
      <section className="about section" id="about">
        <div className="about__bg"></div>
        <div className="about__main">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>

          <div className="about__container container grid">
            <div
              className={spinImg ? "about__img spin" : "about__img"}
              onClick={() => {
                setSpinImg(!spinImg);
              }}
            >
              <picture>
                <source
                  srcSet="./src/img/portfolio-img-2-transparent.webp"
                  type="image/web"
                />
                <img
                  src={require("../../assets/portfolio-img-2-transparent.png")}
                  alt=""
                />
              </picture>
              {/*  <img src="./src/img/portfolio-img-2-transparent.png" alt="" /> */}
            </div>
            <div className="about__data">
              <p className="about__description">
                I'm a Front-End developer, amateur designer and illustrator :)
                <br />
                At the beginning of 2022, I decided to start learning JavaScript
                after which I also began to study HTML and CSS. My progress is
                my projects. So, check it out.
              </p>
            </div>

            <div className="about__info">
              <div>
                <span className="about__info-title">1+</span>
                <span className="about__info-name">
                  Year <br />
                  experience
                </span>
              </div>
            </div>
            <div className="about__buttons">
              <a
                download=""
                href={require("../../assets/Oleksandr_Hyrich_CV.pdf")}
                className="button button--flex"
              >
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
