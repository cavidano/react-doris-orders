import React, { useEffect, useContext } from 'react';

import BasicInfo from './BasicInfo';

import ResearchParameters from './ResearchParameters';
import OrderDetails from './OrderDetails';

import ButtonSubmit from './ButtonSubmit';

// Context

import CartContext from '../../context/cart/cartContext';

const Form = () => {

    // Initialize Context
    const cartContext = useContext(CartContext);

    const { cart } = cartContext;

        return (

            <form className="needs-validation" noValidate>

                <div className="text-right py-1 border-bottom my-2 narrow text-right">
                    <p>
                        <span className="text-danger mx-1" aria-hidden="true">*</span>
                        <span className="text-muted fs-md">
                            Required Fields
                        </span>
                    </p>
                </div>

                <p>hello?</p>

                <BasicInfo />

                {/* 

                <hr className="narrow border-dark" />

                <ResearchParameters />

                <OrderDetails />
                
                <ButtonSubmit disabled="false" />
*/}


            </form>
        )
}

export default Form;