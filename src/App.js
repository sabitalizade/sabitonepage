import React, {   useEffect, useState } from 'react';
import { Route,useLocation } from "react-router-dom";
import './App.scss';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Context from './components/Context';
import SideBar from './components/SideBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Cv from './components/Cv';

const App = ()=> {
     const [href, sethref] = useState(false)
     const {pathname} = useLocation(); 
 
useEffect(() => {
     pathname==="/cv"?sethref(true):sethref(false)
}, [pathname])


  return (
       <>
    <div className="App">
    <div className={href?"Header HeaderCv":"Header "}>
        <Logo href={href}/>
         <Menu/>
    </div>
   <div className="MainBar">
        <SideBar href={href}/>     
         <Route path="/" exact component={Context}/>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/cv" component={Cv}/>

    </div>
    </div>
    </>
  );
}

export default App;
