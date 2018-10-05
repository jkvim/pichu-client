import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({

})

class Hot extends React.Component<any, any> {
  render() {
    return (
      <div>hot</div>
    )
  }
}

export default withStyles(styles)(Hot)