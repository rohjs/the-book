import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import NoteViewer from './NoteViewer'

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const NoteRouter = (props) => {
  const {
    route,
  } = props

  switch (route.status) {
    case 'new':
      return <NoteForm />
    case 'view':
      return <NoteViewer />
    default:
      return null
  }
}

export default connect(mapStateToProps)(NoteRouter)