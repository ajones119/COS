//import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
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



function App() {
  return (
   <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/COS' exact component={Home}/>
        <Route path='/COS/playerCharacters' exact component={PCs}/>
        <Route path='/COS/playerCharacters/Kandis' component={Kandis}/>
        <Route path='/COS/playerCharacters/Florence' component={Florence}/>
        <Route path='/COS/playerCharacters/Garyx' component={Garyx}/>
        <Route path='/COS/playerCharacters/Sanja' component={Sanja}/>


        <Route path='/COS/places' component={Places}/>

      </Switch>
    </Router>
   </>
  );
}

export default App;
