import React from 'react';

import CarouselImages from '../../Components/CarouselImages';
import Herosection from '../../Components/Herosection';
import HeroWithImgage from '../../Components/HeroWithImage';
import Layout from '../../Layout';

const Homepage = () => {
	let heros = [
		{
			title: 'Home loan deals with low interest that suits your needs',
			subtitle:
				'Avail Pre-Approved Home Loan Sanction letter Exclusively for ICICI Bank Customers. Get Home Loan with Special Processing Offer and Zero Documentation.',
			src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80',
			reverse: true,
		},
		{
			title: 'Get Healthcare Coverage, Health Insurance Marketplace',
			subtitle:
				'Hassle Free Process. 59 Critical Illness Cover. Covers upto 80 Years. 24 x 7 Claim Assistance. Tax Benefits u/s 80 C. Tax Benefits on Premium. Family Protection Plans.',
			src: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			reverse: false,
		},
		{
			title: 'Car Loan - Compare Best Interest Rate Online @ 7%,',
			subtitle:
				'With upto 100% financing on select vehicles, Drive your dream Car with HDFC Bank. Enjoy Quick Approval, Flexible EMIs, Instant disbursal & No Hidden Cost',
			reverse: true,
			src: 'https://images.unsplash.com/photo-1511837008003-71eca36ceb70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		},
	];
	return (
		<div>
			<Layout>
				<div className='container  mx-auto product-header  grid gap-8 xmd:mb-16 xmd:grid-cols-2-3'>

					<div className='flex flex-col justify-start md:justify-center'>
						<figure className='img flex flex-col'>
							<div className='w-full' style={{ maxWidth: 3632 }}>
								<div className='w-full overflow-hidden relative z-10 aspect-w-16 aspect-h-9 rounded-md md:rounded-md'>
									<div className='absolute top-0 left-0 right-0 bottom-0'>
										<img
											className='object-cover object-center w-full h-full'
											src='https://res.cloudinary.com/plenti/image/upload/c_fill,w_800,ar_16:9,q_auto,f_auto/prod/Faster_Fairer_Loans_for_Your_Big_Ideas_3115401257'
											srcSet='https://res.cloudinary.com/plenti/image/upload/w_400,q_auto,f_auto/prod/Faster_Fairer_Loans_for_Your_Big_Ideas_3115401257 400w, https://res.cloudinary.com/plenti/image/upload/w_640,q_auto,f_auto/prod/Faster_Fairer_Loans_for_Your_Big_Ideas_3115401257 640w, https://res.cloudinary.com/plenti/image/upload/w_800,q_auto,f_auto/prod/Faster_Fairer_Loans_for_Your_Big_Ideas_3115401257 800w, https://res.cloudinary.com/plenti/image/upload/w_1024,q_auto,f_auto/prod/Faster_Fairer_Loans_for_Your_Big_Ideas_3115401257 1024w'
											sizes='(min-width: 960px) 60vw, (min-width: 1400px) 860px, 100vw'
											alt='Low Rate Loans'
											loading='lazy'
										/>
									</div>
								</div>
							</div>
						</figure>
					</div>
				</div>

				<Herosection></Herosection>

				{heros.map((data) => {
					return (
						<HeroWithImgage
							title={data.title}
							subtitle={data.subtitle}
							reverse={data.reverse}
							imgsrc={data.src}></HeroWithImgage>
					);
				})}
				<CarouselImages></CarouselImages>
			</Layout>
		</div>
	);
};

export default Homepage;
