import { Link } from '@reach/router';
import React from 'react';

import Login from '../pages/Login';
import axios from 'axios';

export default class IconHero extends React.Component{
  state = {
    menu: []
  }

	// let topmenu = [
	// 	{
	// 		name: "Insurance", endpoint: "/insurance",
	// 		submenu: [
	// 			{ name: 'Car', endpoint: "/homeloan" },
	// 			{ name: 'Health', endpoint: "/homeloan" },
	// 			{ name: 'Home & Contents', endpoint: "/homeloan" },
	// 			{ name: 'Income Protection', endpoint: "/homeloan" },
	// 			{ name: 'Life', endpoint: "/homeloan" },
	// 			{ name: 'Pet', endpoint: "/homeloan" },
	// 			{ name: 'Travel', endpoint: "/homeloan" }
	// 		]
	// 	},
	// 	{
	// 		name: "Cards", endpoint: "/cards",
	// 		submenu: [
	// 			{ name: 'Home & Contents', endpoint: "/homeloan" },
	// 			{ name: 'Income Protection', endpoint: "/homeloan" },
	// 			{ name: 'Life', endpoint: "/homeloan" },
	// 			{ name: 'Car', endpoint: "/homeloan" },
	// 			{ name: 'Health', endpoint: "/homeloan" }
	// 		]
	// 	},
	// 	{
	// 		name: "Our Services", endpoint: "/contact",
	// 		submenu: [
	// 			{ name: 'Income Protection', endpoint: "/homeloan" },
	// 			{ name: 'Home', endpoint: "/homeloan" },
	// 			{ name: 'Car & Life', endpoint: "/homeloan" },
	// 			{ name: 'Health Insurance', endpoint: "/homeloan" },
	// 			{ name: 'Life', endpoint: "/homeloan" },
	// 			{ name: 'Car Insurance', endpoint: "/homeloan" },
	// 		]
	// 	},
	// 	{ name: "About Us", endpoint: "/aboutus" }, 
	// 	{ name: "Contact Us", endpoint: "/contact" },

	// ];

	componentDidMount() {
		axios.get('http://localhost:3000/menu')
		  .then(res => {
			const menu = res.data;
			this.setState({ menu });
			console.log({menu});
		  })
	  }
  render()
  {
	return (
		<div>
			<nav className='container flex flex-wrap items-center justify-between mx-auto bg-white'>
				<div className='w-auto pr-10 lg:order-1 lg:w-1/6'>
					<span className='text-xl font-bold dblue'>
						<Link to='/'> Kashrate </Link>
					</span>
				</div>
				<div className='block lg:hidden'>
					<button className='flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger'>
						<svg
							className='w-3 h-3 fill-current'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
						</svg>
					</button>
				</div>
				<div className='items-center hidden w-auto text-sm font-bold lg:w-3/6 navbar-menu lg:order-2 lg:block '>
					{
					this.state.menu
					.map((index, data) => async =>{
						return <TopCenterMenu key={index} {...data}></TopCenterMenu>
					})
					}
				</div>
				<div className='hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right'>
					<a
						className='block mt-4 mr-4 text-sm font-bold lg:inline-block lg:mt-0 hover:text-blue-800'
						href='#'>
							<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 lg:inline-block'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
							/>
						</svg>
						<Link to="/dashboard">My Account</Link>
					</a>
					|
					<a
						className='block mt-4 ml-3 text-gray-900 lg:inline-block lg:mt-0 hover:text-blue-800'
						href='#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 lg:inline-block'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
							/>
						</svg>
					</a>
					<a
						className='block mt-4 ml-2 mr-6 text-sm font-bold lg:inline-block lg:mt-0 hover:text-blue-800' href="./login">
						0123456789
					</a>
				</div>
			</nav>
		</div>
	);
};
};


function TopCenterMenu({ link, name, submenu }) {
	return (

		<li className="block text-gray-900 hoverable lg:inline-block lg:mt-0 hover:text-blue-800" >
			<Link href="#" className="relative block px-4 py-5 font-bold transition-all duration-500 ease-in-out hover:bg-blue-900 hover:text-white">
				<Link to={link}>{name}</Link>
				console.log({link},{name});
			</Link>
			 <Submenu submenus={[submenu]}></Submenu> 
		</li>

	);
}


function Submenu(props) {

	const submenusItems = props.submenus;
	console.log(submenusItems);
	return (

		<div className="px-6 transition-all duration-500 ease-in-out bg-blue-900 shadow-xl mega-menu sm:mb-0">
			<div className="container flex flex-wrap justify-between w-full mx-auto">


				<div className="w-full text-center text-white">

					{
						submenusItems && submenusItems.length > 0 &&
						<div className="border-b border-blue-800 dark:border-gray-700">
							<ul className="flex flex-wrap">
								{props.submenus.map(function (row, index) {
									return <li className="mr-2" key={index}>
										<a href={row.link} className="inline-block px-4 py-4 text-sm font-medium text-center text-gray-200 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-white dark:text-gray-400 dark:hover:text-gray-300">{row.name}</a>
									</li>;
								})}
							</ul>
						</div>

					}

				</div>
			
			</div>
		</div >
	);
}


