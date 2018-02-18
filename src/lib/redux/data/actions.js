import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'ADD_NOTE',
  'DELETE_NOTE',
  'EDIT_NOTE',
)

const actions = {
  addNote: ({
    title,
    content,
    folderId,
  }) => {
    return {
      type: actionTypes.ADD_NOTE,
      payload: {
        title,
        content,
        folderId,
      }
    }
  },
  deleteNote: ({
    id
  }) => {
    return {
      type: actionTypes.DELETE_NOTE,
      payload: {
        id,
      },
    }
  },
  editNote: ({
    id
  }) => {
    return {
      type: actionTypes.EDIT_NOTE,
      payload: {
        id,
      }
    }
  }
}

export default actions