import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'ADD_PAGE',
  'EDIT_PAGE',
  'DELETE_PAGE',
)

const actions = {
  addPage: (noteId) => {
    return {
      type: actionTypes.ADD_PAGE,
      payload: {
        noteId,
      },
    }
  },
  editPage: () => {
    return {
      type: actionTypes.EDIT_PAGE,
    }
  },
  deletePage: () => {
    return {
      type: actionTypes.DELETE_PAGE,
    }
  },
}

export default actions