import React, { Component } from 'react';

export class Form extends Component {
    render() {
        return (
            <form action="">

                <div className="text-right py-1 border-bottom my-2 narrow text-right">
                    <p>
                        <span className="text-danger" aria-hidden="true">*</span>
                        <span className="text-muted fs-md">
                            Required Fields
                        </span>
                    </p>
                </div>

                <div className="narrow my-5" id="basic-information">

                    <div className="introduction my-4">
                                    
                        <h2>Basic Information</h2>
                        
                        <p>
                            Copies of vital records can be purchased from the NYC Municipal Archives for a fee of <strong>$18.00 each</strong>. Extra charges
                            for research, letters of exemplification, and delivery method may apply.
                        </p>
                        
                    </div>

                    <div className="form-group" aria-labelledby="select-record-type">
                                
                        <p className="label" id="select-record-type">
                            What Type of Record Are You Looking For?
                            <span className="text-danger" aria-hidden="true">*</span>
                        </p>
                        
                        <p className="invalid-feedback">
                            <span className="fas fa-exclamation-triangle" aria-hidden="true"></span>
                            <span className="invalid-description">Error message description</span>
                            <span className="invalid-instruction">How to fix instructions</span>
                        </p>
                        
                        <ul className="extensible-list">
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="birth-certificate" name="type-of-record" required />
                                    <label className="custom-control-label" htmlFor="birth-certificate">Birth Certificate</label>
                                </div>
                            </li>
                            
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="death-certificate" name="type-of-record" required />
                                    <label className="custom-control-label" htmlFor="death-certificate">Death Certificate</label>
                                </div>
                            </li>
                            
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="marriage-certificate" name="type-of-record" required />
                                    <label className="custom-control-label" htmlFor="marriage-certificate">Marriage Certificate</label>
                                </div>
                            </li>
                            
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="marriage-license" name="type-of-record" required />
                                    <label className="custom-control-label" htmlFor="marriage-license">
                                        Marriage License
                                        <span className="help-text">
                                            Learn the difference between a <a href="https://www1.nyc.gov/site/records/about/frequently-asked-questions.page" target="_blank" rel="noopener noreferrer"> marriage license and certificate</a>. 
                                        </span>
                                    </label>
                                </div>
                            </li>
                            
                            <li>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="letter-of-exemplification" name="type-of-record" required />
                                    <label className="custom-control-label" htmlFor="letter-of-exemplification">
                                        Letter of Exemplification only
                                        <span className="help-text">
                                            (I already have my NYC vital record)
                                        </span>
                                    </label>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </div>
                    
                
                    <button class="btn btn-lg btn-block btn-primary rounded my-5" type="submit">
                                <span class="title">Add to Cart</span>
                            </button>
                
                </div>


            </form>
        )
    }
}

export default Form;
