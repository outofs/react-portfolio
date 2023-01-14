import React from "react";
import "./portfolio.scss";

import { projects } from "../../info";
import ProjectList from "./ProjectList";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most resent projects</span>

      <div className="portfolio__container container swiper-container">
        <div className="portfolio__title-slider">
          <h2>My HTML, CSS and JS projects</h2>
          <a
            href="https://github.com/outofs?tab=repositories"
            className="button button--flex button--small portfolio__button"
            target="_blank"
          >
            See more on GitHub
          </a>
        </div>

        <ProjectList projects={projects.nativeJsProjects} />
      </div>

      <div className="portfolio__container container swiper-container">
        <div className="portfolio__title-slider">
          <h2>My React projects</h2>
          <a
            href="https://github.com/outofs?tab=repositories"
            className="button button--flex button--small portfolio__button"
            target="_blank"
          >
            See more on GitHub
          </a>
        </div>
        <ProjectList projects={projects.reactProjects} />
      </div>
    </section>
  );
};

export default Portfolio;
