import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'CREATE_PAGE',
  'EDIT_PAGE',
  'DELETE_PAGE',
)

const actions = {
  createPage: () => {
    return {
      type: actionTypes.CREATE_PAGE,
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