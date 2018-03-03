import React from 'react'
import '../../styles/NoteViewer.css'

class NoteViewer extends React.Component {
  render () {
    const {
      route,
      data,
    } = this.props

    const noteId = route.noteId

    const {
      title,
      content
    } = data[noteId]

    return (
      <section className='note-viewer'>
        <div className='note-utils header'>
          <button
            className='note-util'
            type='button'
          >
            수정하기
          </button>
          <button
            className='note-util'
            type='button'
          >
            삭제하기
          </button>
        </div>
        <article className='content'>
          <header className='content-header'>
            <h1 className='note-title'>{title}</h1>
          </header>
          <div className='note-content'>
            <p>{content}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default NoteViewer