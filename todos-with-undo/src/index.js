import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

// Providerは親domとstoreを持つ
render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)