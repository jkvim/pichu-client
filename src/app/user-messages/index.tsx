import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({

})

class UserMessages extends React.Component<any, any> {
  render() {
    return (
      <div>User Messages</div>
    )
  }
}

export default withStyles(styles)(UserMessages)