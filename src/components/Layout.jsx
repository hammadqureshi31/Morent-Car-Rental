import React from 'react'
import Home from './home/Home'
import CarCards from './home/CarCards'
import Recomendations from './home/Recomendations' 
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className='bg-[#F6F7F9] p-4 flex justify-between text-center flex-col gap-4'>
                <Home />
            </div>
            <div className='bg-[#F6F7F9] sm:px-8 sm:pb-8  sm:pt-8 md:pb-8 '>
                <div className='flex justify-between text-center mb-8'>
                    <h1 className='text-xl opacity-30 font-bold sm:mx-8 md:mx-8'>Popular Cars</h1>
                    <button className='text-[#3563E9] underline font-medium sm:mx-8 md:mx-8'>View All</button>
                </div>
                <div>
                    <CarCards />
                </div> 
            </div>
            <div className='bg-[#F6F7F9] pb-5 sm:px-8 sm:pb-8 '>
                <div className='flex justify-between text-center mb-8'>
                    <h1 className='text-xl opacity-30 font-bold sm:mx-8 md:mx-8'>Recommendation Car</h1>
                    <button className='text-[#3563E9] underline font-medium sm:mx-8 md:mx-8'>View All</button>
                </div>
                <Recomendations />
                <div className='flex justify-evenly text-center mt-10 md:pb-14'>
                    <Link to='allcars'>  <div className='text-white bg-[#3563E9] text-lg font-semibold p-2 
          rounded-md tracking-wider md:ml-96'>Show More Car</div></Link>
                    <h1 className='text-xl opacity-30 font-bold mt-2 md:pl-40'>120 Car</h1>
                </div>
            </div>
        </>
    )
}

export default Layout