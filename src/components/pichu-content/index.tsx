import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'

const PADDING = '150px'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: PADDING,
    paddingRight: PADDING,
    border: '1px solid blue',
  }
}

class PichuContent extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styles)(PichuContent)