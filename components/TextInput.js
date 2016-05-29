import React, { Component } from 'react'
import Footer from './Footer'
import DataEntry from './DataEntry'

class TextInput extends Component{
  constructor(props, context){
    super(props, context)
    this.state ={
      InputText: 'hello world',
      FooterText: 'All rights reserved'
    }
  }

  handleChange(event) {
    this.setState({
      InputText: event.target.value
    })
  }

  render (){
    return (<div>
      <input value={this.state.InputText}
      onChange={this.handleChange.bind(this)}/>
      <Footer displayText={this.state.FooterText}/>
      <DataEntry displayText={this.state.InputText}/>

      </div>)
  }
}

export default TextInput
