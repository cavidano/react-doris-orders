// Types

import {
    RECORD_TYPE,
    GET_CART
} from '../types';

// State

export default (state, action) => {
    switch(action.type){
        case RECORD_TYPE:
            return {
                ...state,
                record: action.payload,
            }
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
            }
        default: 
        return state
    }

}