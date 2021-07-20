import React, { Component } from 'react';

import BasicInfo from './BasicInfo';
import ResearchParameters from './ResearchParameters';

import ButtonSubmit from './ButtonSubmit';

class Form extends Component {

    render() {

        return (

            <form className="needs-validation" action="" noValidate>

                <div className="text-right py-1 border-bottom my-2 narrow text-right">
                    <p>
                        <span className="text-danger mx-1" aria-hidden="true">*</span>
                        <span className="text-muted fs-md">
                            Required Fields
                        </span>
                    </p>
                </div>

                <BasicInfo />

                <hr className="narrow border-dark" />

                <ResearchParameters />
                
                <ButtonSubmit disabled="false" />

            </form>
        )
    }
}

export default Form;
