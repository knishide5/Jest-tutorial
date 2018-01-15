import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import {addTodo, toggleTodo, setVisibleFilter} from './actions'
import App from './components/App'

// reducerをstoreに渡す
let store = createStore(todo)

// Providerは親domとstoreを持つ
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(addTodo('Hello World!'))
store.dispatch(addTodo('Hello Redux!'))
console.log(store.getState())
store.dispatch(setVisibleFilter('SHOW_COMPLETED'))
console.log(store.getState())