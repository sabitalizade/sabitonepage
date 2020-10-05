import React from 'react';
import '../css/Header.css';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <div className="Header">
        <Logo/>
         <Menu/>
    </div>
  );
}

export default Header;
