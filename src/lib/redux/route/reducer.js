import { actionTypes } from './actions'
import { parsePath } from '../../helpers'

const defaultState = parsePath(`${window.location.href}/all`)

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROUTE:
      return parsePath(action.payload.url)
    default:
      return state
  }
}

export default reducer