/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function CarouselImages() {

  let dataCrs = [
    {
      src: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Health Insurance",
      subtitle: "xyz"
    },
    {
      src: "https://images.unsplash.com/photo-1583088580067-16d1109aeacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=334&q=60",
      title: "abc",
      subtitle: "xyz"
    },
    {
      title: "abc",
      subtitle: "xyz",
      src: "https://images.unsplash.com/photo-1525881652041-60a28ba9778e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "abc",
      subtitle: "xyz"
    },
    {
      src: "https://images.unsplash.com/photo-1605003823507-22247a88bf4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", title: "abc",
      subtitle: "xyz"
    },
    {
      src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      title: "abc",
      subtitle: "xyz"
    }
  ];
  return (

    <section className="container p-6 mx-auto bg-white dark:bg-gray-800 mb-24">
      <h2 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-4xl text-center">
        Top Money Saving Deals
      </h2>
      <div className='text-center text-gray-800 capitalize font-small dark:text-white md:text-1xl'>

        <p className="mt-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. su nostrud amet.
        </p>
        <p className="mt-1">
          Minim mollit non deserunt ullamco est sit aliqua dolor do amet
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {
            dataCrs.map(prop => {
              return <ImgCard title={prop.title} subtitle={prop.subtitle} src={prop.src}  ></ImgCard>;
            })
          }

        </div>
      </div>
    </section >



  )
}

export default CarouselImages;

function ImgCard(prop) {
  return (
    <div className="w-full max-w-xs text-center">
      <img
        className="object-cover object-center w-full h-full mx-auto rounded-lg h-68"
        src={prop.src}
        alt="avatar"
      />
      <div className="mt-2">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
          {prop.title}
        </h3>
        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
          {prop.subtitle}
        </span>
      </div>
    </div>
  );
}