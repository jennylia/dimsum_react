import React, { Component } from 'react'

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
    console.log("submit clicked")
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
