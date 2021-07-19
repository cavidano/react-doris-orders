import React from 'react';

const CartCheckout = () => {
    return (
        
        <div className="container-fluid wide">

            <div className="container medium overflow-hidden">

                <div className="my-5">

                    <div className="form-group" aria-labelledby="select-gender">
                            
                        <p className="label" id="select-gender">
                            Select from Shipping Options Below
                            <span className="text-danger" aria-hidden="true">*</span>
                            <span className="help-text">
                                Vital Record orders must be shipped. In-person pick up is not available. 
                            </span>
                        </p>
                        
                        <p className="invalid-feedback">
                            <span className="fas fa-exclamation-triangle" aria-hidden="true"></span>
                            <span className="invalid-description">Error message description</span>
                            <span className="invalid-instruction">How to fix instructions</span>
                        </p>
                        
                        <ul className="extensible-list">
                            
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="gender-male" name="gender" required />
                                    <label className="custom-control-label" htmlFor="gender-male">Domestic</label>
                                </div>
                            </li>
                            
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="gender-female" name="gender" required />
                                    <label className="custom-control-label" htmlFor="gender-female">International</label>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </div>

                    <table className="table my-2" id="shopping-cart-table">
                        <caption className="sr-only">
                            Department of records Shopping Cart
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">Item Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remove</th>
                                <th scope="col">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Copy of Vital Record
                                </td>
                                <td>1</td>
                                <td>
                                    <button className="no-btn-style" type="button" title="Delete">
                                        <span className="sr-only">Delete</span>
                                        <span className="fas fa-trash"></span>
                                    </button>
                                </td>
                                <td>$18.00</td>
                            </tr>
                            <tr>
                                <td>
                                    Search Year: 1956
                                </td>
                                <td>1</td>
                                <td>
                                    <button className="no-btn-style" type="button" title="Delete">
                                        <span className="sr-only">Delete</span>
                                        <span className="fas fa-trash"></span>
                                    </button>
                                </td>
                                <td>$2.00</td>
                            </tr>
                            <tr>
                                <td>
                                    Search Year: 1957
                                </td>
                                <td>1</td>
                                <td>
                                    <button className="no-btn-style" type="button" title="Delete">
                                        <span className="sr-only">Delete</span>
                                        <span className="fas fa-trash"></span>
                                    </button>
                                </td>
                                <td>$2.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="font-weight-bold fs-lg text-primary">
                                <td colspan="3">
                                    Order Total
                                </td>
                                <td>$22.00</td>
                            </tr>
                        </tfoot>
                    </table>

                    <div className="row matrix-gutter my-2">
                        <div className="col-6">
                            <div className="input-group my-2">
                                <input type="text" className="form-control" placeholder="Promotional Code" aria-label="Promotional Code" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-secondary text-white">Apply</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="alert bg-light text-secondary fs-md rounded border-0 my-2" role="alert">

                        <div className="alert-heading h5">

                            <div>
                                <span className="fas fa-exclamation-circle"></span>
                                <span className="font-weight-bold mx-1">
                                    Shopping Cart Notice
                                </span>
                            </div>

                        </div>

                        <p className="alert-text">
                            Once the Checkout process begins, you cannot go back and modify your shopping cart.
                        </p>
                        
                    </div>

                    <div className="row matrix-gutter my-2">

                        <div className="col-md-6">
                            <button type="button" className="btn btn-lg rounded btn-block btn-outline-primary">
                                Continue Shopping
                            </button>
                        </div>

                        <div className="col-md-6">
                            <button type="button" className="btn btn-lg rounded btn-block btn-primary">
                                Checkout
                            </button>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
        
    )
}

export default CartCheckout;