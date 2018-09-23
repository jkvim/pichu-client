import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

const styles = (theme: any) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
})

class CategoryDropdown extends React.Component<any> {
  state = {
    category: 'ALL',
  }

  handleChange = (event: any) => {
    this.setState({
      category: event.target.value,
    })
  }

  render() {
    const { classes } = this.props
    return (
      <FormControl className={classes.formControl}>
        <Select value={this.state.category} onChange={this.handleChange}>
          <MenuItem value="ALL">所有分类</MenuItem>
          <MenuItem value="SOFTWARE_ENGINEERING">软件工程</MenuItem>
          <MenuItem value="PROGRAMMING_LANGUAGE">编程语言</MenuItem>
          <MenuItem value="ARTIFICIAL INTELLIGENCE">人工智能</MenuItem>
          <MenuItem value="IOT">硬件设备</MenuItem>
          <MenuItem value="SOFTWARE_TESTING">软件测试</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

export default withStyles(styles)(CategoryDropdown)
