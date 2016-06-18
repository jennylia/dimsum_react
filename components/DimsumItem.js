import React, { Component } from 'react'


class DimSumItem extends Component{

    render (){
        return (

           <li key={this.props.dim_sum.id}>{this.props.dim_sum.name}</li>

        )
    }
}

export default DimSumItem
