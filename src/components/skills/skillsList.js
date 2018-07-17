import React, { Component } from "react";
import SkillsItems from "./skillsItems";

class Skills extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-3">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <SkillsItems />
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
