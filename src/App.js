import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import CartSidebar from './components/Cart/CartSidebar';
import CartConfirm from './components/Cart/CartConfirm';

// Global CSS File

import './theme.css';

const App = () => {

  // Create State (Functional)

  // const getRecordType = () => {
  //   setRecordType('cool');
  // }
    
  return (
    
    <Router>
        
      <div className="App">

        <Header agencyName="Department of Records" />
      
        <main className="height-100vh" id="skip-header-content">

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
                <PageTitle title="Shopping Cart" />
                <Cart />
              </Fragment>

            )} />

            <Route exact path="/confirm" render={() => (
              
              <Fragment>
                <PageTitle title="Thank You" />
                <CartConfirm />
              </Fragment>

            )} />
            
          </Switch>

        </main>

        <Footer />
        
      </div>
    
    </Router>);

}

export default App;