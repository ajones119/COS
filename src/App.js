//import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";

import Home from './views/Home';
import PCs from './views/playerCharacters';
import Places from './views/Places';
import Kandis from './views/Kandis';
import Florence from './views/Florence';
import Garyx from './views/Garyx';
import Sanja from './views/Sanja';
import Ismark from './views/Ismark';



function App() {
  return (
   <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/COS' exact component={Home}/>
        <Route path='/COS/playerCharacters' exact component={PCs}/>
        <Route path='/COS/playerCharacters/Kandis' component={Kandis}/>
        <Route path='/COS/playerCharacters/Florence' component={Florence}/>
        <Route path='/COS/playerCharacters/Garyx' component={Garyx}/>
        <Route path='/COS/playerCharacters/Sanja' component={Sanja}/>
        <Route path='/COS/playerCharacters/Ismark' component={Ismark}/>


        <Route path='/COS/places' component={Places}/>

      </Switch>
    </Router>
   </>
  );
}

export default App;
