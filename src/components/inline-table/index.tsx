import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: '#eee',
      padding: '8px 10px',
      margin: 0,
      alignItems: 'center',
    },
    label: {
      display: 'inline',
      marginRight: '5px',
      color: '#999',
      fontSize: 14,
    },
    value: {
      display: 'inline',
      marginRight: '10px',
      color: '#000',
      fontSize: 14,
    },
  })

class InlineTable extends React.Component<any> {
  render() {
    const { data, classes } = this.props
    return (
      <dd className={classes.root}>
        {data.map(({ label, value }: { label: string; value: string }) => (
          <React.Fragment>
            <dt className={classes.label}>
              <Typography
                component="span"
                variant="subheading"
                classes={{ subheading: classes.label }}
              >
                {label}
              </Typography>
            </dt>
            <dt className={classes.value}>
              <Typography
                component="span"
                variant="subheading"
                classes={{ subheading: classes.value }}
              >
                {value}
              </Typography>
            </dt>
          </React.Fragment>
        ))}
      </dd>
    )
  }
}

export default withStyles(styles)(InlineTable)
