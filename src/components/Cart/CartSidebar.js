import React, { useContext, useEffect } from 'react';

import CartItem from './CartItem';

// Context

import CartContext from '../../context/cart/cartContext';

const CartSidebar = () => {

    // Initialize Context
    const cartContext = useContext(CartContext);

    const { cart } = cartContext;

    let cardContent;

    useEffect(() => {
        console.log(`Whoa ${cart}`);
        

        const initCardBody = () => {

            if(cart === []) {
                
                return (
                    <p className="card-text">
                    Your cart is empty.
                    </p> 
                );
                
            } else {
                return (
                    <p className="card-text">
                        {cart}
                    </p> 
                );

            }

        };

            // cardContent = `  `
          

        // eslint-disable-next-line
    }, [cart]);

    return (
        <div className="card bg-light rounded overflow-hidden">

            <div className="card-header text-primary border-bottom">
                <span className="fas fa-shopping-cart"></span>
                <strong className="mx-1">Order Details</strong>
            </div>

            <div className="card-body fs-md">

            {cart === [] ? (
                <p>cool</p>
            ) : (
                <p>not cool</p>
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