import React from 'react'
import '../../styles/NoteList.css'

class NoteListItem extends React.Component {
  render () {
    const {
      title,
      content,
      date,
      isActive,
    } = this.props

    return (
      <li
        className={`list-item${isActive ? ' active' : ''}`}
        onClick={this.handleClick}
      >
        <h1>{title}</h1>
        <p className='content'>{content}</p>
        <p className='date'>{date}</p>
      </li>
    )
  }
}

class NoteList extends React.Component {
  render () {
    return (
      <section className='note-list'>
        <header className='note-header'>
          <h1>
            <h1>나는 노트리스트입니다</h1>
          </h1>
        </header>
        <ul className='list'>
          <li className='add-btn'>
            <button
              type='button'
            >
              새 글 작성하기
            </button>
          </li>
        </ul>
      </section>
    )
  }
}

export default NoteList