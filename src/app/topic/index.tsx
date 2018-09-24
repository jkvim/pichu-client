import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'

const styles = (theme: Theme) => createStyles({

})

class Topic extends React.Component<any, any> {
  render() {
    const { id } = this.props
    return (
      <div>
        <NavBar />
        <PichuContent>
          topic {id}
        </PichuContent>
      </div>
    )
  }
}

export default withStyles(styles)(Topic)