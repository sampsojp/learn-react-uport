import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// edited due to error - see https://github.com/truffle-box/react-auth-box/issues/21
import { Provider } from 'react-redux'
import store from './store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render((
      <Provider store={store}>
        <App />
      </Provider>
    ),
    div
  )
})
