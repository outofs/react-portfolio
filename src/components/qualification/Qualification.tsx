import React, { useState } from "react";
import "./qualification.scss";

const Qualification = () => {
  const [qualificationTab, setQualificationTab] = useState("education");

  return (
    <section className="qualification section">
      <div className="qualification__bg"></div>
      <div className="qualification__main">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                qualificationTab === "education" ? "qualification__active" : ""
              } `}
              data-target="#education"
              onClick={() => {
                setQualificationTab("education");
              }}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={`qualification__button button--flex ${
                qualificationTab === "extracurricular"
                  ? "qualification__active"
                  : ""
              } `}
              data-target="#extracurricular"
              onClick={() => {
                setQualificationTab("extracurricular");
              }}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Extracurricular
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!-- Qualification content 1 --> */}
            <div
              className={`qualification__content ${
                qualificationTab === "education" ? "qualification__active" : ""
              } `}
              data-content
              id="education"
            >
              {/* <!-- Qualification 1 --> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Science</h3>
                  <span className="qualification__subtitle">
                    Lutsk - Volyn national university
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017-2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!-- Qualification 2 --> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Cybersecurity</h3>
                  <span className="qualification__subtitle">
                    Kyiv - National aviation university
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021-2022
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Qualification content 2 --> */}
            <div
              className={`qualification__content ${
                qualificationTab === "extracurricular"
                  ? "qualification__active"
                  : ""
              } `}
              data-content
              id="work"
            >
              {/* <!-- Qualification 1 --> */}
              <div className="qualification__data">
                <div>
                  <a
                    href="https://www.udemy.com/certificate/UC-4314b613-febf-4e9f-a716-9d153b117cb1/"
                    target="_blank"
                  >
                    <h3 className="qualification__title qualification__link">
                      The Complete JavaScript Course 2022: From Zero to Expert,
                      Udemy
                    </h3>
                  </a>

                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!-- Qualification 2 --> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <a
                    href="https://courses.prometheus.org.ua:18090/downloads/5828fad4f3af4330bfcd07ffc602b762/Certificate.pdf"
                    target="_blank"
                  >
                    <h3 className="qualification__title qualification__link">
                      Basics of software testing course, Prometheus
                    </h3>
                  </a>

                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021
                  </div>
                </div>
              </div>

              {/* <!-- Qualification 3 --> */}
              <div className="qualification__data">
                <div>
                  <a
                    href="https://courses.prometheus.org.ua:18090/downloads/2d888fa11fa24049957ceef319c27678/Certificate.pdf"
                    target="_blank"
                  >
                    <h3 className="qualification__title qualification__link">
                      Media literacy: practical skills course, Prometheus
                    </h3>
                  </a>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!-- Qualification 4 --> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>

                <div>
                  <a
                    href="https://courses.prometheus.org.ua:18090/downloads/552e057e8ac44236a135cf2d67d7ed9a/Certificate.pdf"
                    target="_blank"
                  >
                    <h3 className="qualification__title qualification__link">
                      Basics of information security course, Prometheus
                    </h3>
                  </a>

                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
