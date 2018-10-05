import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

const PADDING = '150px'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: PADDING,
    paddingRight: PADDING,
    // border: '1px solid blue',
  }
}

class PichuContent extends React.Component<any> {
  render() {
    const { classes, classProps } = this.props
    return (
      <div className={classnames(classes.container, classProps)}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styles)(PichuContent)