
import './App.css';

// Font Awesome Icons

import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Lets go for a <FaBeer />?</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Hello, Carl
        </a>
      </header>
    </div>
  );
}

export default App;