import React, { Component } from 'react'
import DimSumItem from './DimSumItem'

class DimSumList extends Component{

  render (){
    return (

          <ul>
          {
            this.props.dim_sum_list.map( (dim_sum)=>{
              return <DimSumItem dispatch={this.props.dispatch} dim_sum={dim_sum}/>
            })
          }
          </ul>

      )
  }
}

export default DimSumList
