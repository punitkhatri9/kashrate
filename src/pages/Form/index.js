import React from 'react';
import Layout from '../../Layout';


const Form = () => {
    const [gender, setgender] = React.useState('Male');

    const mchange = () => {
        setgender('Male');
    };

    const fchange = () => {
        setgender('Female');
    };

    const RadioButton = ({ label, value, onChange }) => {
        return (
            <div>
                <input className="m-2 " type="radio" checked={value} onChange={onChange} />
                {label}
            </div>
        );
    };

    return (
        <div>
            <Layout>
                {/* ------------------------- banner --------------------------*/}
                <div
                    className="w-full bg-center bg-cover h-52"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
                    }}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                                We just need a few more details to provide your  <span className="text-blue-400 underline">results</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* ------------------------- Loan Details --------------------------*/}
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Account settings
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            1/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">Help us narrow down which leanding parteners can hep you</p>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                    Loan Amount
                                </label>
                                <div className='flex'  >
                                    <span className="block px-2 mt-2 text-2xl text-white bg-blue-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        @
                                    </span>

                                    <input
                                        id="loanamount"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Loan Purpose</label>
                                <input
                                    id="loanpurpose"
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">
                                    Loan Term
                                </label>
                                <input
                                    id="loanterm"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                    </form>
                </section>

                {/* ------------------------- Personal Details --------------------------*/}
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Your Personal Details
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            2/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">Help us narrow down which leanding parteners can hep you</p>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                First Name
                            </label>
                            <div className='flex'  >
                                <input
                                    id="firstname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Last Name</label>
                            <input
                                id="lastname"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="mb-2 text-gray-700 dark:text-gray-200">Gender</label>
                            <div className='flex mt-2'>
                                <RadioButton
                                    label="Male"
                                    value={gender === 'Male'}
                                    onChange={mchange}
                                />
                                <RadioButton
                                    label="Female"
                                    value={gender === 'Female'}
                                    onChange={fchange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                Merital Status
                            </label>
                            <div className='flex'  >
                                <input
                                    id="firstname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Number Of Dependants</label>
                            <input
                                id="lastname"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="mb-2 text-gray-700 dark:text-gray-200">Date Of Birth</label>
                            <div className='flex'>
                                <input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                <input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                /><input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                Email
                            </label>
                            <div className='flex'  >
                                <input
                                    id="firstname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />

                            </div>
                            <p className='text-xvs'> Don’t worry, we won’t spam you.</p>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Mobile Number</label>
                            <input
                                id="lastname"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>


                </section>


                {/* ------------------------- Address Details --------------------------*/}
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Your Address Details
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            3/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">Tell us a little about your current living situation</p>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                PostCode
                            </label>
                            <div className='flex'  >
                                <input
                                    id="loanamount"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                <span className="block p-2 mt-2 text-white bg-blue-900 border border-gray-300 rounded-md text-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    Find
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                Type of Residence
                            </label>
                            <div className='flex'  >
                                <input
                                    id="firstname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 text-gray-700 dark:text-gray-200">Time at Address</label>
                            <div className='flex'>
                                <input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                <input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                    </div>

                </section>

                {/* ------------------------- Employment Details --------------------------*/}
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Your Employment Details
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            4/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">We will never contact your employer. Lenders just want to understand how you generate an income.</p>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                Employment Status
                            </label>
                            <div className='flex'  >
                                <input
                                    id="firstname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 text-gray-700 dark:text-gray-200">Length of Employment Status</label>
                            <div className='flex'>
                                <input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                                <input
                                    id="lastname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                Pay Frequence
                            </label>
                            <div className='flex'  >
                                <input
                                    id="firstname"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                    </div>

                </section>

                {/* ------------------------- Finance Details --------------------------*/}
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Your Finances
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            5/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">Help us narrow down which leanding parteners can hep you</p>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 text-tiny " htmlFor="username">
                                    Net Monthly Income
                                </label>
                                <div className='flex'  >
                                    <span className="block px-2 mt-2 text-2xl text-white bg-blue-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        @
                                    </span>

                                    <input
                                        id="loanamount"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 text-tiny dark:text-gray-200">Montyly / Rental / Mortgage Payments</label>
                                <div className='flex'  >
                                    <span className="block px-2 mt-2 text-2xl text-white bg-blue-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        @
                                    </span>

                                    <input
                                        id="loanamount"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 text-tiny dark:text-gray-200" htmlFor="password">
                                    Monthly Loan Paymentts
                                </label>
                                <div className='flex'  >
                                    <span className="block px-2 mt-2 text-2xl text-white bg-blue-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        @
                                    </span>

                                    <input
                                        id="loanamount"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                            <div>
                                <label className="text-gray-700 text-tiny dark:text-gray-200" htmlFor="password">
                                    Other Expenses
                                </label>
                                <div className='flex'  >
                                    <span className="block px-2 mt-2 text-2xl text-white bg-blue-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        @
                                    </span>

                                    <input
                                        id="loanamount"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                    Who do you bank with?
                                </label>
                                <div className='flex'  >
                                    <input
                                        id="firstname"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                    Years at Banks
                                </label>
                                <div className='flex'  >
                                    <input
                                        id="firstname"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>

                        </div>
                    </form>
                </section>

                    
                {/* ------------------------- Makrekting  Preferences --------------------------*/}    
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Marketing Preferences
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            6/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">Uswitch would like to keep you informed of their latest products and services.</p>
                    <div className="mt-4">
                        <span className="text-gray-700">Email</span>
                        
                            <label className="inline-flex items-center ml-4">
                                <input
                                    type="radio"
                                    classname="form-radio"
                                    name="accountType"
                                    defaultValue="personal"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    classname="form-radio"
                                    name="accountType"
                                    defaultValue="busines"
                                />
                                <span className="ml-2">No</span>
                            </label>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-700">SMS</span>
                        
                            <label className="inline-flex items-center ml-5 ">
                                <input
                                    type="radio"
                                    classname="form-radio"
                                    name="accountType"
                                    defaultValue="personal"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    classname="form-radio"
                                    name="accountType"
                                    defaultValue="busines"
                                />
                                <span className="ml-2">No</span>
                            </label>
                        
                    </div>



                </section>

                    
               
                {/* ------------------------- Makrekting  Preferences --------------------------*/}    
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div className='flex'>
                        <h2 className="w-full py-2 text-lg font-semibold text-gray-700 capitalize dark:text-white">
                        Last  Step - Almost There !
                        </h2>
                        <h6 className="justify-end w-2/12 py-2 mt-2 text-sm font-semibold text-right text-gray-700 capitalize dark:text-white">
                            7/7
                        </h6>
                    </div>
                    <hr></hr>
                    <p className="py-2 text-xs">Please complete this final step so we can get your results</p>
                    <div className="mt-4">
                        <p>
                        I confirm iI have read and agree to the Terms & CONDITIONS AND PRIVACY POLICEY  and I understand as part of my application my data may be shared with TransUnion and  Credit Providers. 
                        </p>
                        
                    </div>


                    <div className="flex justify-end mt-16">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                        Get Your Reuslts
                    </button>
                </div>
                </section>



                
            </Layout>
        </div>
    );
}

export default Form;