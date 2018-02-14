import { actionTypes } from './action'

const defaultState = {
  '모든 문서': {
    title: '모든 문서',
    id: 0,
  },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PAGE:
      return state
    case actionTypes.EDIT_PAGE:
      return state
    case actionTypes.DELETE_PAGE:
      return state
    default:
      return state
  }
}

export default reducer