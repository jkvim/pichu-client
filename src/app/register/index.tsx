import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import InputAdornment from '@material-ui/core/InputAdornment'
import NavBar from 'components/navbar'
import AccountIcon from '@material-ui/icons/AccountBoxOutlined'
import LockIcon from '@material-ui/icons/LockOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'

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

class Register extends React.Component<any, any> {
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
              required
              id="username"
              label="用户名"
              value={this.state.name}
              onChange={this.handleChange('name')}
              className={classes.input}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              required
              id="password"
              label="密码"
              value={this.state.password}
              onChange={this.handleChange('password')}
              className={classes.input}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              id="email"
              label="邮箱"
              value={this.state.password}
              onChange={this.handleChange('password')}
              className={classes.input}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button color="primary" variant="contained" className={classes.button}>注册</Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Register)