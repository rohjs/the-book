import React from 'react'
import { connect } from 'react-redux'
import routeActions from '../lib/redux/route/actions'
import Note from './notes/Note'
import Settings from './settings/Settings'
import NotFound from './NotFound'

const mapStateToProps = (state) => {
  return {
    route: state.route,
  }
}

const Router = ({
  route
}) => {

  const [,pathname] = route.pathname.split('/')

  switch (pathname.toLowerCase()) {
    case 'notes':
      return <Note />
    case 'settings':
      return <Settings />
    default:
      return <NotFound />
  }
}

export default connect(mapStateToProps)(Router)