import React from 'react';
import '../css/Menu.css';
import {    Link  } from "react-router-dom";

const Menu = ()=> {
  return (
    <div className="Menu">
        <ul>
            <li>
                <Link className="a" to='/'>Home</Link>
            </li>
            <li>
                <Link className="a" to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link className="a" to='/cv'>Cv</Link>
            </li>
            <li>
                <Link className="a"to='/contact'>Contact</Link>
            </li>
        </ul>
     
    </div>
  );
}

export default Menu;
