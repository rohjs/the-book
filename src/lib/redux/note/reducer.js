import { actionTypes } from './action'
import uuid from 'uuid'

const defaultState = {
  '0': {
    title: '모든 노트',
    id: 0,
  },
  '1': {
    title: '그냥 노트',
    id: 1,
  },
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const id = uuid.v4()
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