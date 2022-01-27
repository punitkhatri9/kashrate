import React from 'react';

import CarouselImages from '../../Components/CarouselImages';
import Herosection from '../../Components/Herosection';
import HeroWithImgage from '../../Components/HeroWithImage';
import Layout from '../../Layout';
import Epsection2 from './epsection2';
import Epsection1 from './epsection1';

const Manageprofile = () => {

   
    return (
        <div>
            <Layout>

                

                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-xl w-1/2 border-b-2 p-2 border-black font-bold divide-y text-gray-800 capitalize dark:text-white">Manage Your Profile</h1>
                    
                </div>
       
                <section className="bg-white dark:bg-gray-800">
            <div className="container py-6 mx-auto">
                <div className="items-center lg:flex">

                    <div className='flex-wrap w-9/12'>
                    
                        <div className="flex w-5/6 mx-8 my-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="w-2 bg-gray-800 dark:bg-gray-900" />
                            
                            <div className="flex-wrap items-center px-3 py-3">
                            
                                       <div className='flex flex-col '>
                                      
                                    <h1 className='p-3'>@ Email Address</h1>
                               
                                        <div className="mx-3 ">
                                            <p className="font-bold text-gray-600 dark:text-gray-200">@ Add Birthday</p>
                                        </div>
                                        <div className="mx-3 mt-3">
                                            <p className="text-gray-600 dark:text-gray-200">@ Add Gender</p>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>

                        <div className='px-6'>
                                    <h1>@ Contact Info</h1>
                                    <h3 className='text-xvs'>Your frequently used contact inforamation</h3>
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

export default Manageprofile;