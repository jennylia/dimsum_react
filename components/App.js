import React, { Component } from 'react'
import TextInput from './TextInput'
import DimSumList from './DimSumList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../redux/actions'

class App extends Component{
  render (){
    return(
    <div>
      <TextInput addDimSum={this.props.actions.add_dim_sum}/>
      <DimSumList markDimSum={this.props.actions.mark_dim_sum}
                  cancelDimSum={this.props.actions.cancel_dim_sum}
                  dim_sum_list={this.props.dim_sum_ordered}/>
    </div>
    )
  }
}

//connect calls and throws in state,
function mapStateToProps(state){
  return state //the app component gets all of the state
}

function mapDispatchToProps(dispatch)
{
  //creates wrappers around each of the actions with their dispatcher of the same name
  return {actions : bindActionCreators(actions, dispatch)};
}
//exported app with state as props // dipatch comes from the store, connect it to the app
export default connect(mapStateToProps,mapDispatchToProps)(App)
