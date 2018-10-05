import * as React from 'react'
import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'
import HomeTab from 'components/home-tab'
import SessionList from 'components/session-list'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  content: {
    marginTop: 20,
  },
})

class Home extends React.Component<any> {
  render() {
    const { classes, children } = this.props
    return (
      <div>
        <NavBar />
        <PichuContent classProps={classes.content}>
          <HomeTab />
          {children}
        </PichuContent>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
