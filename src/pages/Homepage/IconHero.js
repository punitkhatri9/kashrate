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
    ];

    return (

        <article className="w-full bg-center bg-cover h-[32rem]" style={mystyle}>

            <section className="container  mx-auto py-24 md:w-9/12 w-11/12 mb-8">


                <ul ul className='mx-auto bg-blue-50   shadow-lg  grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 border-collapse	ring-2 ring-blue-200'>
                    {
                        menuIcon.map(row => {
                            return (
                                <li className='bg-blue-50 hover:bg-blue-800 hover:text-white max-w-md p-8  flex flex-col  items-center outline  ring-2 ring-blue-200  transition ease-in duration-300' style={{ cursor: 'pointer' }}>
                                    <span className='mb-0'>

                                        {React.createElement(FontAwesome[row.icon], { className: "w-8 h-8" })}
                                    </span>

                                    <h3 className='text-center'>{row.title}</h3>

                                </li>
                            );
                        })
                    }



                </ul>
            </section>
        </article>


    )
}

export default IconHero








