import React, { Component } from 'react'
import actions from './../redux/actions'

class TextInput extends Component{
  constructor(props, context){
    super(props, context)
    this.state ={
      InputText: 'Which dim sum',
      FooterText: 'All rights reserved'
    }
  }

  handleChange(event) {
    this.setState({
      InputText: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault(); // this prevents regresh
    this.props.dispatch(actions.add_dim_sum(this.state.InputText))

  }

  render (){
    return (<div>
      <input value={this.state.InputText}
      onChange={this.handleChange.bind(this)}/>
      <button onClick={this.handleSubmit.bind(this)} type="button">Add a dim sum</button>

      </div>)
  }
}

export default TextInput
