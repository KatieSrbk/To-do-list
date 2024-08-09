import { combineReducers } from '@reduxjs/toolkit'
import taskList from './slice/taskList'

const rootReducers = combineReducers({
  taskList,
})

export default rootReducers
