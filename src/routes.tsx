import * as React from 'react'
import { Router } from '@reach/router'
import Login from './app/login'
import Register from './app/register'
import NotFound from './app/not-found'
import Home from './app/home'
import Latest from './app/latest'
import Hot from './app/hot'
import Frontend from './app/frontend'
import Backend from './app/backend'
import Career from './app/career'
import ArtificialIntelligence from './app/artificial-intelligence'
import IoT  from './app/iot'
import User from './app/user'
import UserSummary from './app/user-summary'
import UserActivity from './app/user-activity'
import UserMessages from './app/user-messages'
import UserSettings from './app/user-settings'
import Topic from './app/topic'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/">
          <Latest path="/latest" />
          <Hot path="/hot" />
          <Frontend path="/frontend" />
          <Backend path="backend" />
          <Career path="career" />
          <ArtificialIntelligence path="/artificial-intelligence" />
          <IoT path="/iot" />
        </Home>
        <Login path="/login" />
        <Register path="/register" />
        <User path="/users/:id">
          <UserSummary path="summary" />
          <UserActivity path="activity" />
          <UserMessages path="messages" />
          <UserSettings path="settings" />
        </User>
        <Topic path="/topics/:id" />
        <NotFound default />
      </Router>
    )
  }
}
