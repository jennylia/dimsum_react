import React, { Component } from 'react'


class DimSumList extends Component{

  render (){
    return (

          <ul>
          {
            this.props.dim_sum_list.map( (dim_sum)=>{
              return <li key={dim_sum.id}>{dim_sum.name}</li>
            })
          }
          </ul>

      )
  }
}

export default DimSumList
