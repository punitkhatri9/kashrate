import React from 'react'

function Herosection() {
    return (    
      <div
        className="w-full h-56 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
            Price Every  <span className="text-blue-400 underline">Week!</span>
            </h1>
            
          </div>
        </div>
      </div>          
    )
}

export default Herosection

