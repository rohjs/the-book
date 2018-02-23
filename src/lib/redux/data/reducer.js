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
      const id = uuid.v4()
      const {
        title,
        content,
        folderId,
      } = action.payload
      const createdAt = Date.now()

      return {
        ...state,
        [id]: {
          title,
          content,
          folderId,
          createdAt,
          updatedAt: createdAt,
        }
      }
    case actionTypes.DELETE_NOTE:
      return state
    case actionTypes.EDIT_NOTE:
      return state
    default:
      return state
  }
}

export default reducer