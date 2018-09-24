import * as React from 'react'
import * as PropTypes from 'prop-types'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import deepOrange from '@material-ui/core/colors/deepOrange'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Paper from '@material-ui/core/Paper'
import upperCase from 'lodash/upperCase'
import PichuContent from 'components/pichu-content'
import InlineTable from 'components/inline-table'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid green',
      marginTop: 20,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      margin: 10,
      color: '#fff',
      fontSize: 24,
      backgroundColor: deepOrange[500],
      width: 50,
      height: 50,
    },
    names: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    button: {
      margin: theme.spacing.unit,
      height: 40,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
  })

class UserHeader extends React.Component<any> {
  static defaultProps = {
    username: 'jkvim',
    nickname: '至尊宝',
    userInfo: [
      {
        label: '加入时间',
        value: '16年8月'
      },
      {
        label: '发帖数',
        value: '29'
      },
      {
        label: '评论数',
        value: '293'
      },
      {
        label: '收获赞',
        value: '123'
      },
      {
        label: '邮箱',
        value: 'jkvim@outlook.com'
      }
    ]
  }

  render() {
    const { classes, username, nickname, userInfo } = this.props
    return (
      <div className={classes.root}>
        <PichuContent classProps={classes.container}>
          <Avatar className={classes.avatar}>{upperCase(username[0])}</Avatar>
          <div className={classes.names}>
            <Typography component="h3">{username}</Typography>
            <Typography component="h4">{nickname}</Typography>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            私信
            <SendIcon className={classes.rightIcon} />
          </Button>
        </PichuContent>
        <PichuContent>
          <InlineTable data={userInfo} />
        </PichuContent>
      </div>
    )
  }
}

export default withStyles(styles)(UserHeader)
