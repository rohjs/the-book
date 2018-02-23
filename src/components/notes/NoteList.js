import React from 'react'
import '../../styles/NoteList.css'

class NoteListItem extends React.Component {
  render () {
    const {
      title,
      content,
      createdAt,
    } = this.props

    return (
      <li className='list-item'>
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

  }

  render () {
    const {
      data
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
                />
              })
          }
        </ul>
      </section>
    )
  }
}

export default NoteList