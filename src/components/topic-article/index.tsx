import * as React from 'react'
import upperCase from 'lodash/upperCase'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import LaunchIcon from '@material-ui/icons/Launch'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import ReplyIcon from '@material-ui/icons/Reply'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    borderBottom: '1px solid #e9e9e9', paddingBottom: 10,
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
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,
    alignItems: 'center',
  },
  reply: {
    color: '#555'
  },
  actionButton: {
    color: '#ccc',
    '&:hover': {
      color: '#000'
    }
  },
  likeButton: {
    '&:hover': {
      color: '#f45048',
      backgroundColor: '#fcdede'
    }
  }
})

class TopicSession extends React.Component<any, any> {
  render() {
    const { content, author, classes, createDate, renderFooter } = this.props
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
          <div className={classes.actions}>
            <Button className={classnames(classes.actionButton, classes.likeButton)}>
              <ThumbUpAltIcon />
            </Button>
            <Button className={classes.actionButton}>
              <LaunchIcon />
            </Button>
            <Button className={classes.actionButton}>
              <TurnedInIcon />
            </Button>
            <Button className={classnames(classes.actionButton, classes.reply)}>
              <ReplyIcon />
              回复
            </Button>
          </div>
          {renderFooter && renderFooter()}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TopicSession)