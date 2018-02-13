import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'CREATE_BOOK',
  'EDIT_BOOK',
  'DELETE_BOOK',
)

const actions = {
  createBook: () => {
    return {
      type: actionTypes.CREATE_BOOK,
    }
  },
  editBook: () => {
    return {
      type: actionTypes.EDIT_BOOK,
    }
  },
  deleteBook: () => {
    return {
      type: actionTypes.DELETE_BOOK,
    }
  },
}

export default actions