import React from 'react';

const CartCheckout = () => {
    return (
        <div className="container-fluid wide">

            <div className="container medium overflow-hidden">

                <div className="my-5">

                    <h2>
                        Order Confirmation
                    </h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                
                    <ul className="list-group list-group-flush mx-n2" id="order-detail-aside">
                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                Order Number (CPY Number)
                            </span>
                            <span>
                               <strong>XXXXX</strong> 
                            </span>
                        </li>
                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                Letter
                            </span>
                            <span>
                               X 
                            </span>
                        </li>
                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                Number of Copies
                            </span>
                            <span>
                                1
                            </span>
                        </li>

                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                Certificate Number
                            </span>
                            <span>
                                XXXXX
                            </span>
                        </li>

                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                Last Name
                            </span>
                            <span>
                                Doe
                            </span>
                        </li>

                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                First Name
                            </span>
                            <span>
                                Jane
                            </span>
                        </li>
                        <li className="list-group-item bg-transparent d-flex justify-content-between">
                            <span>
                                Year
                            </span>
                            <span>
                                1957
                            </span>
                        </li>

                    </ul>

                </div>

                <hr className="border-dark" />

                <div className="my-5">
                    <h3 className="h4">
                        Check Your Email
                    </h3>
                    <p>Eius mollitia est repellat debitis architecto ut <strong><em>yourname@fakemail.com</em></strong>.</p>
                </div>

            </div>


        </div>
    )
}

export default CartCheckout;