

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ADD_TO_DO':
             let aux = [...initialState, action.payload]
            return aux
        case 'DELETE_TASK':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'VALIDATE_TASK':
            return initialState.map(el => {

                if (el.id === action.payload) {
                    return {
                        ...el,
                        done: !el.done
                    }
                }
                return el


            }
            )


        default:
            return initialState;

    }
}