import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'SET_ROUTE',
)

const actions = {
  setRoute: ({
    url
  }) => {
    return {
      type: actionTypes.SET_ROUTE,
      payload: {
        url,
      }
    }
  }
}

export default actions