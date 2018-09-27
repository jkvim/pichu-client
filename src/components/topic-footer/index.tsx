import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from '@reach/router'

import { Topic } from 'types'
import recommendTopic from './recommendTopics'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20
    },
    title: {
      fontWeight: 'bold',
    }
  })

class TopicFooter extends React.Component<any, any> {
  static defaultProps = {
    recommendTopics: recommendTopic
  }

  render() {
    const { classes, recommendTopics } = this.props
    return (
      <div className={classes.root}>
        <Typography component="h4" className={classes.title}>推荐主题</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>标题</TableCell>
              <TableCell>分类</TableCell>
              <TableCell>作者</TableCell>
              <TableCell>回复</TableCell>
              <TableCell>浏览</TableCell>
              <TableCell>活动</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recommendTopics.map((topic: Topic) => {
              return (
                <TableRow key={topic.id}>
                  <TableCell component="th" scope="row">
                    <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
                  </TableCell>
                  <TableCell>{topic.category}</TableCell>
                  <TableCell>{topic.author.username}</TableCell>
                  <TableCell>{topic.commentCount}</TableCell>
                  <TableCell>{topic.visitCount}</TableCell>
                  <TableCell>{topic.lastActivity}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default withStyles(styles)(TopicFooter)
