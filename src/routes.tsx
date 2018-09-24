import * as React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Login from "./app/login";
import NotFound from "./app/not-found";
import Home from './app/home';
import User from './app/user'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <User path="/users/:id" />
        <NotFound default />
      </Router>
    );
  }
}
