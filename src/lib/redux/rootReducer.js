import { combineReducers } from 'redux'
import bookReducer from './book/reducer'
import noteReducer from './note/reducer'

const rootReducer = combineReducers({
  book: bookReducer,
  note: noteReducer,
})

export default rootReducer