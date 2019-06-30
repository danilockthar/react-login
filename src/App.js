import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Registrar from './Registrar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/registrar' exact component={Registrar}/>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
