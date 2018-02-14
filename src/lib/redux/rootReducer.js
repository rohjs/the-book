import { combineReducers } from 'redux'
import routeReducer from './route/reducer'
import noteReducer from './note/reducer'
import pageReducer from './page/reducer'

const rootReducer = combineReducers({
  route: routeReducer,
  notes: noteReducer,
  pages: pageReducer,
})

export default rootReducer