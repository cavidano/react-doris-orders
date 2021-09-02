import React, { Fragment, useContext, useEffect, useState } from 'react';

import CartItem from './CartItem';

// Context

import CartContext from '../../context/cart/cartContext';

const CartSidebar = () => {

    // Initialize Context
    const cartContext = useContext(CartContext);

    const { cart } = cartContext;

    // use State

    const [cartDis, setCartDis] = useState('');

    useEffect(() => {

        if(cart.length){
            setCartDis(cart);  
        } 

        // eslint-disable-next-line
    }, [cart]);

    return (
        <div className="card bg-light rounded overflow-hidden">

            <div className="card-header text-primary border-bottom">
                <span className="fas fa-shopping-cart"></span>
                <strong className="mx-1">Order Details</strong>
            </div>

            <div className="card-body fs-md">

                {cartDis === '' ? (
                    <p>Your Cart is empty.</p>
                ) : (
                    <ul className="list-group list-group-flush mx-n2" id="order-detail-aside">
                        <CartItem title={cartDis} cost="18" />
                    </ul>
                )}

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