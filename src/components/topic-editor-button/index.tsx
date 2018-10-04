import * as React from 'react'
import classnames from 'classnames'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import FormatBold from '@material-ui/icons/FormatBold'
import FormatItalic from '@material-ui/icons/FormatItalic'
import FormatUnderlined from '@material-ui/icons/FormatUnderlined'
import Code from '@material-ui/icons/Code'
import LooksOne from '@material-ui/icons/LooksOne'
import LooksTwo from '@material-ui/icons/LooksTwo'
import FormatQuote from '@material-ui/icons/FormatQuote'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'

const styles = (theme: Theme) =>
  createStyles({
    button: {
      pointer: 'cursor',
      marginRight: 20,
    },
    active: {
      color: 'black',
    },
    normal: {
      color: '#ccc',
    },
  })

const iconsMap: any = {
  bold: FormatBold,
  italic: FormatItalic,
  underlined: FormatUnderlined,
  code: Code,
  'heading-one': LooksOne,
  'heading-two': LooksTwo,
  'block-quote': FormatQuote,
  'numbered-list': FormatListNumbered,
  'bulleted-list': FormatListBulleted,
}

class TopicEditorButton extends React.Component<any, any> {
  render() {
    const { icon, active, classes, onPress } = this.props
    const Icon = iconsMap[icon]
    return (
      <div
        onMouseDown={onPress}
        className={classnames(
          active ? classes.active : classes.normal,
          classes.button,
        )}
      >
        <Icon />
      </div>
    )
  }
}

export default withStyles(styles)(TopicEditorButton)
