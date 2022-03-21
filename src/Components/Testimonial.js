import React from 'react';
import axios from 'axios';

export default class Testimonial extends React.Component  {
    state = {
        rawdata: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:3000/testimonial`)
          .then(res => {
            const rawdata  = res.data;
            this.setState({ rawdata });
          })
      }
    
      render() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto text-center">
                <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">What our customers says about their financial experiance</h1>

                <div class="flex justify-center text-left  mt-12 ">


                    <div className="w-1/6 p-4 bg-gray-100 md:p-4">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Good</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor </p>
                        <div className="flex mt-2 item-center">
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div className="flex mt-3 item-center">
                            <h1 className="mr-3 text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add </button>
                        </div>
                    </div>
                    <div className="w-1/6 p-4 md:p-4">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Backpack</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolort</p>
                        <div className="flex mt-2 item-center">
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div className="flex justify-around mt-3 item-left">
                            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add </button>
                        </div>
                    </div>
                    <div className="w-1/6 bg-gray-100 p- md:p-4">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Good</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor </p>
                        <div className="flex mt-2 item-center">
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div className="flex mt-3 item-left">
                            <h1 className="mr-3 text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add </button>
                        </div>
                    </div>


                    
                </div>



                

            </div>

            <div className="flex flex-col max-w-2xl mx-auto md:flex-row">
            {
          this.state.rawdata
            .map(rawdata =>     
        <div className="max-w-xs p-5 m-2 mx-auto mr-5 bg-white shadow-2xl rounded-xl">
          <p>{rawdata.name} </p>
        <div className="flex items-center mt-5">
          <img src="https://picsum.photos/60/60" className="rounded-full" />
        <div className="ml-3">
          <h3 className="font-semibold">{rawdata.title} </h3>
          <p className="text-gray-500"> {rawdata.subtitle} </p>
        </div>
        </div>
        </div>
            )
      }
  
</div>

        </section>
      

    );
}
}


