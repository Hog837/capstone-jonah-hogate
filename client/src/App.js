import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Posts from "./components/post/Post";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Upload from "./components/upload/Upload";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/posts" exact component={Posts} />
          <Route path="/" exact component={Home} />
          <Route path="/posts/map" exact component={Map} />
          <Route path="/upload" exact component={Upload} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;