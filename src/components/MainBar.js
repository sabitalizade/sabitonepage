import React from 'react';
import '../css/MainBar.css';
import SideBar from "./SideBar"
import Context from "./Context"

function MainBar() {
  return (
    <div className="MainBar">
        <SideBar/>
        <Context/>
    </div>
  );
}

export default MainBar;
