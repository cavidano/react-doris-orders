import React from 'react';

import CartItem from './CartItem';

const CartSidebar = () => {

    let cartEmpty = true;

    return (
        <div className="card bg-light rounded overflow-hidden">

            <div className="card-header text-primary border-bottom">
                <span className="fas fa-shopping-cart"></span>
                <strong className="mx-1">Order Details</strong>
            </div>

            <div className="card-body fs-md">

            {/* Ternary operator */}

            {cartEmpty ?
                <p className="card-text">
                    Your cart is empty.
                </p> :
                <ul className="list-group list-group-flush mx-n2" id="order-detail-aside">
                    <CartItem title="Birth Certificate" cost="18" />
                    <CartItem title="Marriage Certificate" cost="24" />
                    <CartItem title="Cool, Carl" cost="16" />
                </ul>
            }

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