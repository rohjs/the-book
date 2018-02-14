import { actionTypes } from './action'
import uuid from 'uuid'

const defaultState = {
  '0': {
    title: '기본적인 문서 작성툴입니다.',
    content: "작성법은 상당히 간단합니다. 쓰고 싶은 글의 내용을 생각하고 그걸 적으면 됩니다. That's easy.",
    id: 0,
    createdAt: 'Feb 14, 2018',
    noteId: 0,
  },
  '1': {
    title: '기본적인 문서 작성툴입니다.',
    content: "작성법은 상당히 간단합니다. 쓰고 싶은 글의 내용을 생각하고 그걸 적으면 됩니다. That's easy.",
    id: 1,
    createdAt: 'Feb 14, 2018',
    noteId: 1,
  },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PAGE:
      const id = uuid.v4()
      
      return {
        ...state,
        [id]: {
          title: '',
          content: '',
          id,
          createdAt: '',
          noteId: action.payload.noteId,
        },
      }
    case actionTypes.EDIT_PAGE:
      return state
    case actionTypes.DELETE_PAGE:
      return state
    default:
      return state
  }
}

export default reducer