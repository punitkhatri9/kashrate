import { Link } from '@reach/router';
import React from 'react'

function Dbsection1() {
    return (

    <section className="bg-white dark:bg-gray-800">
    <div className="container py-6 mx-auto">
        <div className="items-center lg:flex">

            <div className='flex-wrap w-9/12'>
                <div className="flex w-full mx-8 my-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="w-2 bg-gray-800 dark:bg-gray-900" />
                    <div className="flex items-center px-2 py-3">
                        <img className="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />
                        <div className="mx-3">
                            <p className="text-gray-600 dark:text-gray-200">Add Your Personal Details<a className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"> here</a>.</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mx-8 my-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="w-2 bg-gray-800 dark:bg-gray-900" />
                    <div className="flex items-center px-2 py-3">
                        <img className="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />
                        <div className="mx-3">
                            <p className="text-gray-600 dark:text-gray-200">Add Your Personal Details<Link to="/manageprofile"><a className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"> here</a>.</Link></p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full mx-8 my-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="w-2 bg-gray-800 dark:bg-gray-900" />
                    <div className="flex items-center px-2 py-3">
                        <img className="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />
                        <div className="mx-3">
                            <p className="text-gray-600 dark:text-gray-200">Add Your Personal Details <a className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"> here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 lg:mt-0 lg:w-3/4">
                <div className="flex items-center justify-center lg:justify-end">
                    <div className="max-w-lg">
                        <img className="object-cover object-center w-full h-64 rounded-md shadow" src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 )
}

export default Dbsection1;

