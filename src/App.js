import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline"
import {Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header"
import Home from "./components"
import Portfolio from "./components/Portfolio";
import NavBar from './components/NavBar';


function App() {

  return (
    <>
    <CssBaseline />
    <NavBar />
    <Route path="/" exact component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    
    </>
  );
}

export default App;
