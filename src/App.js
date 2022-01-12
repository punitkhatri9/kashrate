import { Router } from "@reach/router";

import Cards from './pages/Cards';
import Form from './pages/Form';
import Homeloan from "./pages/Homeloan";
import Homepage from './pages/Homepage';
import Insurance from './pages/Insurance';
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
        <Homeloan path="homeloan"></Homeloan>
      </Router>
    </div>
  );
}

export default App;
