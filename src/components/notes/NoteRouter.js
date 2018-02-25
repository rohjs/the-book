import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routeActions from '../../lib/redux/route/actions'
import dataActions from '../../lib/redux/data/actions'
import NoteForm from './NoteForm'
import NoteViewer from './NoteViewer'

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(routeActions, dispatch),
      ...bindActionCreators(dataActions, dispatch),
    }
  }
}

const NoteRouter = (props) => {
  const {
    route,
    actions,
  } = props

  switch (route.status) {
    case 'new':
      return <NoteForm {...props} />
    case 'view':
      return <NoteViewer {...props} />
    default:
      return null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteRouter)