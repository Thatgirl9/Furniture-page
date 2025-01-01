import React from 'react'
import "./homePage.css"

const Home = () => {
  return (
   <section className="homeSection flex justify-end items-center px-10">
    <div className="bg-primaryBrown-1 rounded-md pl-7 pr-5 pt-10 pb-7 mt-12">
    <h4 className='text-base font-semibold text-primaryText-2 mb-1'>New Arrival</h4>
    <h1 className="w-[13ch] font-bold text-[3.25rem] leading-[65px] text-primaryBrown-0">Discover Our New Collection</h1>
    <p className='w-[48ch] text-lg font-medium text-primaryText-2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

    <button className='mt-10 bg-primaryBrown-0 text-primaryBrown-1 py-5 px-10 font-bold text-base'>BUY NOW</button>
    </div>
    
   </section>
  )
}

export default Home