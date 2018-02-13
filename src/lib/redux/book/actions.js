import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'SET_ACTIVE_BOOK',
)

const actions = {
  setActiveBook: (id) => {
    return {
      type: actionTypes.SET_ACTIVE_BOOK,
      payload: {
        id,
      }
    }
  }
}

export default actions