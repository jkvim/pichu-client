import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Routes from './routes'

class App extends React.Component {
  render() {
    return <Routes />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
