import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import { Editor } from 'slate-react'
import { Value, Change } from 'slate'
import Button from 'components/topic-editor-button'
import Icon from 'components/topic-editor-icon'
import Toolbar from 'components/topic-editor-menu'
import mockValue from './mockValue'

const styles = (theme: Theme) => createStyles({

})

const DEFAULT_NODE = 'paragraph'


class TopicEditor extends React.Component<any, any> {
  state = {
    value: Value.fromJS(mockValue)
  }

  hasMark = (type: string) => {
    const { value } = this.state
    return value.activeMarks.some((mark: any) => mark.type === type)
  }

  hasBlock = (type: string) => {
    const { value } = this.state
    return value.blocks.some((node: any) => node.type === type)
  }

  renderMarkButton = (type: string, icon: string) => {
    const isActive = this.hasMark(type)
    return (
      <Button
        active={isActive}
        onMouseDown={(event: any) => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  renderBlockButton = (type: string, icon: string) => {
    let isActive = this.hasBlock(type)

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value } = this.state
      const firstBlock = value.blocks.first()
      const parent = value.document.getParent(firstBlock && firstBlock.key)
      isActive = this.hasBlock('list-item') && parent && parent.type === type
    }

    return (
      <Button
        active={isActive}
        onMouseDown={(event: any) => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  renderNode = (props: any) => {
    const { attributes, children, node } = props

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
    }
  }

  renderMark = (props: any) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
    }
  }

  onChange = (change: Change) => {
    this.setState({ value: change.value })
  }

  onClickMark = (event: any, type: string) => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change().toggleMark(type)
    this.onChange(change)
  }

  onClickBlock = (event: any, type: string) => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change()
    const { document } = value

    // Handle everything but list buttons.
    if (type != 'bulleted-list' && type != 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        change
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        change.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some((block:any) => {
        return !!document.getClosest(block.key, (parent:any) => parent.type == type)
      })

      if (isList && isType) {
        change
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        change
          .unwrapBlock(
            type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        change.setBlocks('list-item').wrapBlock(type)
      }
    }

    this.onChange(change)
  }

  render() {
    return (
      <div>
        <Toolbar>
          {this.renderMarkButton('bold', 'format_bold')}
          {this.renderMarkButton('italic', 'format_italic')}
          {this.renderMarkButton('underlined', 'format_underlined')}
          {this.renderMarkButton('code', 'code')}
          {this.renderBlockButton('heading-one', 'looks_one')}
          {this.renderBlockButton('heading-two', 'looks_two')}
          {this.renderBlockButton('block-quote', 'format_quote')}
          {this.renderBlockButton('numbered-list', 'format_list_numbered')}
          {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
        </Toolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Enter some rich text..."
          value={this.state.value}
          onChange={this.onChange}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </div>
    )
  }
}

export default withStyles(styles)(TopicEditor)