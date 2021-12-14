
import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
                <div className="w-auto lg:order-1 lg:w-1/6 lg:text-center">
                    <span className="text-xl font-semibold text-gray-800 font-heading" >
                        Kashmonk
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu
                            </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="items-center hidden w-auto lg:w-3/6 navbar-menu lg:order-2 lg:block ">
                    <a className="block mt-4 text-blue-900 mr-7 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                        Insurance 
                    </a>
                    <a className="block mt-4 text-blue-900 mr-7 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                        Cards
                    </a>
                    <a className="block mt-4 text-blue-900 mr-7 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                        Loan
                    </a>
                    <a className="block mt-4 text-blue-900 mr-7 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                        About Us
                    </a>
                    <a className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                        Contact Us
                    </a>
                </div>
                <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right">
                    <a className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>My Account    
                    </a>
                    |
                    <a className="block mt-4 ml-5 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>0123456789
                    </a>
                </div>
            </nav>
        </div>

       
    )
}
