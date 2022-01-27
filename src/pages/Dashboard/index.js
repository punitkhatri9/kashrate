import React from 'react';

import CarouselImages from '../../Components/CarouselImages';
import Herosection from '../../Components/Herosection';
import HeroWithImgage from '../../Components/HeroWithImage';
import Layout from '../../Layout';
import Dbsection1 from '../Dashboard/dbsection1';
import Dbsection2 from '../Dashboard/dbsection2';

const Dashboard = () => {

    let heros = [
        {
            "title": "Home loan deals with low interest that suits your needs",
            "subtitle": "Avail Pre-Approved Home Loan Sanction letter Exclusively for ICICI Bank Customers. Get Home Loan with Special Processing Offer and Zero Documentation.",
            "src": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80",
            "reverse": true
        },
        {
            "title": "Get Healthcare Coverage, Health Insurance Marketplace",
            "subtitle": "Hassle Free Process. 59 Critical Illness Cover. Covers upto 80 Years. 24 x 7 Claim Assistance. Tax Benefits u/s 80 C. Tax Benefits on Premium. Family Protection Plans.",
            src: "https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "reverse": false
        },
        {
            "title": "Car Loan - Compare Best Interest Rate Online @ 7%,",
            "subtitle": "With upto 100% financing on select vehicles, Drive your dream Car with HDFC Bank. Enjoy Quick Approval, Flexible EMIs, Instant disbursal & No Hidden Cost",
            "reverse": true,
            src: "https://images.unsplash.com/photo-1511837008003-71eca36ceb70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
    ];
    return (
        <div>
            <Layout>

                <Herosection></Herosection>

                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">Welcome back, Deven <br /> make the most of your  <span class="text-blue-500">acoutn by fillin in your Profile</span></h1>
                </div>

                <Dbsection1></Dbsection1>
                <Dbsection2></Dbsection2>

               <div class="container px-6 py-10 mx-auto">
                    <h1 className="text-sm font-semibold text-gray-800 capitalize dark:text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </h1>
                    <p className="pt-8 text-xs font-normal text-justify text-gray-800 capitalize dark:text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis  mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velconsequat sunt nostrudamet.
                    </p>
                    <p className="pt-8 text-xs font-normal text-justify text-gray-800 capitalize dark:text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis  mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim  non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim </p>
               </div>

            </Layout>
        </div>
    );
}

export default Dashboard;