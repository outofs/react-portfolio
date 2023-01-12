import React from "react";
import { SkillProps } from "../../interfaces";
import "./skills.scss";

const Skill = (props: SkillProps) => {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{props.skill}</h3>
        <i className="uil uil-check-circle skill__icon"></i>
      </div>
    </div>
  );
};

export default Skill;
