const ADD_COUNT = "ADD_COUNT";
const MINUS_COUNT = "MINUS_COUNT";
const initialState = {value:0}

export const changeCounter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            
            return {...state, value:state.value + action.payload}
    
        case MINUS_COUNT:
            return {...state, value:state.value - 1}

        default:
            return state;
    }
}

export const addCount = (payload) => ({ type: ADD_COUNT, payload });
export const minusCount = () => ({ type: MINUS_COUNT });
