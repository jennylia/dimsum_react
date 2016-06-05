export default actions = {
  add_dim_sum(name){
    return {
      type: 'ADD_DIM_SUM',
      name: name
    }
  }
}

//store.dispatch(add_dim_sum('shrimp dumplings'))
