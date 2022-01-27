import React from 'react'
import CarouselImages from '../../Components/CarouselImages';

function epsection2() {
    return (

        <section className="container py-6 mx-auto bg-white dark:bg-gray-800">


            <div className="flex-col bg-white w-5/3 lg:flex p-auto">
                
                <h1 className="p-5 mx-20 text-xl font-bold ">
                    Contact Number
                </h1>
                
                <div className="h-24 mx-20 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" >
                    <h1 className="py-8 text-xl font-bold text-center ">
                        + Add Contact Number
                    </h1>
                </div>

                <div className="flex items-center px-2 py-10 mx-20">
                    
                    <img className="object-cover w-20 h-20 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />

                    <div className='flex flex-col '>
                        <div className="mx-3 ">
                            <p className="font-bold text-gray-600 dark:text-gray-200">Add Your Personal Details<a className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"> here</a>.</p>
                        </div>
                        <div className="mx-3 mt-3 ">
                            <p className="text-gray-600 dark:text-gray-200">Add Details</p>
                        </div>
                    </div>
                </div>

                <div className="h-24 mx-20 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" >
                    <h1 className="py-8 text-xl font-bold text-center ">
                        + Add Contact Number
                    </h1>
                </div>

            </div>



            {/* <style dangerouslySetInnerHTML={{__html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} /> */}



        </section>
    )
}

export default epsection2;

