import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noteAction from '../lib/redux/note/action' 
import routeAction from '../lib/redux/route/action' 
import '../styles/Sidebar.css'

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    route: state.route,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(noteAction, dispatch),
      ...bindActionCreators(routeAction, dispatch),
    }
  }
}
class SidebarItem extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick = (e) => {
    const {
      id,
      setRoute
    } = this.props

    setRoute({
      note: id,
    })
  }

  render () {
    const {
      title,
      isActive,
    } = this.props

    return (
      <li
        className={`sidebar-item${isActive ? ' active' : ''}`}
        onClick={this.handleClick}
      >
        <span className='icon'>{title[0]}</span>
        <h1>{title}</h1>
      </li>
    )
  }
}

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
  }


  render () {
    const {
      actions,
      notes,
      route,
    } = this.props

    return (
      <nav className='sidebar'>
        <ul className='sidebar-list'>
          {
            Object
              .entries(notes)
              .map((note, index) => {
                const {
                  title,
                  id,
                } = note[1]
                
                return <SidebarItem
                  key={index}
                  title={title}
                  id={id}
                  setRoute={actions.setRoute}
                  isActive={route.note === id ? true : false}
                />
              })
          }
        </ul>
      </nav>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)