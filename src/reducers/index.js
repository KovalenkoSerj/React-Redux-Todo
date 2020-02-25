import { combineReducers } from 'redux';
import { task } from './task'
import { filterTasks } from './filter'

export const rootReducer = combineReducers({
    task,
    filterTasks
})