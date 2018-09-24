import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({

})

class UserActivity extends React.Component<any, any> {
  render() {
    return (
      <div>User Activity</div>
    )
  }
}

export default withStyles(styles)(UserActivity)