import React from 'react'

function Section() {
  return (
    <div className="container flex flex-col px-10 py-10 mx-5 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="glasses photo"
        />
      </div>
      <div className="w-full px-16 lg:py-8 lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
          Compare Home Loans...!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
          You can get a personal loan from a bank, a credit union, a private business or a lender. A personal loan is an amount of money you can borrow to pay for large expenses up front.
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Premium selection</span>
            </div>
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Insurance</span>
            </div>
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">All legal documents</span>
            </div>
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">From US glasses dealers</span>
            </div>
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Payment Security</span>
            </div>
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="mx-3">Fast shipping (+ Express)</span>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Section

