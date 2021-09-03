import React, { useContext, useState, useEffect } from 'react';

import CartItem from './CartItem';

// Context

import CartContext from '../../context/cart/cartContext';

const CartSidebar = () => {

    // Context

    const cartContext = useContext(CartContext);
    const { record } = cartContext;

    // State

    const [orderDetails, setOrderDetails] = useState('');

    // Effect
    useEffect(() => {
        console.log(`What's the Record Type? It's ${record}`);
        if(record !== null){
            setOrderDetails(record);  
        } 
    }, [record]);

    return (
        <div className="card bg-light rounded overflow-hidden">

            <div className="card-header text-primary border-bottom">
                <span className="fas fa-shopping-cart"></span>
                <strong className="mx-1">Order Details</strong>
            </div>

            <div className="card-body fs-md">

                <ul className="list-group list-group-flush mx-n2">

                    {orderDetails === '' ? (
                        <li className="list-group-item bg-transparent">
                            <span>Your cart is empty.</span>
                        </li>
                    ) : (
                        <CartItem title={record} cost="25" />
                    )}

                </ul>

            </div>

            <div className="card-footer fs-md font-weight-bold d-flex justify-content-between bg-secondary text-white">
                <span>
                    Subtotal:
                </span>
                <span>
                    $0.00
                </span>   
            </div>

        </div>
    );
}

export default CartSidebar;