import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import CSSBaseline from '@material-ui/core/CssBaseline'
import Routes from './routes'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

class App extends React.Component {
    public render() {
    return (
      <ApolloProvider client={client}>
        <CSSBaseline />
        <Routes />
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
