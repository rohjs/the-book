import { actionTypes } from './action'

const defaultState = {
  book: 0,
  note: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.types) {
    case actionTypes.SET_ROUTE:
      // =FIXME
      return {
        ...state,
        book: action.payload.book,
        note: action.payload.note,
      }
    default:
      return state
  }
}

export default reducer