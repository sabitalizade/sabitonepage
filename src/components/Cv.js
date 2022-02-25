import React, { useRef } from "react";
import coffee from "../icons/coffee-24px.svg";
import laptop from "../icons/laptop-24px.svg";
import list_alt from "../icons/list_alt-24px.svg";
import tungsten from "../icons/tungsten-24px.svg";
import "../css/Portfolio.css";
import "../css/Cv.css";
import ReactToPrint from "react-to-print";
import { FcPrint } from "react-icons/fc";
import { data } from "../data";

const Cv = () => {
  const cv = useRef();

  return (
    <div className="maincv">
      
      <div className="container">
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (
              <div className="print">
                <FcPrint />
              </div>
            );
          }}
          content={() => cv.current}
        />
        <div className="cv" ref={cv}>
          <div className="left">
            <div className="picture">
              <img src="./img/sa1.jpg" alt="profile" />
            </div>
            <div className="header-title">Expertise & Skills</div>
            <div className="skills-list">
              <ul>
                {data.skills.main.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="header-title">Extra knowledge </div>
            <div className="skills-list">
              <ul>
                {data.skills.extra.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="header-title">Contact Details</div>
            <div className="skills-list">
              <ul>
                {data.contact.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="name">Sabit Alizade</div>
            <div className="prof">Frontend Devoloper</div>
            <div className="icons">
              <img src={laptop} alt="" />
              <img src={coffee} alt="" />
              <img src={list_alt} alt="" />
              <img src={tungsten} alt="" />
            </div>
            <div className="title">INTRODUCTION</div>
            <div className="text">
              <p>
                I am an experienced Frontend developer who is self-motivated and
                open to learning.
              </p>
              <p>
                My strong suits are conceptual thinking and analytical thinking.
              </p>
            </div>
            <div className="title">CAREER SUMMARY</div>
            {data.jobs.map((item) => (
              <div className="text job" key={item.id}>
                <p className="job-title">{item.title}</p>
                <p className="time">{item.time}</p>
                <ul>
                  {item.descritions.map((descrition) => (
                    <li key={descrition.id}>{descrition.name}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="title ">ACADEMIC HISTORY</div>
            <div className="text">
              <p className="job-title">BAKU STATE UNIVERSITY</p>
              <p className="time">Master of Economy </p>
              <ul>
                <li>- September 2017 - May 2019</li>
                <li>- GPA 74.7</li>
              </ul>
            </div>

            <div className="text">
              <p className="job-title">NAKHCHVAN STATE UNIVERSITY</p>
              <p className="time">Bachelor of Economy </p>
              <ul>
                <li>- September 2013 - May 2017</li>
                <li>- GPA 87.5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
