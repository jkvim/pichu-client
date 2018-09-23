import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Routes from './routes'
import CSSBaseline from '@material-ui/core/CssBaseline'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CSSBaseline />
        <Routes />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
