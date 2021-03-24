import React from 'react';
import {  BrowserRouter as Router,   Route} from "react-router-dom";
import './App.scss';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Context from './components/Context';
import SideBar from './components/SideBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Cv from './components/Cv';

function App() {
  return (
   <Router>     
    <div className="App">
    <div className="Header">
        <Logo/>
         <Menu/>
    </div>
   <div className="MainBar">
        <SideBar/>     
         <Route path="/" exact component={Context}/>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/cv" component={Cv}/>

    </div>
    </div>
     </Router>
  );
}

export default App;
