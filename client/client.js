import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

//configure and create the store here..reducers. initial state
let initialState = {
  dim_sum_ordered: [{
    id: 0,
    delivered: false,
    name: "shiu mai"
  }]
}

let store = configureStore(initialState)
render(
  <Provider store={store} >
    <App/>
  </Provider> ,
  document.getElementById('app'))
