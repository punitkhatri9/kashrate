import React from 'react';

import HeroCategory from '../../Components/HeroCategory';
import Layout from '../../Layout';
import Compair from './Compair';

const Homeloan = () => {


    return (
        <div>
            <Layout>
                <HeroCategory></HeroCategory>

                <div className="container px-6 py-6 mx-auto">

                    {[...Array(17)].map((x, i) =>

                        <Compair key={i} className="inline-flex items-start justify-between p-6 mb-24 space-x-32 bg-blue-50 rounded-xl"></Compair>
                    )}
                </div>


            </Layout>
        </div >
    );
}

export default Homeloan;