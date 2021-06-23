// Components

import Header from './components/layout/Header';

// Global CSS File
import './theme.css';

// Font Awesome Icons


import nyc_bubble from './images/nyc-bubble-logo.svg' // relative path to image

function App() {
  return (
    <div className="App">
      <Header cool={nyc_bubble} />
    </div>
  );
}

export default App;