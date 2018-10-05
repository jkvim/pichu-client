import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({

})

class Frontend extends React.Component<any, any> {
  render() {
    return (
      <div>frontend</div>
    )
  }
}

export default withStyles(styles)(Frontend)