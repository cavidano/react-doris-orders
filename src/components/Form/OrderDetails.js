import React from 'react';

const OrderDetails = () => {
    
    return (
        <div className="narrow my-5" id="order-details">

            <div className="introduction my-4">
                
                <h2>Order Details</h2>
                
                <p>
                    Letters of Exemplification and Raised Seal Certifications can only be provided when the
                    order is fulfilled by "Print and Mail" delivery method. If a search has been completed
                    and a record was not found, a certified “Not Found” statement will be provided.
                </p>
                
            </div>
                        
            <div className="form-group" aria-labelledby="select-number-of-copies">
                
                <p className="label" id="select-number-of-copies">
                    Number of Copies
                    <span className="text-danger" aria-hidden="true">*</span>
                </p>

                <p className="invalid-feedback">
                    <span className="fas fa-exclamation-triangle" aria-hidden="true"></span>
                    <span className="invalid-description">Error message description</span>
                    <span className="invalid-instruction">How to fix instructions</span>
                </p>
                
                <select className="form-control form-control-lg rounded" id="number-of-copies" required>
                    <option value="">Select number of copies</option>
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                
            </div>

            <div className="form-group" aria-labelledby="select-delivery-method">
                
                <p className="label" id="select-delivery-method">
                    Delivery Method
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
                            <input type="radio" className="custom-control-input" id="print-and-mail" name="delivery-method" required />
                            <label className="custom-control-label" for="print-and-mail">Print and mail</label>
                        </div>
                    </li>
                    
                    <li>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="email-pdf" name="delivery-method" required />
                            <label className="custom-control-label" for="email-pdf">Email PDF</label>
                        </div>
                    </li>
                    
                </ul>
                
            </div>

            <div className="form-group" aria-labelledby="select-letter-of-exemplification">
                
                <p className="label" id="select-letter-of-exemplification">
                    Do you need a <a href="#1">letter of exemplification</a>?
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
                            <input type="radio" className="custom-control-input" id="letter-of-exemplification-yes" name="letter-of-exemplification" required />
                            <label className="custom-control-label" for="letter-of-exemplification-yes">Yes</label>
                        </div>
                    </li>
                    
                    <li>
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="letter-of-exemplification-no" name="letter-of-exemplification" required />
                            <label className="custom-control-label" for="letter-of-exemplification-no">No</label>
                        </div>
                    </li>
                    
                </ul>
                
            </div>

            <div className="form-group">

                <div className="wrap-file-input">

                    <p className="label">
                        Upload your NYC Vital Record document
                        <span className="text-danger" aria-hidden="true">*</span>
                    </p>

                    <input className="input-file sr-only" type="file" name="upload-vital-record" id="upload-vital-record" aria-describedby="upload-vital-record-sr-info" />
                    
                    <label className="file-input-label text-center" for="upload-vital-record">
                        <span className="file-choose btn btn-light text-primary">
                            <span className="fas fa-file-upload fa-lg"></span>
                            <span className="title mx-1">Upload File</span>
                        </span>
                        <span className="file-name">No file selected</span>
                    </label>
                    
                    <span className="help-text">
                        PDF or JPG files only
                    </span>

                    <small className="text-muted sr-only" id="upload-vital-record-sr-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit quod neque quibusdam.
                    </small>

                </div>

            </div>
            
        </div>
    )
}

export default OrderDetails;