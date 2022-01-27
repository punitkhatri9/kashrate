import { Router } from "@reach/router";
import './App.css';
import Cards from './pages/Cards';
import Form from './pages/Form';
import Homeloan from "./pages/Homeloan";
import Homepage from './pages/Homepage';
import Insurance from './pages/Insurance';
import InsuranceFlow from './pages/InsuranceFlow';
import Dashboard from './pages/Dashboard';
import Editprofile from './pages/EditProfile';
import AccountSetting from './pages/AccountSetting';
import Manageprofile from './pages/EditProfile/Manageprofile';
import Login from './pages/Login';
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contactus";





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
        <Dashboard  path="dashboard"></Dashboard>
        <Editprofile  path="editprofile"></Editprofile>
        <AccountSetting  path="account"></AccountSetting>
        <Manageprofile  path="manageprofile"></Manageprofile>
        <Login  path="login"></Login>
        <Register path="register"></Register>
        <Aboutus path="aboutus"></Aboutus>
        <Contact path="contact"></Contact>
      </Router>
    </div>
  );
}

export default App;
