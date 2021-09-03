import React, { useReducer } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';

import {
    GET_CART,
    RECORD_TYPE
} from '../types';
 
const CartState = (props) => {

    const initialState = {
        record: null,
        cart: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const selectRecordType = (record) => {

        dispatch({ 
            type: RECORD_TYPE,
            payload: record
        });

    }

    const updateCart = (items) => {

        dispatch({ 
            type: GET_CART,
            payload: items
        });
    }

    return (
        <CartContext.Provider
            value={{
                record: state.record,
                cart: state.cart,
                selectRecordType,
                updateCart
            }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartState;