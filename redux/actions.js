let actions = {
  add_dim_sum: function(name){
    return {
      type: 'ADD_DIM_SUM',
      name: name
    }
  }
}

export default actions
//store.dispatch(add_dim_sum('shrimp dumplings'))
