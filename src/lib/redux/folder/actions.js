import { enumString } from '../../helpers'

export const actionTypes = enumString(
  'ADD_FOLDER',
  'DELETE_FOLDER',
  'RENAME_FOLDER',
)

const actions = {
  addFolder: ({
    name
  }) => {
    return {
      type: actionTypes.ADD_FOLDER,
      payload: {
        name,
      },
    }
  },
  deleteFolder: ({
    id
  }) => {
    return {
      type: actionTypes.DELETE_FOLDER,
      payload: {
        id,
      },
    }
  },
  renameFolder: ({
    id
  }) => {
    return {
      type: actionTypes.RENAME_FOLDER,
      payload: {
        id
      },
    }
  },
}

export default actions