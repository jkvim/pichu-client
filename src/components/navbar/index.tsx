import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'
import { Link } from '@reach/router'
import Categorys from 'constants/categorys'
import values from 'lodash/values'

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
  },
}

export interface NavBarState {
  auth: boolean
  anchorEl: any
  isDrawerOpened: boolean
}

class NavBar extends React.Component<any, any> {
  state: NavBarState = {
    auth: true,
    anchorEl: null,
    isDrawerOpened: false,
  }

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleOpenDrawer = () => {
    this.setState({
      isDrawerOpened: true,
    })
  }

  handleCloseDrawer = () => {
    this.setState({
      isDrawerOpened: false,
    })
  }

  categoryList = (
    <List>
      {values(Categorys).map(category => (
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={category} />
        </ListItem>
      ))}
    </List>
  )

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <IconButton
              onClick={this.handleOpenDrawer}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow}>
              <Link className={classes.logo} to="/">
                <Typography variant="title" color="inherit">
                  Pichu
                </Typography>
              </Link>
            </div>
            <Button color="inherit">
              <Link to="/login">登录</Link>
            </Button>
            <Button color="inherit">
              <Link to="/register">注册</Link>
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
          <Drawer
            anchor="left"
            open={this.state.isDrawerOpened}
            onClick={this.handleCloseDrawer}
            onKeyDown={this.handleCloseDrawer}
          >
            {this.categoryList}
          </Drawer>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)
