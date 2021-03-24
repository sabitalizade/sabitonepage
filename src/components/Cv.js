import React from "react";
import "../css/Portfolio.css";
import "../css/Cv.css";

function Cv() {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
