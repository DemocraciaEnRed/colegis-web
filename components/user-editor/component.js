import React, { Component } from 'react'
import styled from 'styled-components'
import { Editor, findDOMRange } from 'slate-react'
import { Value, KeyUtils, Range, Change, Mark } from 'slate'
import { getVisibleSelectionRect } from 'get-selection-range'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../with-user-context/component'
import CommentsGrid from '../comments-grid/component'
import EditorTitle from '../../elements/editor-title/component'
import TitleMark from '../../elements/title-mark/component'
import ProjectTextEdit from '../../components/project-text-edit'
import ProjectTextComment from '../../components/project-text-comment'
import ProjectTextCreateComment from '../../components/project-text-create-comment'

const StyledEditorWrapper = styled.div`
  width: 90%;
  padding: 0 8%;
  margin-top: 48px;
  position: relative;
  .editor {
    max-width: 74%;
    @media (max-width: 1024px) {
    max-width:60%;
  }
    span {
      font-size: 1.8rem;
      line-height: 1.89;
      color: #203340;
      padding: 6.5px 0px;
    }
  }
`

class UserEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null,
      selection: null,
      commentsIds: []
    }
  }

  schema = {
    marks: {
      comment: {
        isAtomic: true
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.withComments !== this.props.withComments) {
      this.forceUpdate()
    }
  }

  componentDidMount () {
    if (this.props.value) {
      this.setState({
        value: Value.fromJSON(this.props.value)
      })
    }
  }

  onChange = async (change) => {
    if (this.props.isAuthor && this.props.editMode) {
      return this.setState({
        value: change.value
      })
    }

    const changesTypes = change.operations
      // .map(o => {
      //   console.log(o.type)
      //   return o
      // })
      .map(o => o.type)
      .filter(o => o !== 'add_mark')
      .filter(o => o !== 'remove_mark')
      .filter(o => o !== 'set_selection')
      .count()

    this.setState({
      value: changesTypes === 0 ? change.value : this.state.value
    })
  }

  showComments = async (ids, top) => {
    this.setState({
      activeComments: ids,
      top
    })
  }

  render () {
    if (!this.state.value) return null
    let plugins = []
    if (this.props.withComments) plugins.push(ProjectTextComment({ onClick: this.showComments }))
    plugins.push(ProjectTextEdit({ id: this.props.id, field: 'articles', isAuthor: this.props.isAuthor }))
    if (this.props.authContext.authenticated && !this.props.editMode) {
      plugins.push(ProjectTextCreateComment({ id: this.props.id }))
    }
    return (
      <StyledEditorWrapper>
        {this.props.withComments &&
          <CommentsGrid
            id={this.props.id}
            activeComments={this.state.activeComments}
            top={this.state.top} />
        }
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <div ref={this.myEditor}>
          <Editor
            plugins={plugins}
            className='editor'
            schema={this.schema}
            value={this.state.value}
            onChange={this.onChange}
            spellCheck={false} />
        </div>
      </StyledEditorWrapper>
    )
  }
}

export default WithUserContext(UserEditor)