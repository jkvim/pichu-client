import * as React from "react";
import { Router } from "@reach/router";
import Login from "./app/login";
import NotFound from "./app/not-found";
import Home from './app/home';
import User from './app/user'
import UserSummary from './app/user-summary'
import UserActivity from './app/user-activity'
import UserMessages from './app/user-messages'
import UserSettings from './app/user-settings'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <User path="/users/:id">
          <UserSummary path="summary" />
          <UserActivity path="activity" />
          <UserMessages path="messages" />
          <UserSettings path="settings" />
        </User>
        <NotFound default />
      </Router>
    );
  }
}
