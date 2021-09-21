import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Logo.css';

const Logo = ({href}) => {
  return (
    <Link to="/" className={href?"Logo LogoCv":"Logo"}>
         <img src="/logo/default-monochrome-white.svg" alt='sss'/>
    </Link>
  );
}

export default Logo;
