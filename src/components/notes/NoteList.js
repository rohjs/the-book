import React from 'react'
import '../../styles/NoteList.css'
import uuid from 'uuid'

class NoteListItem extends React.Component {
  openNote = () => {
    const {
      noteId,
      folderId,
      setRoute,
    } = this.props

    const url =  `/notes/${folderId}/${noteId}/view`

    setRoute({
      url,
    })

  }
  render () {
    const {
      title,
      content,
      createdAt,
    } = this.props

    return (
      <li
        className='list-item'
        onClick={this.openNote}
      >
        <h1>{title}</h1>
        <p className='content'>{content}</p>
        <p className='date'>{createdAt}</p>
      </li>
    )
  }
}

class NoteList extends React.Component {
  createNote = (e) => {
    e.preventDefault()

    const {
      actions,
      route,
    } = this.props
    const noteId = uuid.v4()
    const url = `/notes/${route.folderId}/${noteId}/new`

    actions.setRoute({
      url,
    })

    actions.addNote({
      folderId: route.folderId,
      noteId,
    })

  }

  render () {
    const {
      data,
      actions
    } = this.props

    return (
      <section className='note-list'>
        <header className='note-header'>
          <h1 className='sr-only'>
            노트 리스트
          </h1>
        </header>
        <ul className='list'>
          <li className='add-btn'>
            <button
              type='button'
              onClick={this.createNote}
            >
              새 글 작성하기
            </button>
          </li>
          {
            Object
              .entries(data)
              .map((item, index) => {
                console.log('data:', data)
                console.log('item:', item)
                const {
                  noteId,
                  title,
                  content,
                  createdAt,
                } = item[1]

                return <NoteListItem
                  key={noteId}
                  title={title}
                  content={content}
                  createdAt={createdAt}
                  {...actions}
                />
              })
          }
        </ul>
      </section>
    )
  }
}

export default NoteList