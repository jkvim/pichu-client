import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import classnames from 'classnames'

const styles = (theme: Theme) => createStyles({
  icon: {
    fontSize: '18px',
    verticalAlign: 'text-bottom',
  }
})

class TopicEditorIcon extends React.Component<any, any> {
  render() {
    const { classes, children } = this.props
    return (
      <span className={classnames(classes, `material-icons ${children}`)} />
    )
  }
}

export default withStyles(styles)(TopicEditorIcon)