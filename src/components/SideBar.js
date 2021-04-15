import React from 'react';
import '../css/SideBar.css';

const SideBar = ()=> {
  return (
    <div className="SideBar">
      
      <ul className="ul">
            <li>
            <a href="https://github.com/sabitalizade/"><i className="fab fa-github"></i></a>
            </li>
            <li>
            <a href="https://instagram.com/sabitalizade/"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
            <a href="https://twitter.com/sabitalizada"><i className="fab fa-twitter"></i></a>
            </li>
        </ul>
    </div>
  );
}

export default SideBar;
