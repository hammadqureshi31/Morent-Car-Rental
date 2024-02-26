import React from 'react'

function Footer() {
  return (
    <div className='md:px-20 md:py-8 px-12 py-4'>
      <div className='md:flex md:justify-between md:text-center'>
        <div className='flex text-left flex-col gap-3'>
          <h1 className='text-2xl text-[#3563E9] font-semibold mt-2 md:text-3xl'>MORENT</h1>
          <p className='md:hidden text-lg opacity-35 font-semibold truncate tracking-tighter'>Our vision is to provide<br />convenience<br />and help increase your sales<br />business.</p>
          <p className=' max-sm:hidden text-lg opacity-35 font-semibold truncate tracking-tighter'>Our vision is to provide convenience<br /> and help increase your sales business.</p>
        </div>

        <div className='md:flex md:justify-center text-center md:gap-14'>
          <div className='mt-8 md:mt-4'>
            <div className='flex  justify-between text-left py-4 px-1 md:gap-12'>
              <h1 className='text-xl font-semibold '>About</h1>
              <h1 className='text-xl font-semibold mr-3'>Socials</h1>
            </div>
            <div className='flex  justify-between text-left px-1 md:gap-12'>
              <h1 className='text-lg font-semibold opacity-35 truncate tracking-tighter'>How it <br />works</h1>
              <h1 className='text-lg font-semibold opacity-35 tracking-tighter'>Discord <br /><br /> Instagram</h1>
            </div>
            <div className='flex  justify-between text-left  px-1 md:gap-12'>
              <h1 className='text-lg font-semibold opacity-35 truncate tracking-tighter mb-4'>Featured <br /> Partnership <br /><br />Business <br />Relation</h1>
              <h1 className='text-lg font-semibold opacity-35 truncate tracking-tighter'> <br />Twitter <br /> <br /> Facebook <br />Relation</h1>
            </div>
            {/* <div className='flex  justify-between text-left px-1 mb-6'>
                 <h1 className='text-lg font-semibold opacity-35 truncate tracking-tighter'>Business <br />Relation</h1>
                </div> */}
          </div>

          <div className='flex flex-col text-left mt-8'>
            <h1 className='text-xl font-semibold tracking-tight'>Community</h1>
            <h3 className='text-lg font-semibold opacity-35 truncate tracking-tighter mt-4'>Event</h3>
            <h3 className='text-lg font-semibold opacity-35 truncate tracking-tighter  mt-4'>Blog</h3>
            <h3 className='text-lg font-semibold opacity-35 truncate tracking-tighter  mt-4'>Podcast</h3>
            <h3 className='text-lg font-semibold opacity-35 truncate tracking-tighter  mt-4'>Invite a <br />friend</h3>

          </div>
        </div>
      </div>
      <div className='mt-10'>
        <hr />
      </div>

      <div className=' flex text-center gap-3 flex-col mt-8 opacity-85 md:flex-row md:justify-between'>
        <div className='flex justify-between text-left px-4 md:justify-start md:gap-8'>

          <h1 className='md:hidden text-lg font-semibold'>Privacy <br />& <br /> Policy</h1>
          <h1 className='max-sm:hidden text-lg font-semibold'>Privacy &  Policy</h1>
          <h1 className='md:hidden text-lg font-semibold'>Terms & <br />Conditions</h1>
          <h1 className='max-sm:hidden text-lg font-semibold'>Terms & Conditions</h1>
        </div>
        <div>
          <p className='md:hidden text-lg font-semibold text-left ml-4'>&copy; 2024 MORENT. All <br />  rights reserved.</p>
          <p className='max-sm:hidden text-lg font-semibold text-left ml-4'>&copy; 2024 MORENT. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer