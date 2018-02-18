import { combineReducers } from 'redux'
import routeReducer from './route/reducer'
import dataReducer from './data/reducer'
import folderReducer from './folder/reducer'

const rootReducer = combineReducers({
  route: routeReducer,
  data: dataReducer,
  folder: folderReducer,
})

export default rootReducer