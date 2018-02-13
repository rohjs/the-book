import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'CREATE_NOTE',
  'EDIT_NOTE',
  'DELETE_NOTE',
)

const actions = {
  createNote: () => {
    return {
      type: actionTypes.CREATE_NOTE,
    }
  },
  editNote: () => {
    return {
      type: actionTypes.EDIT_NOTE,
    }
  },
  deleteNote: () => {
    return {
      type: actionTypes.DELETE_NOTE,
    }
  },
}

export default actions