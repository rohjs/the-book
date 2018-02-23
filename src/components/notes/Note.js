import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routeActions from '../../lib/redux/route/actions'
import dataActions from '../../lib/redux/data/actions'
import folderActions from '../../lib/redux/folder/actions'
import FolderList from './FolderList'
import NoteList from './NoteList'
import '../../styles/Note.css'

const mapStateToProps = (state) => {
  return {
    data: state.data,
    folder: state.folder,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(routeActions, dispatch),
      ...bindActionCreators(dataActions, dispatch),
      ...bindActionCreators(folderActions, dispatch),
    }
  }
}

const Note = (props) => (
  <div className='wrap'>
    <FolderList {...props} />
    <NoteList  {...props} />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Note)