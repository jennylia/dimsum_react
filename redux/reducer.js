function getId(state){
  //think about another way to implement this function, maybe
  //code the max id as a part of the state
  return state.dim_sum_ordered.reduce((maxId,dim_sum) =>{
    return Math.max(dim_sum.id, maxId), -1
  }) + 1
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_DIM_SUM':
      // don't do state.dimsums.push something like that
      Object.assign({}, state, {
        dim_sum_ordered: [{
          //adding the new dim sum
          name: action.name,
          delivered: false,
          id: getId(state)
        }, ...state.dim_sum_ordered]
      })
      break;
    default:
      return state;

  }
}
