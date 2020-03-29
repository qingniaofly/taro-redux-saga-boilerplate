import { combineReducers } from 'redux'
import app from '../reducers/app'

export default function createReducer(addReducers={}){
  const rootReducer = combineReducers({
    app,
    ...addReducers,
  })
  return rootReducer
}
