import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

//middlewear



export default function configureStore(initialState = {dim_sum_ordered: []}) {
  return finalCreateStore(reducer, initialState)
}
