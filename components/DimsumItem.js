import React, { Component } from 'react'
import actions from './../redux/actions'


class DimSumItem extends Component {

    handleArrived(){
        console.log("order arrived");
        this.props.markDimSum(this.props.dim_sum.id);

    }

    handleCancel(){
        console.log("cancel order")
        this.props.cancelDimSum(this.props.dim_sum.id);
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
