import React from "react";
import "./skills.scss";
import SkillStack from "./SkillStack";
import { skills } from "../../info";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {/* <!-- Skills 1 --> */}
        <SkillStack
          title="Front-End developer"
          icon="uil-brackets-curly"
          skills={skills.frontend}
        />

        {/* <!-- Skills 2 -->

        <SkillStack
          title="Back-End developer"
          icon="uil-server-network"
          skills={skills.backend}
        />
        */}

        {/* <!-- Skills 3 --> */}
        <SkillStack
          title="Designer"
          icon="uil-swatchbook"
          skills={skills.design}
        />

        {/* <!-- Skills 4 --> */}
        <SkillStack title="Other" icon="uil-life-ring" skills={skills.other} />
      </div>
    </section>
  );
};

export default Skills;
