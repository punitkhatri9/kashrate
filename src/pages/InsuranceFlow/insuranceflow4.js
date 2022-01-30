import React from 'react'
import { Link } from '@reach/router';
import InsuVect from '../../Components/Svgs/InsuVect'

function InsuranceFlow1() {
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
                  Where do you live?
                </h3>
                <h3 className="mt-1 font-bold text-gray-800 uppercase border-indigo-500 border-b-16 dark:text-white">
                  Select your city
                </h3>
                <div className="mt-1">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                </div>

                <h4 className="text-xs">
                  Do you have any ilness or medical history?
                </h4>

                <h4 className="text-xvs">
                  This helps us find plans that cover your condition and avoid claim rejection
                </h4>

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

                <div className="flex-wrap mt-16 w-full p-4 rounded-md border border-gray-900">
                  <div className="flex items-center">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4" />
                    <label htmlFor="country-option-4" className="text-sm font-bold text-gray-900 ml-2 block">
                      Existing illness
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="country-option-4" className="text-tiny font-light text-gray-900 ml-6 block">
                      Blood Pressure, Diabetes, Heart conditions, Asthma, Thyroid , Cancer.
                    </label>
                  </div>
                </div>
                <div className="flex-wrap mt-8 w-full p-4 rounded-md border border-gray-900">
                  <div className="flex items-center">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4" />
                    <label htmlFor="country-option-4" className="text-sm font-bold text-gray-900 ml-2 block">
                    Covid 19
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="country-option-4" className="text-tiny font-light text-gray-900 ml-6 block">
                    Tested positive for Covid-19
                    </label>
                  </div>
                </div>
                <div className="flex-wrap mt-8 w-full p-4 rounded-md border border-gray-900">
                  <div className="flex items-center">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4" />
                    <label htmlFor="country-option-4" className="text-sm font-bold text-gray-900 ml-2 block">
                    Surgical Procedure
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="country-option-4" className="text-tiny font-light text-gray-900 ml-6 block">
                    Appendix, Gall bladder, C-section etc.
                    </label>
                  </div>
                </div>
                <div className="flex-wrap mt-8 w-full p-4 rounded-md border border-gray-900">
                  <div className="flex items-center">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4" />
                    <label htmlFor="country-option-4" className="text-sm font-bold text-gray-900 ml-2 block">
                      Existing illness
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="country-option-4" className="text-tiny font-light text-gray-900 ml-6 block">
                      Blood Pressure, Diabetes, Heart conditions, Asthma, Thyroid , Cancer.
                    </label>
                  </div>
                </div><div className="flex-wrap mt-8 w-full p-4 rounded-md border border-gray-900">
                  <div className="flex items-center">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4" />
                    <label htmlFor="country-option-4" className="text-sm font-bold text-gray-900 ml-2 block">
                    None of these
                    </label>
                  </div>
                  
                </div>

                <div className="flex justify-center mt-16">

                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-dblue rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
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
export default InsuranceFlow1
