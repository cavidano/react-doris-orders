import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from './components/Header';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';
import Form from './components/Form';
import CartSidebar from './components/Cart/CartSidebar';
import CartCheckout from './components/Cart/CartCheckout';

// Global CSS File
import './theme.css';

class App extends Component {

  // async componentDidMount() {}

  render(){
    
    return (
      <Router>
        
        <div className="App">

          <Header agencyName="Department of Records" />
        
          <main id="skip-header-content">

            <Switch>

              <Route exact path="/" render={(props) => (

              <Fragment>

                <PageTitle title="Order Vital Records" />

                <div className="container-fluid wide">

                    <div className="row">

                        <div className="col-lg-9 overflow-hidden" id="primary-content">

                            <Form />

                        </div>
                            
                        <div className="col-lg-3 border-left">
                            
                            <div className="sticky-top py-2">

                                <CartSidebar />

                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
              
              </Fragment>

              )} />
            
              <Route exact path="/cart" render={(props) => (
                
                <Fragment>
                  <PageTitle title="Cool Cart" />
                  <CartCheckout />
                </Fragment>

              )} />
              
            </Switch>

          </main>

          <Footer />
          
        </div>
    
      </Router>);
  
  };

}

export default App;