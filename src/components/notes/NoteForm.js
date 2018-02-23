import React from 'react'
import '../../styles/NoteForm.css'

class NoteForm extends React.Component {
  updateTitle = (e) => {

  }
  updateContent = (e) => {

  }
  render () {
    return (
      <form className='note-form'>
        <input
          onChange={this.updateTitle}
          ref={input => this.input = input}
          placeholder='제목을 입력하세요'
          className='note-title'
        />
        <textarea
          onChange={this.updateContent}
          ref={textarea => this.textarea = textarea}
          placeholder='메모를 작성해주세요'
          className='note-content'
        />
      </form>
    )
  }
}

export default NoteForm