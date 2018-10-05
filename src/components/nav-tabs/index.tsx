import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { Link } from '@reach/router'
import Button from '@material-ui/core/Button'
import PichuContent from 'components/pichu-content'
import classnames from 'classnames'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
      backgroundColor: '#1890ff',
    },
    tab: {
      backgroundColor: 'white',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing.unit * 4,
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$tabSelected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    tabSelected: {},
    typography: {
      padding: theme.spacing.unit * 3,
    },
    button: {
      margin: 0,
      boxShadow: 'none',
      borderRadius: 0,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
        color: '#40a9ff',
        opacity: 1,
      },
    },
    link: {
      backgroundColor: 'white',
      textDecoration: 'none',
      margin: 0,
    },
  })

class NavTabs extends React.Component<any, any> {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
  }

  state = {
    value: 0,
  }

  handleChange = (_: any, value: number) => {
    this.setState({ value })
  }

  renderTab = (props: any, path: string) => {
    const { classes } = this.props
    return (
      <Link to={path} className={classnames(props.className, classes.link)}>
        <Button
          disableRipple
          classes={{ contained: classes.button }}
          onClick={props.onClick}
          variant="contained"
          children={props.children}
          color="inherit"
        />
      </Link>
    )
  }

  render() {
    const { classes, routes } = this.props
    const { value } = this.state

    return (
      <Tabs
        value={value}
        onChange={this.handleChange}
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
      >
        {routes.map(({ label, path }: { label: string; path: string }) => (
          <Tab
            disableRipple
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            label={label}
            component={props => this.renderTab(props, path)}
          />
        ))}
      </Tabs>
    )
  }
}

export default withStyles(styles)(NavTabs)
