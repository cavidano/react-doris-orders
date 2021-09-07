import React from 'react';

// Components
import BasicInfo from './BasicInfo';
import ResearchParameters from './ResearchParameters';
import OrderDetails from './OrderDetails';
import ButtonSubmit from './ButtonSubmit';

const Form = () => {
    
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

            <BasicInfo />

            <ResearchParameters />
            
            <hr className="narrow border-dark" />


            <OrderDetails />
            
            <ButtonSubmit disabled="false" />
            
            {/**/}

        </form>
    )
}

export default Form;