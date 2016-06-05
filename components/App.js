import React, { Component } from 'react'
import TextInput from './TextInput'
import DimSumList from './DimSumList'
import { connect } from 'react-redux'

class App extends Component{
  render (){
    return(
    <div>
      <TextInput dispatch={this.props.dispatch}/>
      <DimSumList dim_sum_list={this.props.dim_sum_ordered}/>
    </div>
    )
  }
}

//connect calls and throws in state,
function mapStateToProps(state){
  return state //the app component gets all of the state
}

//exported app with state as props
export default connect(mapStateToProps)(App)
