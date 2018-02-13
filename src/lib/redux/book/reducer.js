import { actionTypes } from './actions'

const defaultState = {
  active: 0,
}

const bookReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_BOOK:
      return {
        ...state,
        active: action.payload.id,
      }
    default:
      return state
  }
}

export default bookReducer