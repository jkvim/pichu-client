import * as React from 'react'
import * as PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import HOME_TABS from 'constants/tabs'
import NavTabs from '../nav-tabs';

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
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
})

class HomeTab extends React.Component<any, any> {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    value: 0
  }

  handleChange = (_: any, value: number) => {
    this.setState({ value });
  };

  routes = [
    { label: HOME_TABS.LATEST, path: 'latest' },
    { label: HOME_TABS.HOT, path: 'hot' },
    { label: HOME_TABS.ARTIFICIAL_INTELLIGENCE, path: 'artificial-intelligence' },
    { label: HOME_TABS.FRONTEND, path: 'frontend' },
    { label: HOME_TABS.BACKEND, path: 'backend' },
    { label: HOME_TABS.CAREER, path: 'career' },
    { label: HOME_TABS.IOT, path: 'iot' },
  ]

  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.root}>
        <NavTabs routes={this.routes} />
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(HomeTab)
