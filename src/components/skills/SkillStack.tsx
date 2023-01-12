import React, { useState } from "react";
import { SkillsProps } from "../../interfaces";
import Skill from "./Skill";
import "./skills.scss";

const SkillStack = (props: SkillsProps) => {
  const [skillsClose, setSkillClose] = useState(true);

  return (
    <div
      className={
        skillsClose
          ? "skills__content skills__close"
          : "skills__content skills__open"
      }
    >
      <div
        className="skills__header"
        onClick={() => {
          setSkillClose(!skillsClose);
        }}
      >
        <i className={`uil ${props.icon} skills__icon`}></i>
        <div>
          <h1 className="skills__titles">{props.title}</h1>
        </div>

        <i className="uil uil-angle-down skills__arrow"></i>
      </div>
      <div className="skills__list grid">
        {props.skills?.map((skill, i) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillStack;
