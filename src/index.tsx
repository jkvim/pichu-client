import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello } from './components/Hello';
class App extends React.Component {
  render() {
    return <Hello compiler="ts-loader" framework="react" />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
