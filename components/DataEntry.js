import React, { Component } from 'react'


class DateEntry extends Component{

  render (){
    return (<div>
    What was entered: {this.props.displayText}
      </div>)
  }
}

export default DateEntry
