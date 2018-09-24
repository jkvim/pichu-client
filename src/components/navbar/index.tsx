import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from '@reach/router'

const styles = {
  root: {
    flexGrow: 1,
  },
  navbar: {
    paddingLeft: '150px',
    paddingRight: '150px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    textDecoration: 'none',
    color: 'white',
  }
}

export interface NavBarState {
  auth: Boolean;
  anchorEl: any;
}

class NavBar extends React.Component<any, any> {
  state: NavBarState = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow}>
              <Link className={classes.logo} to="/">
                <Typography
                  variant="title"
                  color="inherit"
                >
                  Pichu
                </Typography>
              </Link>
            </div>
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
            <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <Link to="/users/123">
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  </Link>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)
