import { actionTypes } from './action'

const defaultState = {}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NOTE:
      return state
    case actionTypes.EDIT_NOTE:
      return state
    case actionTypes.DELETE_NOTE:
      return state
    default:
      return state
  }
}

export default reducer