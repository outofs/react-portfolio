import React, { useState } from "react";
import "./about.scss";

const About = () => {
  const [spinImg, setSpinImg] = useState(false);

  return (
    <>
      <section className="about section" id="about">
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
                I am a responsible, detail-oriented Fullstack developer, amateur designer and illustrator with a passion for continuous improvement :)
              </p>
              <p className="about__description">
                Proficient in JavaScript, TypeScript, HTML, CSS, React, and Node.js, I hold a Master's Degree in
                Cybersecurity. During my Computer Science studies, I gained foundational knowledge in MongoDB, C,
                and C++.
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
