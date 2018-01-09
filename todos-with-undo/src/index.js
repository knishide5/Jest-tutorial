import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import {addTodo} from './actions'
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
store.dispatch(addTodo('Hello World!'))
console.log(store.getState())