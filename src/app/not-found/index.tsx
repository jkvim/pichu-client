import * as React from "react";
import * as PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    background: 'green'
  }
})

export interface NotFoundProps {
  classes: any
}

class NotFound extends React.Component<NotFoundProps> {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props
    return (
     <div className={classes.container}>
        <Paper>
          <Typography component="h3">NOT FOUND</Typography>
        </Paper>
     </div>
    );
  }
}


export default withStyles(styles)(NotFound)