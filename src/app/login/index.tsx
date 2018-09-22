import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class Login extends React.Component {
  state = {
    name: '',
    password: '',
  }

  handleChange = (name: string) => (event: any): void => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <TextField
          id="username"
          label="用户名"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <TextField
          id="password"
          label="用户名"
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <Button color="default">Login</Button>
      </form>
    )
  }
}
