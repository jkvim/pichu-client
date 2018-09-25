import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import upperCase from 'lodash/upperCase'
import PichuContent from 'components/pichu-content'

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  avatar: {
    margin: 10,
    color: '#fff',
    fontSize: 24,
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  }
})

class TopicArticle extends React.Component<any, any> {
  render() {
    const { content, author, classes, createDate } = this.props
    return (
      <div className={classes.root}>
        <Avatar className={classes.avatar}>{upperCase(author.username[0])}</Avatar>
        <div>
          <div className={classes.contentHeader}>
            <Typography component="span">{author.username}</Typography>
            <Typography component="span">{createDate}</Typography>
          </div>
          <div>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TopicArticle)