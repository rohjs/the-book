import { actionTypes } from './actions'
import uuid from 'uuid'

const defaultState = {
  [uuid.v4()]: {
    title: 'title',
    content: 'content',
    createdAt: '',
    folderId: '',
    updatedAt: ''
  },
}

const reducer = (state = {}, action) => {
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