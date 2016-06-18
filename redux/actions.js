let actions = {
  add_dim_sum: function(name){
    return {
      type: 'ADD_DIM_SUM',
      name: name
    }
  },
  mark_dim_sum: function(id){
    return {
      type: 'MARK_DIM_SUM',
      id : id,
    }
  },
  cancel_dim_sum: function(id){
    return {
      type: 'CANCEL_DIM_SUM',
      id : id,
    }
  }

}

export default actions
//store.dispatch(add_dim_sum('shrimp dumplings'))
