import React, { useState } from 'react'
import classNames from 'classnames'

function Dropdown({ options, onOptionSelect }) {

  const [isActive, setActive] = useState(false);
  
  const buttonClasses = `relative inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150`;

  return (
 
    <div>
    <button onClick={() => setActive(!isActive)} className={buttonClasses}>
      Options 
      <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  
    </button>
    
    <div class={classNames("flex-wrap container justify-center mx-auto", {
      block: isActive,
      hidden: !isActive
    })}>
   
    {options.map((option) => <div class={classNames("relative inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150")} key={option} onClick={(e) => onOptionSelect(option)}>{option}</div>)}
   </div>
   </div>
  )
}

export default Dropdown;
