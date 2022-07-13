import React, { useEffect, useState } from "react";
import { Route, useLocation,Routes } from "react-router-dom";
import "./App.scss";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Context from "./components/Context";
import SideBar from "./components/SideBar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Cv from "./components/Cv";

const App = () => {
  const [href, sethref] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/cv" ? sethref(true) : sethref(false);
  }, [pathname]);

  return (
    <>
      <div className="App">
        <div className={href ? "Header HeaderCv" : "Header "}>
          <Logo href={href} />
          <Menu />
        </div>
        <div className="MainBar">
          <SideBar href={href} />
          <Routes>
            <Route path="/" element={<Context/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cv" element={<Cv/>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
