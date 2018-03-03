import React from 'react'
import '../../styles/NoteForm.css'

class NoteForm extends React.Component {
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
    } = this.props.route

    const {
      actions
    } = this.props

    actions.updateNote({
      noteId,
      content: this.textarea.value,
    })
  }

  render () {
    const {
      route,
      data,
    } = this.props

    const {
      noteId,
    } = route

    const {
      title,
      content
    } = data[noteId]


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