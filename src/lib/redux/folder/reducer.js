import { actionTypes } from './actions'
import uuid from 'uuid'

// typeof folder state = array

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_FOLDER:
      const folderId = uuid.v4()
      const folder = {
        id: folderId,
        name: action.payload.name,
        createdAt: Date.now()
      }
      return [
        ...state,
        folder,
      ]
    case actionTypes.DELETE_FOLDER:
      return state
    case actionTypes.EDIT_FOLDER:
      return state
    default:
      return state
  }
}

export default reducer