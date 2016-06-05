import {createStore} from 'redux'
import reducer from './reducer'
//middlewear

export default function configureStore(initialState = {dim_sum_ordered: []}){
  return createStore(reducer, initialState);
}
