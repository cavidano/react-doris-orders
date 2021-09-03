import React, { useReducer } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';

import {
    GET_CART
} from '../types';
 
const CartState = (props) => {

    const initialState = {
        cart: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const updateCart = (items) => {

        console.log(`My Cart Items = ${items}`);

        dispatch({ 
            type: GET_CART,
            payload: items
        });
    }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                updateCart
            }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartState;