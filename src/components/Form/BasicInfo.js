import React, { useContext } from 'react';

// Context

import CartContext from '../../context/cart/cartContext';

const BasicInfo = () => {

    const cartContext = useContext(CartContext);

    const { selectRecordType } = cartContext;
    
    const onChange = (e) => {
        selectRecordType([e.target.value]);
    } 

    return (
        <div className="narrow my-5" id="basic-information">

            <div className="introduction my-4">
                <h2>Basic Information</h2>
                <p>
                    Certified copies of vital records can be purchased for a fee of <strong>$18.00</strong> when certificate number is known. Extra charges for research, letters of exemplification, and delivery method may apply. 
                </p>
            </div>

            <div className="form-group" aria-labelledby="select-record-type">
                            
                <p className="label" id="select-record-type">
                    What Type of Record Are You Looking For?
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
                </p>
                
                <p className="invalid-feedback">
                    <span className="fas fa-exclamation-triangle" aria-hidden="true"></span>
                    <span className="invalid-description">Error message description</span>
                    <span className="invalid-instruction">How to fix instructions</span>
                </p>
                
                <ul className="extensible-list">
                    <li>
                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                id="birth-certificate"
                                name="type-of-record"
                                value="Birth Certificate"
                                onChange={onChange}
                                required 
                            />
                            <label className="custom-control-label" htmlFor="birth-certificate">Birth Certificate</label>
                        </div>
                    </li>
                    
                    <li>
                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                id="death-certificate"
                                name="type-of-record"
                                value="Death Certificate"
                                onChange={onChange}
                                required
                            />
                            <label className="custom-control-label" htmlFor="death-certificate">Death Certificate</label>
                        </div>
                    </li>
                    
                    <li>
                        <div className="custom-control custom-radio">
                            <input
                                type="radio" className="custom-control-input"
                                id="marriage-certificate"
                                name="type-of-record"
                                value="Marriage Certificate"
                                onChange={onChange}
                                required
                            />
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
            
            {/*        
            
            <div className="form-group">

                <label className="label" htmlFor="certificate-number">
                    <strong>Do You Know Your Certificate Number?</strong>
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
                    <span className="help-text">
                        Find out how to research certificate numbers on our <a href="#1">genealogy page</a>.
                    </span>
                </label>

                <ul className="extensible-list my-1">
                    <li>
                        <div className="custom-control custom-radio">
                            <input
                                className="custom-control-input"
                                type="radio"
                                id="certificate-number-yes"
                                name="know-certification-number"

                                required
                            />
                            <label className="custom-control-label" htmlFor="certificate-number-yes">Yes</label>
                        </div>
                    </li>
                    
                    <li>
                        <div className="custom-control custom-radio">
                            <input
                                className="custom-control-input"
                                type="radio"
                                id="certificate-number-no"
                                name="know-certification-number"
                                required
                            />
                            <label className="custom-control-label" htmlFor="certificate-number-no">
                                No
                                <span className="help-text">
                                    (research fees will apply)
                                </span>
                            </label>
                        </div>
                    </li>
                    
                </ul>
                
            </div>

            <div className="form-group">

                <label className="label" htmlFor="certificate-number">
                    <strong>Enter Certificate Number</strong>
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
                </label>

                <input type="text" className="form-control form-control-lg rounded" id="certificate-number" />

            </div>
                        
            <div className="form-group">
                
                <label htmlFor="select-event-borough">
                    <strong>Resubmission Note</strong>
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
                </label>
                
                <p className="invalid-feedback">
                    <span className="fas fa-exclamation-triangle" aria-hidden="true"></span>
                    <span className="invalid-description">Error message description</span>
                    <span className="invalid-instruction">How to fix instructions</span>
                </p>
                
                <select className="form-control form-control-lg rounded" id="select-event-borough" required>
                    <option value="">Select One...</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Staten Island">Staten Island</option>
                    <option value="Queens">Queens</option>
                </select>
            </div>
                        
            <div className="form-group">
                
                <p className="label">
                    Event Date
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
                </p>
                
                <div className="form-row">
                    <div className="col">
                        <select className="form-control form-control-lg rounded" required>
                            <option value="">Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control form-control-lg rounded" required>
                            <option value="">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control form-control-lg rounded" required>
                            <option value="">Year</option>
                            <option value="20XX">20XX</option>
                            <option value="19XX">19XX</option>
                        </select>
                    </div>
                </div>
                
            </div>
                        
            <div className="form-group" aria-labelledby="select-gender">
                            
                <p className="label" id="select-gender">
                    Gender of Individual on Certificate
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
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
                            <label className="custom-control-label" htmlFor="gender-male">Male</label>
                        </div>
                    </li>
                    
                    <li>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="gender-female" name="gender" required />
                            <label className="custom-control-label" htmlFor="gender-female">Female</label>
                        </div>
                    </li>
                    
                </ul>
                
            </div>
                        
            <div className="form-group">
                            
                <p className="label" id="enter-name-on-certificate">
                    Name on Certificate
                    <span className="text-danger mx-1" aria-hidden="true">*</span>
                </p>

                <p className="invalid-feedback">
                    <span className="fas fa-exclamation-triangle"></span>
                    <span className="invalid-description">Error message description</span>
                    <span className="invalid-instruction">How to fix instructions</span>
                </p>
                
                <div className="form-row">
                    <div className="col-6">
                        <label>First Name</label>
                        <input type="text" className="form-control form-control-lg rounded" required />
                    </div>
                    <div className="col-6">
                        <label>Middle Name</label>
                        <input type="text" className="form-control form-control-lg rounded" required />
                    </div>
                    <div className="col-12 mt-2">
                        <label>Last Name</label>
                        <input type="text" className="form-control form-control-lg rounded" required />
                    </div>
                </div>
                
            </div>

                */} 
        </div>
    );
}

export default BasicInfo;