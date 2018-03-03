import React from 'react'
import '../../styles/NoteForm.css'

class NoteForm extends React.Component {
  constructor (props) {
    super(props)

    const {
      data,
      noteId,
    } = props

    this.state = {
      title: data[noteId].title,
      content: data[noteId].content,
    }
  }

  updateTitle = (e) => {
    const {
      noteId,
    } = this.props.route

    const {
      actions
    } = this.props

    actions.updateNote({
      noteId,
      title: this.input.value,
    })
  }

  updateContent = (e) => {
    const {
      noteId,
    } = this.props

    const {
      actions
    } = this.props

    actions.updateNote({
      noteId,
      content: this.textarea.value,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      data,
      noteId
    } = this.props

    if (prevProps.noteId !== noteId) {
      this.setState({
        title: data[noteId].title,
        content: data[noteId].content,
      })
    }
  }

  render () {
    const {
      title,
      content,
    } = this.state

    return (
      <form className='note-form'>
        <input
          onChange={this.updateTitle}
          ref={input => this.input = input}
          placeholder='제목을 입력하세요'
          className='note-title'
          defaultValue={title}
        />
        <textarea
          onChange={this.updateContent}
          ref={textarea => this.textarea = textarea}
          placeholder='메모를 작성해주세요'
          className='note-content'
          defaultValue={content}
        />
      </form>
    )
  }
}

export default NoteForm