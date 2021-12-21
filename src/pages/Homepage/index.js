import React from 'react';

import Herosection from '../../Components/Herosection';
import Section from '../../Components/Section';
import Sectionrev from '../../Components/Sectionrev';
import Sectionmid from '../../Components/Sectionmid';
import Layout  from '../../Layout'

const Homepage = () => {
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