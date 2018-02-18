import React from 'react'
import '../../styles/FolderList.css'


class FolderListItem extends React.Component {
  render () {
    const {
      name
    } = this.props
    return (
      <li
        className={`folder-item`}
      >
        <span className='icon'>{name[0]}</span>
        <h1>{name}</h1>
      </li>
    )
  }
}

class FolderList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isShowingFolderCreateInput: false,
      newFolderName: '',
    }
  }

  showInput = () => {
    this.setState({
      isShowingFolderCreateInput: true,
    })
  }

  updateNewFolderName = () => {
    this.setState({
      newFolderName: this.input.value,
    })
  }

  createFolder = () => {
    const {
      actions
    } = this.props

    actions.addFolder({
      name: this.state.newFolderName,
    })
  }

  render () {
    const {
      isShowingFolderCreateInput
    } = this.state

    const {
      folder
    } = this.props

    return (
      <nav className='folder'>
        <h1>나는 폴더리스트입니다</h1>
        <ul className='folder-list'>
          {
            folder.map((item, index) => {
              const {
                id,
                name,
              } = item

              return <FolderListItem
                key={id}
                name={name}
              />
            })
          }
          <li>
            <button
              type='button'
              onClick={this.showInput}
            >
              새 폴더 만들기
            </button>
            <div className={`create-folder${isShowingFolderCreateInput ? ' active' : ''}`}>
              <input
                className='input'
                type='text'
                onChange={this.updateNewFolderName}
                ref={input => this.input = input} />
              <button
                type='button'
                onClick={this.createFolder}>
                생성
              </button>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default FolderList