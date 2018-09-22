import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Login } from './app/login';
class App extends React.Component {
  render() {
    return <Login />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
