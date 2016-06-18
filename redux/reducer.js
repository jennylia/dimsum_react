function getId(state) {
    //think about another way to implement this function, maybe
    //code the max id as a part of the state
    return state.dim_sum_ordered.reduce((maxId, todo) => {
            return Math.max(todo.id, maxId)
        }, -1) + 1
}

let reducer = function reducer(state, action) {
    switch (action.type) {
        case 'ADD_DIM_SUM':
            // don't do state.dimsums.push something like that
            return Object.assign({}, state, {
                dim_sum_ordered: [{
                    //adding the new dim sum
                    name: action.name,
                    delivered: false,
                    id: getId(state)
                }, ...state.dim_sum_ordered]
            })

        case 'MARK_DIM_SUM':

            return Object.assign({}, state, {
                dim_sum_ordered: state.dim_sum_ordered.map((dim_sum) => {
                    return dim_sum.id === action.id ?
                        Object.assign({}, dim_sum, {delivered: !dim_sum.delivered}) : dim_sum
                })
            })


        case 'CANCEL_DIM_SUM':
            return Object.assign({}, state, {
                dim_sum_ordered:  state.dim_sum_ordered.filter((dim_sum) => {
                    return dim_sum.id !== action.id
                })
            })

        default:
            return state;

    }
}

export default reducer
