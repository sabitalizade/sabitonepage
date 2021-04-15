import React from 'react'
import html5 from "../icons/skills-icon/html5.svg";
import css3 from "../icons/skills-icon/css-5.svg";
import js from "../icons/skills-icon/js.svg";
import nodejs from "../icons/skills-icon/nodejs.svg";
import react from "../icons/skills-icon/react-2.svg";
import redux from "../icons/skills-icon/redux.svg";
import vue from "../icons/skills-icon/vue-js-1.svg";
import sass from "../icons/skills-icon/sass-1.svg";
import express from "../icons/skills-icon/ex.svg";

const Skills = () => {
    return (
        <div>
            <div className="skills">
        <div className="header-info">I know following tech</div>
        <ul>
          <li>
            <img className="TechImg" src={html5} alt="" />
          </li>
          <li>
            <img className="TechImg" src={css3} alt="" />
          </li>
          <li>
            <img className="TechImg" src={js} alt="" />
          </li>
          <li>
            <img className="TechImg" src={nodejs} alt="" />
          </li>
          <li>
            <img className="TechImg" src={react} alt="" />
          </li>
          <li>
            <img className="TechImg" src={redux} alt="" />
          </li>
          <li>
            <img className="TechImg" src={vue} alt="" />
          </li>
          <li>
            <img className="TechImg" src={sass} alt="" />
          </li>
          <li>
            <img className="TechImg" src={express} alt="" />
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Skills
