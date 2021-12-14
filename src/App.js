import './App.css';
import Navbar from './layouts/Navbar.js';
import Header from './layouts/Header.js';
import Herosection from './layouts/Herosection';
import Section from './layouts/Section';
import Sectionrev from './layouts/Sectionrev';
import Sectionmid from './layouts/Sectionmid';
import Footer from './layouts/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Section></Section>
      <Sectionrev></Sectionrev>
      <Section></Section>
      <Sectionmid></Sectionmid>
      <Footer></Footer>
    </div>
  );
}

export default App;
