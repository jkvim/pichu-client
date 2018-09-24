import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({

})

class UserSummary extends React.Component<any, any> {
  render() {
    return (
      <div>User Summary</div>
    )
  }
}

export default withStyles(styles)(UserSummary)