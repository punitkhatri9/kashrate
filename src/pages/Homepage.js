import React from 'react';
import Navbar from '../Layout/Navbar';
import Header from '../Layout/Header';
import Herosection from '../Layout/Herosection';
import Section from '../Layout/Section';
import Sectionrev from '../Layout/Sectionrev';
import Sectionmid from '../Layout/Sectionmid';
//import Footer from  '../Layout/Footer';
import Layout from '../Layout';

const Homepage =() =>{
  return ( 
     <div>
      <Layout>
      <Herosection></Herosection>
      <Section></Section>
      <Sectionrev></Sectionrev>
      <Section></Section>
      <Sectionmid></Sectionmid>
      </Layout>
      
    </div> 
  );
}

export default Homepage;