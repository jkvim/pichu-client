import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from '@reach/router'
import listData from './listData'

const styles = (theme: any) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflow: 'auto',
  },
})

class SessionList extends React.Component<any, any> {
  state = {
    rows: listData,
    page: 0,
    rowsPerPage: 5,
  }

  handleChangePage = (_: any, page: number) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { classes } = this.props
    const { rows } = this.state

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
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
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Link to={`/topics/${row.id}`}>{row.title}</Link>
                    </TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.author.username}</TableCell>
                    <TableCell>{row.commentCount}</TableCell>
                    <TableCell>{row.visitCount}</TableCell>
                    <TableCell>{row.lastActivity}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(SessionList)
