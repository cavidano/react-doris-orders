import React from 'react';

const OrderItem = ({title, cost}) => {
    return (
        <li className="list-group-item bg-transparent d-flex justify-content-between">
            <span>
                {title}
            </span>
            <span>
                <button className="no-btn-style" type="button" title="Delete">
                    <span className="sr-only">Delete</span>
                    <span className="fas fa-trash"></span>
                </button>
            </span>
            <span>
                ${cost}.00
            </span>
        </li>
    );
}

export default OrderItem;