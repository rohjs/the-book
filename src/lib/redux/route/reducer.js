import { actionTypess } from './action'

const defaultState = {
  activeBook: 0,
  activeNote: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.types) {
    case actionTypes.SET_ROUTE:
      // =FIXME
      return {
        activeBook: action.payload.book,
        activeNote: action.payload.note,
      }
    default:
      return state
  }
}

export default reducer