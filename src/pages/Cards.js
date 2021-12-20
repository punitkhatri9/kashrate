
import Navbar from '../Layout/Navbar';
import Header from '../Layout/Header';
import HeroCategory from '../Layout/HeroCategory';
import Section from '../Layout/Section';
import Sectionrev from '../Layout/Sectionrev';
import Sectionmid from '../Layout/Sectionmid';
import Footer from  '../Layout/Footer';

function Cards() {
  return (
    <div>
      
      <Header></Header>
      <Navbar></Navbar>
      <HeroCategory></HeroCategory>
      <Section></Section>
      <Sectionrev></Sectionrev>
      <Section></Section>
      <Sectionmid></Sectionmid>
      <Footer></Footer>
      
    </div>
  );
}

export default Cards;