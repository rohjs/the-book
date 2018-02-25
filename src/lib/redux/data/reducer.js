import { actionTypes } from './actions'
import uuid from 'uuid'

const firstNote = uuid.v4()

const defaultState = {
  [firstNote]: {
    title: 'title',
    content: 'content',
    createdAt: '',
    folderId: '',
    noteId: [firstNote],
    updatedAt: '',
  },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const {
        title,
        content,
        folderId,
        noteId,
      } = action.payload
      const createdAt = Date.now()

      return {
        ...state,
        [noteId]: {
          title,
          content,
          folderId,
          noteId,
          createdAt,
          updatedAt: createdAt,
        }
      }
    case actionTypes.DELETE_NOTE:
      return state
    case actionTypes.UPDATE_NOTE:
      const updatedNote = {
        ...state[action.payload.noteId],
        updatedAt: Date.now()
      }

      if (action.payload.title) updatedNote.title = action.payload.title
      if (action.payload.content) updatedNote.content = action.payload.content

      return {
        ...state,
        [action.payload.noteId]: updatedNote
      }
    case actionTypes.EDIT_NOTE:
      return state
    default:
      return state
  }
}

export default reducer