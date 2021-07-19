import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form';
import CartCheckout from './components/Cart/Cart';
import CartSidebar from './components/Cart/CartSidebar';

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

              <Route exact path="/" render={() => (

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
            
              <Route exact path="/cart" render={() => (
                
                <Fragment>
                  <PageTitle title="Thank You" />
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