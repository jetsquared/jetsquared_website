import React, { Component } from "react";
import { default as skillsItems } from "./skills";

class SkillsItems extends Component {
  render() {
    var categories = Array.from(new Set(skillsItems.map(a => a.category)));
    var itemsByCtgs = categories.map(x => {
      return { [x]: skillsItems.filter(si => si.category === x) };
    });

    return itemsByCtgs.map(item => {
      var ctg = Object.keys(item)[0];
      return (
        <span key={ctg}>
          <h5>{ctg}</h5>
          {item[ctg].map(skill => {
            return (
              <li key={skill.id} className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href={skill.aLink}>
                  <i className={skill.iconName} />
                </a>
              </li>
            );
          })}
        </span>
      );
    });
  }
}

export default SkillsItems;
