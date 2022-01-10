import { Router } from "@reach/router";

import Cards from './pages/Cards';
import Homepage from './pages/Homepage';
import Insurance from './pages/Insurance';
import Form from './pages/Form';
import InsuranceFlow from './pages/InsuranceFlow';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Homepage path="/" ></Homepage>
        <Insurance path="insurance"></Insurance>
        <Cards path="cards"></Cards>
        <Form path="forms"></Form>
        <InsuranceFlow path="insuranceflow"></InsuranceFlow>
      </Router>
    </div>
  );
}

export default App;
