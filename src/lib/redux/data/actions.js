import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'ADD_NOTE',
  'DELETE_NOTE',
  'UPDATE_NOTE',
  'EDIT_NOTE',
)

const actions = {
  addNote: ({
    title,
    content,
    folderId,
    noteId,
  }) => {
    return {
      type: actionTypes.ADD_NOTE,
      payload: {
        title,
        content,
        folderId,
        noteId,
      }
    }
  },
  deleteNote: ({
    noteId
  }) => {
    return {
      type: actionTypes.DELETE_NOTE,
      payload: {
        noteId,
      },
    }
  },
  updateNote: ({
    noteId,
    title,
    content,
  }) => {
    return {
      type: actionTypes.UPDATE_NOTE,
      payload: {
        noteId,
        title,
        content,
      },
    }
  },
  editNote: ({
    noteId
  }) => {
    return {
      type: actionTypes.EDIT_NOTE,
      payload: {
        noteId,
      }
    }
  }
}

export default actions