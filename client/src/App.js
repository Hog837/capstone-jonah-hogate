import './App.scss';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import Posts from './components/post/Post';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/posts" exact component={Posts} />
        </Switch>
      </BrowserRouter>
    );
  }
  
}
export default App;