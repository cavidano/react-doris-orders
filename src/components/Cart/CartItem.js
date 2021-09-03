import React from 'react';

const CartItem = ({title, cost}) => {
    return (
        <li className="list-group-item bg-transparent d-flex justify-content-between">
            <span>
                {title}
            </span>
            <span>
                <button className="no-btn-style fs-sm mx-1 d-none" type="button" title="Delete">
                    <span className="sr-only">Delete</span>
                    <span className="fas fa-trash "></span>
                </button>
                ${cost}.00
            </span>
        </li>
    );
}

export default CartItem;