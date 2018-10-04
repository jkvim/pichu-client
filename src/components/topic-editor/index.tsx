import * as React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Editor } from 'slate-react'
import { Value, Change } from 'slate'
import TopicEditorButton from 'components/topic-editor-button'

const styles = (theme: Theme) => createStyles({
  root: {},
  toolbar: {
    display: 'flex',
    border: '1px solid #eee',
    padding: 20,
  },
  editor: {
    padding: 20,
    height: 300,
  }
})

const DEFAULT_NODE = 'paragraph'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: '请发表你的意见...',
              },
            ],
          },
        ],
      },
    ],
  },
})


class TopicEditor extends React.Component<any, any> {
  state = {
    value: initialValue,
  }

  hasMark = (type: string) => {
    const { value } = this.state
    return value.activeMarks.some((mark: any) => mark.type === type)
  }

  hasBlock = (type: string) => {
    const { value } = this.state
    return value.blocks.some((node: any) => node.type === type)
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

  renderMarkButton = (type: string) => {
    const isActive = this.hasMark(type)
    return (
      <TopicEditorButton
        icon={type}
        active={isActive}
        onPress={(event: any) => this.onClickMark(event, type)}
      />
    )
  }

  renderBlockButton = (type: string) => {
    let isActive = this.hasBlock(type)
    const listTypes = ['numbered-list', 'bulleted-list']

    if (listTypes.includes(type)) {
      const { value } = this.state
      const parent = value.document.getParent(value.blocks.first().key) as any
      isActive = this.hasBlock('list-item') && parent && parent.type === type
    }

    return (
      <TopicEditorButton
        icon={type}
        active={isActive}
        onPress={(event: any) => this.onClickBlock(event, type)}
      />
    )
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <div className={classes.toolbar}>
          {this.renderMarkButton("bold")}
          {this.renderMarkButton("italic")}
          {this.renderMarkButton("underlined")}
          {this.renderMarkButton("code")}
          {this.renderBlockButton("heading-one")}
          {this.renderBlockButton("heading-two")}
          {this.renderBlockButton("block-quote")}
          {this.renderBlockButton("numbered-list")}
          {this.renderBlockButton("bulleted-list")}
        </div>
        <Editor
          spellCheck
          autoFocus
          placeholder="Enter some rich text..."
          value={this.state.value}
          onChange={this.onChange}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
          className={classes.editor}
        />
      </Paper>
    )
  }
}

export default withStyles(styles)(TopicEditor)
