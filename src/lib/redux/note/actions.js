import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'SET_ACTIVE_NOTE',
)

const actions = {
  setActiveNote: (id) => {
    return {
      type: actionTypes.SET_ACTIVE_NOTE,
      payload: {
        id,
      }
    }
  }
}

export default actions