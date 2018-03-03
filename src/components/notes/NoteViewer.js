import React from 'react'
import '../../styles/NoteViewer.css'

class NoteViewer extends React.Component {
  changeToEditMode = (e) => {
    e.preventDefault()

    const {
      actions,
      route,
    } = this.props
    // route에서 folderId, noteId 빼오는 작업이 계속 중복되네
    // 이걸 좀 더 효율적으로 처리할 수 있는 방법이 있을까?
    const {
      folderId,
      noteId,
    } = route

    const url = `/notes/${folderId}/${noteId}/edit`

    actions.setRoute({
      url,
    })
  }

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
            onClick={this.changeToEditMode}
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