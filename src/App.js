// Components

import Header from './components/Header/Header';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

// Global CSS File
import './theme.css';

// Font Awesome Icons

import nyc_bubble from './images/nyc-bubble-logo.svg' // relative path to image

function App() {

  return (
    <div className="App">

      <Header cool={nyc_bubble} />
    
      <main id="skip-header-content">

        <PageTitle />

        <div className="container-fluid wide">

            <div className="row">


                <div className="col-lg-9 overflow-hidden" id="primary-content">

                    <Form />

                </div>
                
                    
                <div className="col-lg-3 border-left">
                    
                    <div className="sticky-top py-2">
                        
                        <div className="card bg-light rounded overflow-hidden">

                            <div className="card-header text-primary border-bottom">
                                <span className="fas fa-shopping-cart"></span>
                                <strong className="mx-1">Order Details</strong>
                            </div>

                            <div className="card-body fs-md">

                                <p className="card-text d-none">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                
                                <ul className="list-group list-group-flush mx-n2" id="order-detail-aside">
                                    <li className="list-group-item bg-transparent d-flex justify-content-between">
                                        <span>
                                            Copy of Vital Record
                                        </span>
                                        <span>
                                            <button className="no-btn-style" type="button" title="Delete">
                                                <span className="sr-only">Delete</span>
                                                <span className="fas fa-trash" ></span>
                                            </button>
                                        </span>
                                        <span>
                                            $18.00
                                        </span>
                                    </li>
                                    <li className="list-group-item bg-transparent d-flex justify-content-between">
                                        <span>
                                            Search Year: 1956
                                        </span>
                                        <span>
                                            <button className="no-btn-style" type="button" title="Delete">
                                                <span className="sr-only">Delete</span>
                                                <span className="fas fa-trash" ></span>
                                            </button>
                                        </span>
                                        <span>
                                            $2.00
                                        </span>
                                    </li>
                                    <li className="list-group-item bg-transparent d-flex justify-content-between">
                                        <span>
                                            Search Year: 1957
                                        </span>
                                        <span>
                                            <button className="no-btn-style" type="button" title="Delete">
                                                <span className="sr-only">Delete</span>
                                                <span className="fas fa-trash" ></span>
                                            </button>
                                        </span>
                                        <span>
                                            $2.00
                                        </span>
                                    </li>
                                </ul>

                            </div>

                            <div className="card-footer fs-md font-weight-bold d-flex justify-content-between bg-secondary text-white">
                                <span>
                                    Subtotal:
                                </span>
                                <span>
                                    $22.00
                                </span>   
                            </div>

                        </div>

                    </div>
                    
                </div>
                

            </div>
            

        </div>
        
      </main>

      <Footer />
      
    </div>
  );
}

export default App;