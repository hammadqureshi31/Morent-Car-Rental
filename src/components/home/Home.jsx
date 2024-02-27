import React from 'react';
import { IoSwapVertical } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

function Home() {
    return (
        <>
            <div className='md:flex md:justify-center sm:gap-8 md:gap-4 md:text-left md:mt-4'>
                <div className='bg-[#54A6FE] rounded text-white p-3 flex text-left flex-col justify-normal gap-3 relative h-48 w-full
                 sm:h-[250px] sm:mb-3 md:w-[580px] md:h-[300px] md:rounded-lg'>
                    <div className='flex text-left flex-col justify-normal gap-3 md:gap-0'>
                        <h1 className='font-medium tracking-tighter sm:text-2xl sm:pl-6 md:text-3xl md:font-normal md:p-4'
                        >The Best Platform <br />for Car Rental</h1>
                        <p className='text-xs font-extralight tracking-tighter sm:text-lg sm:ml-6 md:text-lg md:tracking-normal md:ml-4
                        '>Ease of doing a car rental safely and<br />reliably. Of course at a low price.</p>
                        <div>
                            <button className='bg-[#3563E9] px-5 py-1 rounded text-xs sm:px-8 sm:py-2 sm:text-md sm:ml-6 md:ml-6 md:mt-3 md:px-5 md:py-3
                            tracking-tighter md:text-md md:font-medium md:tracking-normal'>Rental Car</button>
                        </div>
                    </div>
                    <img src="./src/images/image7.svg" alt="" className='size-48 absolute top-1/3 ml-20 pr-2
                    sm:ml-48 sm:top-[100px] sm:w-80 sm:h-44 md:size-96 md:top-14 md:ml-32' />
                </div>

                <div className='bg-[#3563E9] rounded text-white p-3 flex text-left flex-col justify-normal gap-3 relative h-48 w-full
                 sm:h-[250px] md:w-[580px] md:h-[300px] md:rounded-lg max-sm:mt-4'>
                    <div className='flex text-left flex-col justify-normal gap-3 md:gap-0'>
                        <h1 className='font-medium tracking-tighter sm:text-2xl sm:pl-6 md:text-3xl md:font-normal md:p-4'
                        >The Best Platform <br />for Car Rental</h1>
                        <p className='text-xs font-extralight tracking-tighter sm:text-lg sm:ml-6 md:text-lg md:tracking-normal md:ml-4
                        '>Ease of doing a car rental safely and<br />reliably. Of course at a low price.</p>
                        <div>
                            <button className='bg-[#54A6FF] px-5 py-1 rounded text-xs sm:px-8 sm:py-2 sm:text-md sm:ml-6 md:ml-6 md:mt-3 md:px-5 md:py-3
                             tracking-tighter md:text-md md:font-medium md:tracking-normal'>Rental Car</button>
                        </div>
                    </div>
                    <img src="./src/images/car2.svg" alt="" className='size-48 absolute top-1/3 ml-20 pr-2
                    sm:ml-48 sm:top-[100px] sm:w-80 sm:h-44 md:size-80 md:top-20 md:ml-36 max-sm:ml-24' />
                </div>
            </div>

            <div className='flex flex-col gap-10 md:flex-row md:text-center md:justify-center md:gap-24'>

                <div className='bg-white p-4 w-full md:w-[540px] md:rounded-md'>
                    <div className='flex justify-left text-left gap-2'>
                        <input type="radio" name="" id="" checked />
                        <h2 className='tracking-wider font-semibold text-lg'>Pick-Up</h2>
                    </div>

                    <div className='flex justify-between text-center mt-1'>
                        <div>
                            <h4 className='tracking-tight font-bold'>Locations</h4>
                            <div className='flex justify-center text-center'>
                                <p className='text-sm font-semibold opacity-55 mt-1'>Select<br />your city</p>
                                <div className='mt-2'><GoChevronDown /></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='tracking-tight font-bold'>Date</h4>
                            <div className='flex justify-center text-center'>
                                <p className='text-sm font-semibold opacity-55 mt-1'>Select<br />your Date</p>
                                <div className='mt-2'><GoChevronDown /></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='tracking-tight font-bold'>Time</h4>
                            <div className='flex justify-center text-center'>
                                <p className='text-sm font-semibold opacity-55 mt-1'>Select<br />your Time</p>
                                <div className='mt-2'><GoChevronDown /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#3563E9] h-14 w-14 flex justify-center text-center rounded-md absolute left-36 
                mt-32 sm:left-72 md:top-[350px] md:left-[650px]'>
                    <button className='text-white flex justify-center text-center text-2xl mt-4'><IoSwapVertical /></button>
                </div>

                <div className='bg-white p-4 w-full md:w-[540px] md:rounded-md'>
                    <div className='flex justify-left text-left gap-2'>
                        <input type="radio" name="" id="" checked />
                        <h2 className='tracking-wider font-semibold text-lg'>Drop-Off</h2>
                    </div>
                    <div className='flex justify-between text-center mt-1'>
                        <div>
                            <h4 className='tracking-tight font-bold'>Locations</h4>
                            <div className='flex justify-center text-center'>
                                <p className='text-sm font-semibold opacity-55 mt-1'>Select<br />your city</p>
                                <div className='mt-2'><GoChevronDown /></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='tracking-tight font-bold'>Date</h4>
                            <div className='flex justify-center text-center'>
                                <p className='text-sm font-semibold opacity-55 mt-1'>Select<br />your Date</p>
                                <div className='mt-2'><GoChevronDown /></div>
                            </div>
                        </div>

                        <div>
                            <h4 className='tracking-tight font-bold'>Time</h4>
                            <div className='flex justify-center text-center'>
                                <p className='text-sm font-semibold opacity-55 mt-1'>Select<br />your Time</p>
                                <div className='mt-2'><GoChevronDown /></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
