import React from 'react'
import { Link } from '@reach/router';
import InsuVect from '../../Components/Svgs/InsuVect'

function InsuranceFlow3() {
  return (

    <div class="flex flex-wrap bg-gray-200">
      <div class="w-1/2 p-8">
        <div className="container px-8 mx-auto">
          <div className="items-center">
            <div className="w-full">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                  Home Loan , Category Single Page
                </h1>
                <div className='mt-4 space-y-5'>
                  <p className='flex items-center text-gray-700 dark:text-gray-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 mx-2 text-blue-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='mx-2'>Clean and Simple Layout</span>
                  </p>
                  <p className='flex items-center text-gray-700 dark:text-gray-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 mx-2 text-blue-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='mx-2'>Just Copy Paste Codeing</span>
                  </p>
                  <p className='flex items-center text-gray-700 dark:text-gray-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 mx-2 text-blue-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='mx-2'>Easy to Use</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0">
              <InsuVect />
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 p-2">
        <div className="container px-6 py-6 mx-auto">
          <div className="items-center">
            <div className="w-full">
              <div className="lg:max-w-lg">
                <h3 className="text-gray-800 uppercase dark:text-white">
                  Protect youself from corona virus.
                </h3>
                <h3 className="mt-1 font-bold text-gray-800 uppercase border-indigo-500 border-b-16 dark:text-white">
                  All Health plans cover Covid-19 tratment
                </h3>
                <div className="mt-1">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                </div>

                <div className="w-auto mx-auto mt-24">
                  <div className="flex items-center justify-between h-1 bg-gray-200">
                    <div className="flex items-center w-1/3 h-1 bg-indigo-700">
                      <div className="flex items-center justify-center w-6 h-6 bg-indigo-700 rounded-full shadow">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between w-1/3 h-1 bg-indigo-700">
                      <div className="absolute right-0 -mr-2">
                        <div className="relative px-2 py-1 mt-16 -mr-12 bg-white rounded shadow-lg">
                          <svg className="absolute top-0 left-0 right-0 w-full -mt-1" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                  <polygon id="Triangle" points="20 0 28 8 12 8" />
                                </g>
                              </g>
                            </g>
                          </svg>
                          <p tabIndex={0} className="text-xs font-bold text-indigo-700 focus:outline-none">Step 3: Analyzing</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-6 h-6 -ml-2 bg-indigo-700 rounded-full shadow">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                      </div>
                      <div className="relative flex items-center justify-center w-6 h-6 -mr-3 bg-white rounded-full shadow">
                        <div className="w-3 h-3 bg-indigo-700 rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-end w-1/3">
                      <div className="w-6 h-6 bg-white rounded-full shadow" />
                    </div>
                  </div>
                </div>
                <div className="container pt-6 mx-auto mt-12">
                  <input
                    id="loanterm"
                    type="text"
                    placeholder='Enter city of pincode'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                


                  <div className="w-full pt-6 mx-auto mt-12">
                    <h1>Populer Cities</h1>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>
                    <button className="rounded p-1 text-tiny pl-4 pr-4 m-1 bg-transparent border-2 border-gray-400  hover:bg-black hover:text-white focus:outline-none ">Primary</button>

                  </div>


                 
                <div className="flex justify-center mt-16">

                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    Get Your Reuslts
                  </button>

                </div>
                <p className="mt-2 text-center text-xvs">By Clicking continue  on “Continue”, you agree to our Privacy Plicy, Terms of use & *Disclaimer</p>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>





  )
}
export default InsuranceFlow3
