import './App.scss';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/nav/Nav';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
