import React from "react";
import { ProjectProps } from "../../interfaces";
import "./portfolio.scss";

const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="portfolio__content">
      <img
        className="portfolio__img"
        src={require(`../../assets/${props.project.img}`)}
        alt=""
      />
      <div className="portfolio__data">
        <h3 className="portfolio__title">{props.project.title}</h3>
        <p className="portfolio__description">
          {props.project.description}
          <br />
        </p>
        <div className="portfolio__technologies">
          <h4>Technologies:</h4>
          <div className="technology__items">
            {props.project.technologies?.map((technology, i) => (
              <span className="technology__item" key={i}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="btns">
        <a
          href={props.project.demo}
          className="button button--flex button--small portfolio__button"
          target="_blank"
        >
          Demo
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
        <a
          href={props.project.git}
          className="button button--flex button--small portfolio__button"
          target="_blank"
        >
          Git
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
