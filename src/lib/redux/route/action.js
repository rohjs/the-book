import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'SET_ROUTE',
)

const actions = {
  setRoute: ({
    book,
    note
  }) => {
    type: actionTypes.SET_ROUTE,
    payload: {
      book,
      note,
    }
  }
}

export default actions