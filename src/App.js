import './App.css';
import { Router } from "@reach/router";
import Homepage from './pages/Homepage';
import Insurance from './pages/Insurance';
import Cards from './pages/Cards';

function App() {
  return (
    <div>
      <Router>
      <Homepage path="/" ></Homepage>
      <Insurance path="/insurance"></Insurance>
      <Cards path="/cards"></Cards>
      </Router>
    </div>
  );
}

export default App;
