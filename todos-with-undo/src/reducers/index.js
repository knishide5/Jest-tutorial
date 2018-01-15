import { combineReducers } from 'redux'
import todos from './todos'
import setVisibleFilter from './setVisibleFilter'

const todoApp = combineReducers({ todos, setVisibleFilter })
export default todoApp