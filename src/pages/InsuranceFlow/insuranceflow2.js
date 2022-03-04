import React from 'react'
import { Link } from '@reach/router';
import InsuVect from '../../Components/Svgs/InsuVect';
import Dropdown from '../../Components/Dropdown';

function InsuranceFlow2() {
  return (

    <div class="flex flex-wrap bg-gray-200">
      <div class="w-1/2 p-8">
        <div className="container px-8 mx-auto">
          <div className="items-center">
            <div className="w-full">
              <div className="lg:max-w-lg">
                <h1 className="text-xl font-semibold text-gray-800 uppercase dark:text-white ">
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
                <h3 className="mt-1 font-bold text-gray-800 uppercase border-gray-700 border-b-16 dark:text-white">
                  All Health plans cover Covid-19 tratment
                </h3>
                <div className="mt-1">
                  <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
                </div>

                <div className="w-auto mx-auto mt-24">
                  <div className="flex items-center justify-between h-1 bg-gray-200">
                    <div className="flex items-center w-1/3 h-1 bg-blue-900">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full shadow">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between w-1/3 h-1 bg-blue-900">
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
                      <div className="flex items-center justify-center w-6 h-6 -ml-2 bg-blue-900 rounded-full shadow">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check" />
                      </div>
                      <div className="relative flex items-center justify-center w-6 h-6 -mr-3 bg-white rounded-full shadow">
                        <div className="w-3 h-3 bg-blue-900 rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-end w-1/3">
                      <div className="w-6 h-6 bg-white rounded-full shadow" />
                    </div>
                  </div>
                </div>

                <div className="container grid justify-center grid-cols-3 gap-8 pt-6 mx-auto mt-12">
                  <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                  <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                  <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                  <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                  <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                  <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                </div>
                <div className="container justify-center w-1/2 pt-6 mx-auto mt-4" >
                <Dropdown
                    options={["Edit", "Duplicate", "Archive", "Move", "Delete"]}
                  onOptionSelect={(option) => {
                    return option;
                  }
                  } 
                  />
                </div>
                <div className="flex justify-center mt-16">               
                 <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-900 rounded-md bg-dblue hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    Get Your Reuslts
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>


    </div>





  )
}
export default InsuranceFlow2
