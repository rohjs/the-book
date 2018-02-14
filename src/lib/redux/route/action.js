import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'SET_ROUTE',
)

const actions = {
  setRoute: ({
    note,
    page,
  }) => {
    return {
      type: actionTypes.SET_ROUTE,
      payload: {
        note,
        page,
      },
    }
  }
}

export default actions