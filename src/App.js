// Components

import Header from './components/Header';
import PageTitle from './components/PageTitle';
import Form from './components/Form';
import Footer from './components/Footer';

import OrderSidebar from './components/OrderDetails/OrderSidebar';

// Global CSS File
import './theme.css';

// Font Awesome Icons

function App() {

  return (
    <div className="App">

      <Header />
    
      <main id="skip-header-content">

        <PageTitle />

        <div className="container-fluid wide">

            <div className="row">

                <div className="col-lg-9 overflow-hidden" id="primary-content">

                    <Form />

                </div>
                    
                <div className="col-lg-3 border-left">
                    
                    <div className="sticky-top py-2">

                        <OrderSidebar />

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