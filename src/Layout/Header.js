import { Link } from '@reach/router';
import React from 'react';

const Header = () => {
	let submenu = [
		{ name: 'Home Loans', endpoint: "/homeloan" },
		{ name: 'Card Loans', endpoint: "/homeloan" },
		{ name: 'Travel Loans', endpoint: "/homeloan" },
		{ name: 'Personal Loans', endpoint: "/homeloan" }
	];
	let topmenu = [
		{ name: "Insurance", endpoint: "/insurance" },
		{ name: "Cards", endpoint: "/cards" },
		{ name: "Our Services", endpoint: "/contact" },
		{ name: "About Us", endpoint: "/about" },
		{ name: "Contact Us", endpoint: "/contact" },

	];

	return (
		<div>
			<nav className='container flex flex-wrap items-center justify-between py-4 mx-auto bg-white'>
				<div className='w-auto pr-10 lg:order-1 lg:w-1/6'>
					<span className='text-xl font-bold text-gray-900'>
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
				<div className='items-center hidden w-auto text-bold lg:w-3/6 navbar-menu lg:order-2 lg:block '>

					{topmenu.map(data => {
						return <TopCenterMenu {...data}></TopCenterMenu>
					})}



				</div>
				<div className='hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right'>
					<a
						className='block mt-4 mr-4 text-gray-900 lg:inline-block lg:mt-0 hover:text-blue-800'
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
								d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
							/>
						</svg>
						My Account
					</a>
					|
					<a
						className='block mt-4 ml-5 mr-4 text-gray-900 lg:inline-block lg:mt-0 hover:text-blue-800'
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
						0123456789
					</a>
				</div>
			</nav>
			<nav className=' bg-blue-900'>
				<div className='container flex flex-wrap lg:justify-start py-4 mx-auto'>
					{submenu.map((row) => {
						return <SubMenu name={row.name} link={row.endpoint}></SubMenu>;
					})}
				</div>
			</nav>
		</div>
	);
};
export default Header;

function SubMenu(prop) {
	return (
		<span className='mr-8 text-sm leading-7  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600  dark:hover:text-blue-400 hover:underline md:my-0'>
			<a className='text-white  hover:text-blue-200 ' href='#'>
				{/* {prop.name} */}
				<Link to={prop.link}>{prop.name}</Link>
			</a>
		</span>
	);
}

function TopCenterMenu(prop) {
	return (
		<span
			className='block mt-4 text-gray-900 mr-7 lg:inline-block lg:mt-0 hover:text-blue-800'
		>
			<Link to={prop.endpoint}>{prop.name}</Link>
		</span>
	);
}
