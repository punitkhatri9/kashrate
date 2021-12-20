
import Navbar from '../Layout/Navbar';
import Header from '../Layout/Header';
import HeroCategory from '../Layout/HeroCategory';
import Section from '../Layout/Section';
import Sectionrev from '../Layout/Sectionrev';
import Sectionmid from '../Layout/Sectionmid';
import Footer from  '../Layout/Footer';
import Layout from  '../Layout';
import Section1 from '../Layout/Section1';
function Insurance() {
  return (
    <div>
      
      <Layout>
      <HeroCategory></HeroCategory>
      {/* <Section></Section> */}
      <Section1></Section1>
      <Sectionrev></Sectionrev>
      <Section></Section>
      <Sectionmid></Sectionmid>
      </Layout>
      
     
     
      
    </div>
  );
}

export default Insurance;