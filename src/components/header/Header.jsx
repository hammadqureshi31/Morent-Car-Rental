import React from 'react';
import { NavBarContext, useNavbar } from '../../contexts/NavBarContext.jsx';

function Header() {
    const {toggleNavbar,isNavbarOpen} = useNavbar()

    return (
        <div className='p-5 md:px-8 md:bg-white'>
            <div className='flex justify-between items-center sm:px-8'>
                <h1 className='text-2xl text-[#3563E9] font-semibold mt-2'>MORENT</h1>

                {/* Search bar and filter button - visible on medium screens and larger */}
                <div className='hidden sm:flex sm:justify-center sm:text-center sm:flex-row gap-5'>
                    <div className='flex justify-evenly gap-5 text-center border-[1px] py-2 px-4 rounded-md'>
                        <img src="./assets/images/search-normal.svg" alt="" />
                        <input type="text" name="" id="" placeholder='Search Something here'
                            className='font-semibold w-40 text-sm md:w-96 md:text-lg' />
                    </div>
                    <div className='border-[1px] text-xl rounded-md flex justify-center text-center w-10'
                    onClick={toggleNavbar}>
                        
                        <img src="./assets/images/filter.svg" alt="" className='text-2xl p-2'
                        />
                    </div>
                </div>

                {/* Navigation icons - visible on medium screens and larger */}
                <div className='hidden sm:flex sm:justify-between md:text-end sm:gap-4 md:mt-2 md:ml-20'>
                    <div className='h-10 w-10 flex justify-center items-center rounded-full p-2 border-[1px]'>
                        <img src="./assets/images/Vectorh1.svg" alt="" />
                    </div>
                    <div className='h-10 w-10 flex justify-center items-center rounded-full p-2 border-[1px]'>
                        <img src="./assets/images/Vectorh2.svg" alt="" />
                    </div>
                    <div className='h-10 w-10 flex justify-center items-center rounded-full p-2 border-[1px]'>
                        <img src="./assets/images/Vectorh3.svg" alt="" />
                    </div>
                </div>

                {/* Image - visible on all screens */}
                <img src="./assets/images/Image.svg" alt="" className='w-12 h-12 md:h-14 md:w-14 md:mr-2' />
            </div>

            {/* Search bar and filter button - visible on small screens */}
            <div className='sm:hidden flex justify-between items-center mt-5 gap-3 sm:px-8'>
                <div className='flex justify-evenly gap-5 text-center border-[1px] py-2 px-4 rounded-md'>
                    <img src="./assets/images/search-normal.svg" alt="" />
                    <input type="text" name="" id="" placeholder='Search Something here'
                        className='font-semibold w-40 text-sm' />
                </div>
                <div className={'border-[1px] text-xl rounded-md flex justify-center text-center w-10'}
                    onClick={toggleNavbar}>
                    <img src="./assets/images/filter.svg" alt="" className='text-2xl p-2' />
                </div>
            </div>
        </div>
    );
}

export default Header;
