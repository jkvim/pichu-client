import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import NavBar from 'components/navbar'
import PichuContent from 'components/pichu-content'
import TopicSession from 'components/topic-article'
import TopicFooter from 'components/topic-footer'
import TopicEditor from 'components/topic-editor'

import { Comment  } from 'types/'
import mockData from './data'

const styles = (theme: Theme) => createStyles({
  container: {
    marginTop: 20,
    marginBottom: 50,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 5,
    borderLeft: '8px solid skyblue',
  },
  subTitle: {
    borderBottom: '1px solid #e9e9e9',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  }
})

class Topic extends React.Component<any, any> {
  static defaultProps = mockData

  render() {
    const { title, content, author, createDate, category, classes, comments } = this.props
    return (
      <div>
        <NavBar />
        <PichuContent classProps={classes.container}>
          <Typography component="h1" className={classes.title}>{title}</Typography>
          <div className={classes.subTitle}>
            <Typography component="h4" className={classes.category}>{category}</Typography>
          </div>
          <TopicSession content={content} author={author} createDate={createDate} />
          {comments.map((comment: Comment) => (
            <TopicSession content={content} author={author} createDate={createDate} key={comment.id} />
          ))}
          <TopicEditor />
          <TopicFooter />
        </PichuContent>
      </div>
    )
  }
}

export default withStyles(styles)(Topic)