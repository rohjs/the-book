import React from 'react'
import '../styles/Sidebar.css'

class SidebarListItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  handleClick = () => {
    const {
      setActiveBook,
      id,
    } = this.props

    setActiveBook(id)

    this.setState((prevState) => {
      prevState.isActive = true
    })
  }

  render () {
    const {
      title
    } = this.props
    return (
      <li
        className={`sidebar-item${this.state.isActive ? ' active': ''}`}
        onClick={this.handleClick}
      >
        <span className='icon'>{title[0]}</span>
        <h1>{title}</h1>
      </li>
    )
  }
}

class Sidebar extends React.Component {
  render () {
    const {
      actions,
    } = this.props

    return (
      <nav className='sidebar'>
        <ul>
          <SidebarListItem setActiveBook={actions.setActiveBook} isActive={true} title='강의안' id='0' />
          <SidebarListItem setActiveBook={actions.setActiveBook} isActive={false} title='일상 기록' id='1' />
        </ul>
      </nav>
    )
  }
}

export default Sidebar