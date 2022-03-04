import React from 'react'
import * as FontAwesome from 'react-icons/fa';

// import { FaCarAlt } from 'react-icons/fa';

function IconHero() {
    const mystyle = {
        backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
    };
    let menuIcon = [
        { title: "Car Insurance", icon: 'FaCarAlt' },
        { title: 'Home & Contentes', icon: 'FaHome' },
        { title: 'Health Insurance', icon: 'FaMedkit' },
        { title: 'Life Insurance', icon: 'FaHeartbeat' },
        { title: 'Electricity & Gas', icon: 'FaBolt' },
        { title: 'Close', icon: 'FaCaretUp' },
        { title: 'Hotels', icon: 'FaHotel' },
        { title: 'Landlord Insurance', icon: 'FaHome' },
        { title: 'Pet Insurance', icon: 'FaHome' },
        { title: 'Travel Insurance', icon: 'FaHome' },
        { title: 'Income Protection', icon: 'FaHome' },
        { title: 'Home Loans', icon: 'FaGlassMartini' },
        { title: 'Business Insurance', icon: 'FaHSquare' },
        { title: 'Hotels', icon: 'FaHotel' },
        { title: 'Landlord Insurance', icon: 'FaHome' },
        { title: 'Pet Insurance', icon: 'FaHome' },
        { title: 'Travel Insurance', icon: 'FaHome' },
        { title: 'Income Protection', icon: 'FaHome' },
        { title: 'Business Insurance', icon: 'FaHSquare' },
        { title: 'Hotels', icon: 'FaHotel' },
        
    ];

    return (

       

            <section className="container w-11/12 py-24 mx-auto my-8 md:w-9/12">
  <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Components</span></h1>
          <p className="m-2 mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>

                <ul ul className='grid grid-cols-2 mx-auto border-collapse shadow-lg bg-blue-50 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 ring-2 ring-blue-200'>
                    {
                        menuIcon.map(row => {
                            return (
                                <li className='flex flex-col items-center max-w-md text-center align-middle transition duration-300 ease-in lg:p-6 md:p-4 bg-blue-50 hover:bg-blue-800 hover:text-white outline ring-2 ring-blue-200' style={{ cursor: 'pointer' }}>
                                    <span className='mb-0'>

                                        {React.createElement(FontAwesome[row.icon], { className: "w-12 h-10" })}
                                    </span>

                                    <h3 className='inline text-center'>{row.title}</h3>

                                </li>
                            );
                        })
                    }



                </ul>
            </section>
      


    )
}

export default IconHero








