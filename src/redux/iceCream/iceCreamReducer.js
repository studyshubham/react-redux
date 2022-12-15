import { BUY_ICECREM } from "./iceCreamTypes";

initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREM: return {
            ...state,
            numOfIceCreams: state.numOfCakes - 1
        }
        default: return state
    }
}

export default iceCreamReducer