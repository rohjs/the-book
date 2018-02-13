import { actionTypes } from './action'

const defaultState = {
  'base': {
    title: '책은 도끼다',
    content: '도끼이기 때문이다',
    id: 0,
    book: 'base',
  }
}


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