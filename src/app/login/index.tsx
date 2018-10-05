import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import NavBar from 'components/navbar'

const styles = (theme: Theme) => createStyles({
  formWrapper: {
    width: 400,
    height: 300,
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 200,
    padding: 20,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: 40,
    width: 300,
    height: 40,
  },
  input: {
    marginTop: 10,
    width: 300,
  }
})

class Login extends React.Component<any> {
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
    const { classes } = this.props
    return (
      <div>
        <NavBar />
        <Paper className={classes.formWrapper}>
          <form className={classes.form}>
            <TextField
              id="username"
              label="用户名"
              value={this.state.name}
              onChange={this.handleChange('name')}
              className={classes.input}
            />
            <TextField
              id="password"
              label="密码"
              value={this.state.password}
              onChange={this.handleChange('password')}
              className={classes.input}
            />
            <Button color="primary" variant="contained" className={classes.button}>Login</Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Login)