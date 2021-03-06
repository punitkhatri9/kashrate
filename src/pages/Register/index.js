import React from "react";

const Register= ({  }) => {
    const [showAlert, setShowAlert] = React.useState(true);
    return (

    <div className="container mx-auto">
  <div className="flex justify-center px-6 my-12">
    {/* Row */}
    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
      {/* Col */}
      <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'}} />
      {/* Col */}
      
      <div className="w-full lg:w-7/12 bg-white shadow-lg p-5 rounded-lg lg:rounded-l-none">
      <div className="flex justify-end">
                <button className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none" onClick={() => setShowAlert(false)}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-xs italic text-red-500">Please choose a password.</p>
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                Confirm Password
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="******************" />
            </div>
          </div>
          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
              Register Account
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="text-center">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./login">
              Already have an account? Login!
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}


export default Register;

