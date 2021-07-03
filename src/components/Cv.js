import React from "react";
import coffee from "../icons/coffee-24px.svg";
import laptop from "../icons/laptop-24px.svg";
import list_alt from "../icons/list_alt-24px.svg";
import tungsten from "../icons/tungsten-24px.svg";
import "../css/Portfolio.css";
import "../css/Cv.css";

const Cv = ()=> {
  return (
    <div className="main">
      <div className="container">
        <div className="cv">
          <div className="left">
              <div className="picture">
                    <img src="./img/profile.jpg" alt="profile"/>
              </div>
              <div className="header-title">
                Expertise & Skills
              </div>
              <div className="skills-list">
                <ul>
                  <li>
                  HTML
                  </li>
                  <li>
                  CSS
                  </li>
                  <li>
                  SASS,SCSS
                  </li>
                  <li>
                  JavaScript
                  </li>
                  <li>
                  React Js, Redux
                  </li>
                  <li>
                  VueJs
                  </li>
                  <li>
                  Node Js,Express Js
                  </li>
                  <li>
                  Mongo DB
                  </li>
                  <li>
                  File Transfer Protocol (FTP)
                  </li>
                  <li>
                  Git & GitHub & GitLab
                  </li>
                  <li>
                  Bootstrap
                  </li>
                  </ul>
                    
                  </div>
                   <div className="header-title">I have information </div> 
                  <div className="skills-list">
                  <ul>
                   <li>
                  Python,Flask
                   </li>
                   <li>
                  Oracle Sql
                   </li>
                   <li>
                  Php
                   </li>
                   <li>
                  MySql
                   </li>                  
                </ul>
              </div>
              <div className="header-title">
              Contact Details
              </div>
                  <div className="skills-list">
                  <ul>
                <li>
              Cell: +994 70 671 74 74
                </li>
                <li>
              Home: +994 60 271 74 71
                </li>
                <li>
              Email: sabitalizade@gmail.com
                </li>
                <li>
                  <address>
              Address: Nakhchvan, Azerbaijan
                  </address>
                </li>
                <li>
              GitHub: sabitalizade
                </li>
              </ul>
                  </div>
              
          </div>
          <div className="right">
              <div className="name">
                  Sabit Alizade
              </div>
              <div className="prof">
                Frontend Devoloper
              </div>
              <div className="icons">
                <img src={laptop} alt="" />
                <img src={coffee} alt="" />
                <img src={list_alt} alt="" />
                <img src={tungsten} alt="" />
              </div>
              <div className="title">
               INTRODUCTION
              </div>
              <div className="text">
                <p>
              I am an experienced Frontend developer who is self-motivated and
              open to learning. 

                </p>
                <p>
                My strong suits are conceptual thinking and analytical thinking.
                </p>
              </div>
              <div className="title">
              CAREER SUMMARY
              </div>
              <div className="text" style={{marginBottom:"3rem"}}>
                <p className="job-title">Frontend Devoloper</p>
                <p className="time">At-Geoetch | June 2021 - present </p>
                <ul>
                  <li>
                  - I am devoloped internal sistem using Vanila JavaScript, JQuery ReactJs .
                  </li>                 
                 
                </ul>
              </div>
              <div className="text" style={{marginBottom:"3rem"}}>
                <p className="job-title">Frontend Devoloper</p>
                <p className="time">MealperLTE | April 2021 - present </p>
                <ul>
                  <li>
                  - Create Dashboard using React Js.
                  </li>                 
                 
                </ul>
              </div>
              <div className="text">
                <p className="job-title">Frontend Devoloper</p>
                <p className="time">Frelancer | May 2020 - present </p>
                <ul>
                  <li>
                  - Creates Statics and dinamics website for client.
                  </li>
                  <li>
                  - Translates static websites into responsive ones.
                  </li>
                  
                </ul>
              </div>
           
              <div className="title m-t">
              ACADEMIC HISTORY
              </div>
              <div className="text">
                <p className="job-title">BAKU STATE UNIVERSITY</p>
                <p className="time">Master of Economy </p>
                <ul>
                  <li>
                  - September 2017 - May 2019
                  </li>
                  <li>
                  - GPA 74.7
                  </li>
                  
                </ul>
              </div>

              <div className="text m-t">
                <p className="job-title">NAKHCHVAN STATE UNIVERSITY</p>
                <p className="time">Bachelor of Economy </p>
                <ul>
                  <li>
                  - September 2013 - May 2017
                  </li>
                  <li>
                  - GPA 87.5
                  </li>
                  
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
