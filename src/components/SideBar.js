import React from 'react';
import '../css/SideBar.css';

function SideBar() {
  return (
    <div className="SideBar">
      
      <ul className="ul">
            <li>
            <a href="https://facebook.com/sabitalizada/"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
            <a href="https://instagram.com/sabitalizade/"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
            <a href="https://github.com/sabitalizade/"><i class="fab fa-github"></i></a>

            </li>
        </ul>
    </div>
  );
}

export default SideBar;
