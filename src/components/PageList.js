import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import pageAction from '../lib/redux/page/action'
import routeAction from '../lib/redux/route/action'
import '../styles/PageList.css'

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    route: state.route,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(pageAction, dispatch),
      ...bindActionCreators(routeAction, dispatch),
    }
  }
}

class PageListItem extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick = (e) => {
    const {
      id,
      noteId,
      setRoute,
    } = this.props

    console.log(id)

    setRoute({
      page: id,
    })
  }

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

class PageList extends React.Component {
  render () {
    const {
      pages,
      route,
      actions,
    } = this.props
  
    return (
      <section className='page-list'>
        <header className='page-header'>
          <h1 className='sr-only'>
            노트 보기
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
          {
            Object
              .entries(pages)
              .map((page, index) => {
                const {
                  title,
                  content,
                  id,
                  createdAt,
                  noteId,
                } = page[1]

                return <PageListItem
                  key={index}
                  title={title}
                  id={id}
                  content={content}
                  date={createdAt}
                  setRoute={actions.setRoute}
                  noteId={noteId}
                  isActive={route.page === id ? true : false}
                />
              })
          }
        </ul>
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageList)