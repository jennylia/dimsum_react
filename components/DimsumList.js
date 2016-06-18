import React, { Component } from 'react'


class DimSumList extends Component{

  render (){
    return (

          <ul>
          {
            this.props.dim_sum_list.map( (dim_sum)=>{
              return <DimSumItem dim_sum={dim_sum}/>
            })
          }
          </ul>

      )
  }
}

export default DimSumList
