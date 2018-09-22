import * as React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Login } from "./app/login";
import NotFound from "./app/not-found";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Login path="/" />
        <NotFound default />
      </Router>
    );
  }
}
