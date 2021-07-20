import React from 'react';

const ResearchParameters = () => {

    return (

        <div className="narrow my-5" id="research-parameters">

            <div className="introduction my-4">
                
                <h2>Research Parameters</h2>
                
                <p>
                    If a certificate number is not provided in Basic Information, your order will be handled
                    as a research service. You may want us to expand the search to other boroughs or years.
                </p>
                
            </div>
            
            <div className="form-group" aria-labelledby="select-additional-boroughs">
                
                <p className="label" id="select-additional-boroughs">
                    Additional boroughs to search
                    <span className="help-text">
                        There is a $2 fee per additional borough
                    </span>
                </p>

                <p className="invalid-feedback">
                    <span className="fas fa-exclamation-triangle" aria-hidden="true"></span>
                    <span className="invalid-description">Error message description</span>
                    <span className="invalid-instruction">How to fix instructions</span>
                </p>
                
                <ul className="extensible-list">
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="additional-boroug-bronx" />
                            <label className="custom-control-label" htmlFor="additional-boroug-bronx">Bronx</label>
                        </div>
                    </li>

                    <li>
                        <div className="custom-control custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="additional-boroug-brooklyn" />
                            <label className="custom-control-label" htmlFor="additional-boroug-brooklyn">Brooklyn</label>
                        </div>
                    </li>

                    <li>
                        <div className="custom-control custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="additional-boroug-manhattan" />
                            <label className="custom-control-label" htmlFor="additional-boroug-manhattan">Manhattan</label>
                        </div>
                    </li>

                    <li>
                        <div className="custom-control custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="additional-boroug-staten-island" />
                            <label className="custom-control-label" htmlFor="additional-boroug-staten-island">Staten Island</label>
                        </div>
                    </li>

                    <li>
                        <div className="custom-control custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="additional-boroug-queens" />
                            <label className="custom-control-label" htmlFor="additional-boroug-queens">Queens</label>
                        </div>
                    </li>                    
                    
                </ul>
                
            </div>
            
            <div className="form-group">
                
                <p className="label" id="select-additional-years">
                    Additional years to Search
                    <span className="help-text">
                        There is a $2 fee per additional year
                    </span>
                </p>

                <div className="additional-year-search">

                    <div className="additional-year-search__input">
                        <input type="text" className="form-control form-control-lg rounded" placeholder="YYYY" />
                        <button className="no-btn-style" type="button" title="Remove">
                            <span className="sr-only">Remove</span>
                            <span className="fas fa-trash"></span>
                        </button>
                    </div>

                    <button className="btn btn-primary has-icon rounded mt-2" type="button">
                        <span className="fas fa-plus" ></span>
                        <span className="title">Add Year</span>
                    </button>

                </div>
                
            </div>
                                    
        </div>
    )
}

export default ResearchParameters;
