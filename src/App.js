//import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";

import Home from './views/Home';
import PCs from './views/playerCharacters';
import Places from './views/Places';
import Kandis from './views/Kandis';
import Florence from './views/Florence';


function App() {
  return (
   <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/playerCharacters' exact component={PCs}/>
        <Route path='/playerCharacters/Kandis' component={Kandis}/>
        <Route path='/playerCharacters/Florence' component={Florence}/>

        <Route path='/places' component={Places}/>

      </Switch>
    </Router>
   </>
  );
}

export default App;
