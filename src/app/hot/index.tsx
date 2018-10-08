import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import SessionList from 'components/session-list'

const styles = (theme: Theme) => createStyles({

})

class Hot extends React.Component<any, any> {
  render() {
    return (
      <div>
        <SessionList />
      </div>
    )
  }
}

export default withStyles(styles)(Hot)