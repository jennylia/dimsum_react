export default actions = {
  addDimSum(name){
    return {
      type: 'ADD_DIM_SUM',
      name: name
    }
  }
}

store.dispatch(addDimSum('shrimp dumplings'))
