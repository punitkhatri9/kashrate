import React from 'react';

import CarouselImages from '../../Components/CarouselImages';
import Herosection from '../../Components/Herosection';
import HeroWithImgage from '../../Components/HeroWithImage';
import Layout from '../../Layout';
import Epsection2 from '../EditProfile/epsection2';
import Epsection1 from '../EditProfile/epsection1';

const AccountSetting = () => {

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

                

                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-xl w-1/2 border-b-2 p-2 border-black font-bold divide-y text-gray-800 capitalize dark:text-white">Account Settings</h1>
                    
                </div>
       
                <section className="bg-white dark:bg-gray-800">
            <div className="container py-6 mx-auto">
                <div className="items-center lg:flex">

                    <div className='flex-wrap w-9/12'>
                    <div className='px-6'>
                                    <h1>@ Email Address</h1>
                                </div>
                        <div className="flex w-5/6 mx-8 my-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="w-2 bg-gray-800 dark:bg-gray-900" />
                            
                            <div className="flex-wrap items-center px-3 py-3">
                                       <div className='flex flex-col '>
                                        <div className="mx-3 ">
                                            <p className="font-bold text-gray-600 dark:text-gray-200">abcxyz@gmail.com</p>
                                        </div>
                                        <div className="mx-3 mt-3">
                                            <p className="text-gray-600 dark:text-gray-200">This email will be used for login</p>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>

                        <div className='px-6'>
                                    <h1>@ Password</h1>
                                </div>
                        <div className="flex w-5/6 mx-8 my-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="w-2 bg-gray-800 dark:bg-gray-900" />
                            
                            <div className="flex-wrap items-center px-3 py-3">
                                       <div className='flex flex-col '>
                                        <div className="mx-3 ">
                                            <p className="font-bold text-gray-600 dark:text-gray-200">abcxyz@gmail.com</p>
                                        </div>
                                        <div className="mx-3 mt-3">
                                            <p className="text-gray-600 dark:text-gray-200">********</p>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>

                    

                     

                    </div>
                </div>
            </div>
        </section>
                

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

export default AccountSetting;