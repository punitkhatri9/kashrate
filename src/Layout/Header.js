import { Link, Router } from "@reach/router";
import React from 'react'
import { render } from "react-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
            <nav className="container flex flex-wrap items-center justify-between py-4 mx-auto bg-white">

                <div className="w-auto px-10 lg:order-1 lg:w-1/6">
                    <span className="text-xl font-bold text-gray-900" >
                        <Link to="/"> Kashmonk </Link>{" "}
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
                <div className="items-center hidden w-auto text-bold lg:w-3/6 navbar-menu lg:order-2 lg:block ">
                    <a className="block mt-4 text-gray-900 mr-7 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <Link to="insurance"> Insurance </Link>
                    </a>
                    <a className="block mt-4 text-gray-900 mr-7 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <Link to="cards">Cards</Link>
                    </a>
                    <a className="block mt-4 text-gray-900 mr-7 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <Link to="loan">Loan</Link>
                    </a>
                    <a className="block mt-4 text-gray-900 mr-7 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <Link to="aboutus">About Us</Link>
                    </a>
                    <a className="block mt-4 text-gray-900 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <Link to="contactus">Contact Us</Link>
                    </a>
                </div>
                <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right">
                    <a className="block mt-4 mr-4 text-gray-900 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>My Account
                    </a>
                    |
                    <a className="block mt-4 ml-5 mr-4 text-gray-900 lg:inline-block lg:mt-0 hover:text-blue-800" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>0123456789
                    </a>

                </div>

            </nav>

                <div class="py-3 px-24 flex flex-col md:flex-row text-left md:items-left  bg-blue-900">
                <a class="mx-8 text-sm leading-7 text-white transition-colors duration-200 transform dark:text-white hover:text-blue-600  dark:hover:text-blue-400 hover:border-b-4 md:my-0" href="#">Home Loans</a>
                <a class="mx-8 text-sm leading-7 text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600  dark:hover:text-blue-400 hover:underline md:my-0" href="#">Care Loans</a>
                <a class="mx-8 text-sm leading-7 text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600  dark:hover:text-blue-400 hover:underline md:my-0" href="#">Travel Loans</a>
                <a class="mx-8 text-sm leading-7 text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600  dark:hover:text-blue-400 hover:underline md:my-0" href="#">Personal Loans</a>
            </div>


        </div>


    )
}
export default Header;