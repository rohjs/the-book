import React from 'react'
import '../styles/Sidebar.css'

const SidebarListItem = ({
  isActive,
  title,
}) => {
  return (
    <li className={`sidebar-item${isActive ? ' active': ''}`}>
      <span className='icon'>{title[0]}</span>
      <h1>{title}</h1>
    </li>
  )
}

class Sidebar extends React.Component {
  render () {
    return (
      <nav className='sidebar'>
        <ul>
          <SidebarListItem isActive={true} title='강의안' />
          <SidebarListItem isActive={false} title='일상 기록' />
        </ul>
      </nav>
    )
  }
}

export default Sidebar