import React from 'react'
import { FaQuestionCircle, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Compair() {
    return (
        <section className='p-5 mb-8 bg-blue-50 flex flex-col rounded-md ' style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.09)" }}>
            <div className="flex  justify-start items-center flex-grow-0 flex-shrink-0 w-auto gap-4 ">

                <div className='flex flex-1 space-x-5 items-center justify-start'>

                    <p className="text-base leading-tight text-center  bg-indigo-200 w-24 p-4 text-dblue">Logo</p>

                    <p className="text-base leading-tight text-gray-900">Smart Booster Home Loan Discounted Variable - 2yr</p>
                </div>

                <div className='flex flex-col items-start justify-start'>
                    <div className="flex space-x-2 items-start justify-start py-2">
                        <p className="text-xs text-dblue">Advertised Rate</p>

                        <FaQuestionCircle className="text-gray-500" ></FaQuestionCircle>

                    </div>
                    <p className="leading-tight">1.85 % p.a</p>
                    <p className="text-xs text-dblue">Intro 24 months</p>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <div className="flex space-x-2 items-start justify-start py-2">
                        <p className="text-xs text-dblue">Advertised Rate</p>

                        <FaQuestionCircle className="text-gray-500" ></FaQuestionCircle>

                    </div>
                    <p className="leading-tight">1.85 % p.a</p>
                    <p className="text-xs text-dblue">Intro 24 months</p>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <div className="flex space-x-2 items-start justify-start py-2">
                        <p className="text-xs text-dblue">Advertised Rate</p>

                        <FaQuestionCircle className="text-gray-500" ></FaQuestionCircle>

                    </div>
                    <p className="leading-tight">1.85 % p.a</p>
                    <p className="text-xs text-dblue">Intro 24 months</p>
                </div>

                <div>
                    <div className="flex space-x-5 items-center justify-start" >


                        <div className="flex space-x-6 items-start justify-start">
                            <div className="flex flex-col space-y-2 items-start justify-start">
                                <p className="text-xs">+ Redraw facility</p>
                                <p className="text-xs">+ Offset Account</p>
                                <p className="text-xs text-gray-500">- Borrow up to 80%</p>
                            </div>
                            <div className="flex flex-col space-y-2 items-start justify-start">
                                <p className="text-xs text-gray-500">- Offset Account</p>
                                <p className="text-xs">+ Extra Repayment</p>
                                <p className="text-xs">+ Owner Occupied</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 items-start justify-start">
                            <div className="flex space-x-2.5 items-start justify-start w-full py-2">
                                <p className="text-xs text-gray-500">Real Time Rating </p>
                                <FaQuestionCircle className="text-gray-500" ></FaQuestionCircle>
                            </div>
                            <div className="flex space-x-1.5 items-start justify-start">
                                <FaStar className="text-blue-600" size={20}></FaStar>
                                <FaStar className="text-blue-600" size={20}></FaStar>
                                <FaStar className="text-blue-600" size={20}></FaStar>
                                <FaStar className="text-blue-600" size={20}></FaStar>

                                <FaStarHalfAlt className="text-blue-600" size={20}></FaStarHalfAlt>

                            </div>
                            <p className="w-full h-1/4 text-xl text-center text-gray-900">4.02/5</p>
                        </div>
                        <div className="flex items-start justify-start w-40 px-2 py-3 bg-pink-400 border rounded border-pink-500">
                            <p className="flex-1 text-xs text-center text-white">Veiw More</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-3 flex justify-between items-center'>
                <p className="text-xs text-gray-500 flex-shrink-0"><span className='pr-24'>Compair</span>
                    Buyers and refinancers can benefit from this special discounted rate, plus no ongoing fees and optional access to an offset account.</p>
                <p className="text-xs text-gray-500">More Detail.</p>
            </div>

        </section>
    )
}

export default Compair
