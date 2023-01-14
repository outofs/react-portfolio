import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Project, ProjectsProps } from "../../interfaces";
import "./portfolio.scss";
import ProjectCard from "./ProjectCard";

const ProjectList = (props: ProjectsProps) => {
  return (
    <div className="project-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {props.projects?.map((project: Project, i) => (
          <SwiperSlide key={i}>
            <ProjectCard project={project} />
            {/* <img src={require(`../../assets/${project.img}`)} alt="" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectList;
