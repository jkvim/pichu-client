import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import NavBar from 'components/navbar'
import Typography from '@material-ui/core/Typography'
import PichuContent from 'components/pichu-content'
import TopicArticle from 'components/topic-article'
import mockData from './data'

const styles = (theme: Theme) => createStyles({
  container: {
    marginTop: 20,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 5,
    borderLeft: '8px solid skyblue',
  },
  subTitle: {
    borderBottom: '1px solid #e9e9e9'
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  }
})

class Topic extends React.Component<any, any> {
  static defaultProps = mockData

  render() {
    const { title, content, author, createDate, category, classes } = this.props
    return (
      <div>
        <NavBar />
        <PichuContent classProps={classes.container}>
          <Typography component="h1" className={classes.title}>{title}</Typography>
          <div className={classes.subTitle}>
            <Typography component="h4" className={classes.category}>{category}</Typography>
          </div>
          <TopicArticle content={content} author={author} createDate={createDate} />
        </PichuContent>
      </div>
    )
  }
}

export default withStyles(styles)(Topic)