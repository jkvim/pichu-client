import * as React from "react";
import * as PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import NavBar from "components/navbar";

const styles = () => ({
  container: {
    width: "100%",
    height: "100%",
    display: "block",
    background: "green"
  }
});

class NotFound extends React.Component<any> {
  static propTypes = {
    classes: PropTypes.object
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <NavBar />
        <h1>NOT FOUND</h1>
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);
