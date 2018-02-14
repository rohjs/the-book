import { combineReducers } from 'redux'
import routeReducer from './route/reducer'
import noteReducer from './note/reducer'
import pageReducer from './page/reducer'

const rootReducer = combineReducers({
  route: routeReducer,
  note: noteReducer,
  page: pageReducer,
})

export default rootReducer