import React, { Component } from 'react'


class DimSumItem extends Component {

    handleArrived(e){
        console.log("order arrived", e)
    }

    handleCancel(){
        console.log("cancel order")
    }
    render() {
        return (
            <div>
                <li key={this.props.dim_sum.id}>{this.props.dim_sum.name}</li>
                <button onClick={this.handleArrived.bind(this)}>Mark as arrived</button>
                <button onClick={this.handleCancel.bind(this)}>Cancel Order</button>
            </div>
        )
    }
}

export default DimSumItem
