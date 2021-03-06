import React from 'react';

function HeroWithImage({ reverse, title, subtitle, imgsrc, bgcol }) {
	return (
		<section className={`${bgcol ? bgcol : 'bg-white'}`}>
			<div
				className={`container flex flex-col mx-auto py-16  lg:py-16 lg:h-[16rem]   lg:items-center   ${reverse ? 'lg:flex-row-reverse ' : 'lg:flex-row'
					}`}>
				<div className='w-full lg:w-1/2'>
					<div className={`lg:max-w-lg ${reverse ? 'pl-8' : 'pl-0'} mx-8`}>
						<h1 className='text-xl font-normal tracking-wide text-dblue lg:text-2xl'>
							{title}
						</h1>
						<p className='pt-4'>
							{subtitle}
						</p>
						<div className='mt-8 space-y-5'>
							<p className='flex items-center text-dblue'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 mx-2 text-blue-500'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								<span className='mx-2'>Clean and Simple Layout</span>
							</p>
							<p className='flex items-center text-gray-700 dark:text-gray-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 mx-2 text-blue-500'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								<span className='mx-2'>Just Copy Paste Codeing</span>
							</p>
							<p className='flex items-center text-gray-700 dark:text-gray-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 mx-2 text-blue-500'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								<span className='mx-2'>Easy to Use</span>
							</p>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center w-full h-96 lg:w-1/2'>
					<img
						className='object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl'
						src={imgsrc}

					/>
				</div>
			</div>
		</section>
	);
}

export default HeroWithImage;
