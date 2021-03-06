// Types

import {
    GET_CART
} from '../types';

// State

export default (state, action) => {
    switch(action.type){
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
            }
        default: 
        return state
    }

}