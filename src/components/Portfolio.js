import React from "react";
import "../css/Portfolio.css";

function Portfolio() {
  return (
    <div className="main">
      <div className="container">
        <ul className="list">
          <li>
            <div className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://autonuh.vercel.app/"
                class="image"
              >
                <img loading="lazy" src="img/19.png" alt="BrainHouse"></img>
              </a>
              <span className="title">AutoNuh</span>
              <div className="actions">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://autonuh.vercel.app/"
                >
                  View
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://brainhouseanticafe.herokuapp.com/"
                class="image"
              >
                <img loading="lazy" src="img/20.jpg" alt="BrainHouse"></img>
              </a>
              <span className="title">Brain House</span>
              <div className="actions">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://brainhouseanticafe.herokuapp.com/"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://alizade.herokuapp.com/"
                class="image"
              >
                <img loading="lazy" src="img/21.jpg" alt="Alizade"></img>
              </a>
              <span className="title">Portfolio with React</span>

              <div className="actions">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://alizade.herokuapp.com/"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sabitalizade.herokuapp.com/"
                class="image"
              >
                <img loading="lazy" src="img/22.jpg" alt="SabitAlizade"></img>
              </a>
              <span className="title">Blog with Php</span>

              <div className="actions">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sabitalizade.herokuapp.com/"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://asyatodo.netlify.app/"
                class="image"
              >
                <img loading="lazy" src="img/23.png" alt="Todo"></img>
              </a>
              <span className="title">Todo with React</span>

              <div className="actions">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://asyatodo.netlify.app/"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://asya.netlify.app/"
                class="image"
              >
                <img loading="lazy" src="img/24.png" alt="Todo"></img>
              </a>
              <span className="title">Chat with React</span>

              <div className="actions">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://asya.netlify.app/"
                >
                  View{" "}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
