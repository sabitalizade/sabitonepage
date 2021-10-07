import React from "react";
import "../css/Portfolio.css";
import { data } from "../data";

const Portfolio = ()=> {
  return (
    <div className="main">
      <div className="container hidden">
        <ul className="list">

           {data.portfolios.map(portfolio=>(
              <li>
              <div className="item">
                <a
                  href={portfolio.href}
                  className="image"
                >
                  <img loading="lazy" src={portfolio.imageName} alt="Todo"></img>
                </a>
                <span className="title">{portfolio.title}</span>
  
                <div className="actions">
                  <a
                   
                   href={portfolio.href}

                  >
                    View 
                  </a>
                </div>
              </div>
            </li>
           ))}
         
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
