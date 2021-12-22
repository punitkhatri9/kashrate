import { Router } from "@reach/router";

import Cards from './pages/Cards';
import Homepage from './pages/Homepage';
import Insurance from './pages/Insurance';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Homepage path="/" ></Homepage>
        <Insurance path="insurance"></Insurance>
        <Cards path="cards"></Cards>
      </Router>
    </div>
  );
}

export default App;
