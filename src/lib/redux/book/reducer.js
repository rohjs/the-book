import { actionTypes } from './action'

const defaultState = {
  base: {
    title: '모든 문서',
    id: 0,
  }
}

const reducer = (state = defaultState, action) => {
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