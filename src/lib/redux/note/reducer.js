import { actionTypes } from './actions'

const defaultState = {
  active: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_NOTE:
      return {
        ...state,
        active: action.payload.id,
      }
    default:
      return state
  }
}

export default reducer