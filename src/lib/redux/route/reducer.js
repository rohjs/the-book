import { actionTypes } from './action'

const defaultState = {
  note: 0,
  page: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROUTE:
      const {
        note,
        page,
      } = action.payload

      if (typeof note === 'number') {
        return {
          ...state,
          note,
        }
      }

      if (typeof page === 'number') {
        return {
          ...state,
          page,
        }
      }
    default:
      return state
  }
}

export default reducer