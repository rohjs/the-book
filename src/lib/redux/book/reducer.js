import { actionTypes } from './action'

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return state
    case actionTypes.EDIT_BOOK:
      return state
    case actionTypes.DELETE_BOOK:
      return state
    default:
      return state
  }
}

export default reducer