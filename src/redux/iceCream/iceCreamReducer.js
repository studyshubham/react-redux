import { BUY_ICECREM } from "./iceCreamTypes";

initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREM: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer