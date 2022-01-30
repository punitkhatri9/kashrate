import { Link } from '@reach/router';
import React from 'react';

import Login from '../pages/Login';

const Header = () => {

	let topmenu = [
		{
			name: "Insurance", endpoint: "/insurance",
			submenu: [
				{ name: 'Car', endpoint: "/homeloan" },
				{ name: 'Health', endpoint: "/homeloan" },
				{ name: 'Home & Contents', endpoint: "/homeloan" },
				{ name: 'Income Protection', endpoint: "/homeloan" },
				{ name: 'Life', endpoint: "/homeloan" },
				{ name: 'Pet', endpoint: "/homeloan" },
				{ name: 'Travel', endpoint: "/homeloan" }
			]
		},
		{
			name: "Cards", endpoint: "/cards",
			submenu: [
				{ name: 'Home & Contents', endpoint: "/homeloan" },
				{ name: 'Income Protection', endpoint: "/homeloan" },
				{ name: 'Life', endpoint: "/homeloan" },
				{ name: 'Car', endpoint: "/homeloan" },
				{ name: 'Health', endpoint: "/homeloan" }
			]
		},
		{
			name: "Our Services", endpoint: "/contact",
			submenu: [
				{ name: 'Income Protection', endpoint: "/homeloan" },
				{ name: 'Home', endpoint: "/homeloan" },
				{ name: 'Car & Life', endpoint: "/homeloan" },
				{ name: 'Health Insurance', endpoint: "/homeloan" },
				{ name: 'Life', endpoint: "/homeloan" },
				{ name: 'Car Insurance', endpoint: "/homeloan" },
			]
		},
		{ name: "About Us", endpoint: "/aboutus" },
		{ name: "Contact Us", endpoint: "/contact" },

	];

	return (
		<div>
			<nav className='container flex flex-wrap items-center justify-between  mx-auto bg-white'>
				<div className='w-auto pr-10 lg:order-1 lg:w-1/6'>
					<span className='text-xl font-bold dblue'>
						<Link to='/'> Kashmonk </Link>
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

					{topmenu.map((data, index) => {
						return <TopCenterMenu key={index} {...data}></TopCenterMenu>
					})}



				</div>
				<div className='hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right'>
					<a
						className='block mt-4 mr-4 text-sm font-bold lg:inline-block lg:mt-0 hover:text-blue-800'
						href='#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 lg:inline-block '
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 b 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
							/>
						</svg>
						<Link to="/dashboard">	My Account</Link>
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
export default Header;


function TopCenterMenu({ endpoint, name, submenu }) {
	return (

		<li className="hoverable block text-gray-900  lg:inline-block lg:mt-0 hover:text-blue-800" >
			<a href="#" className="relative block py-5 px-4 transition-all duration-500 ease-in-out font-bold hover:bg-blue-900 hover:text-white">
				<Link to={endpoint}>{name}</Link>
			</a>
			<Submenu submenus={submenu}></Submenu>
		</li>

	);
}


function Submenu(props) {

	const submenusItems = props.submenus;
	console.log(submenusItems);
	return (

		<div className="transition-all duration-500 ease-in-out p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-900">
			<div className="container mx-auto w-full flex flex-wrap justify-between mx-2">


				<div className="w-full text-white mb-8 text-center">

					{
						submenusItems && submenusItems.length > 0 &&
						<div className="border-b border-blue-800 dark:border-gray-700">
							<ul className="flex flex-wrap -mb-px">
								{props.submenus.map(function (row, index) {
									return <li className="mr-2" key={index}>
										<a href="#" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-white hover:border-white dark:text-gray-400 dark:hover:text-gray-300">{row.name}</a>
									</li>;
								})}
							</ul>
						</div>

					}

				</div>
				<ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-blue-800 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
					<div className="flex items-center">
						<svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
						</svg>
						<h3 className="font-bold text-xl text-white text-bold mb-2">Tatooine</h3>
					</div>
					<p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>

					<FindMore></FindMore>
				</ul>
				<ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-blue-800 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
					<div className="flex items-center">
						<svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
						</svg>
						<h3 className="font-bold text-xl text-white text-bold mb-2">Cantonica</h3>
					</div>
					<p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>

					<FindMore></FindMore>
				</ul>
				<ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-blue-800 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
					<div className="flex items-center">
						<svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
						</svg>
						<h3 className="font-bold text-xl text-white text-bold mb-2">Yavin 4</h3>
					</div>
					<p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>

					<FindMore></FindMore>
				</ul>
				<ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-blue-800 pb-6 pt-6 lg:pt-3">
					<div className="flex items-center">
						<svg className="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
						</svg>
						<h3 className="font-bold text-xl text-white text-bold mb-2">Alderaan</h3>
					</div>
					<p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>

					<FindMore></FindMore>


				</ul>
			</div>
		</div >
	);
}


function FindMore(prop) {
	return (
		<div className="flex items-center py-3">
			<svg className="h-6 pr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
			</svg>
			<a href="#" className="text-white bold  border-teal-300 hover:text-teal-900">Find out more...</a>
		</div>
	);
}