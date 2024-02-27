import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recomendations from '../home/Recomendations';
import { GoChevronDown } from "react-icons/go";

const data = [{
  name: 'Koenigsegg',
  type: 'Sport',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '80L',
  transmission: 'Manual', // corrected 'transmisson' to 'transmission'
  people: '2 People',
  price: '$99.00',
  id: 1
},
{
  name: 'Nissan GT - R',
  type: 'Sport',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car2.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '90L',
  transmission: 'Manual',
  people: '2 People',
  price: '$80.00',
  id: 2
},
{
  name: 'Rolls - Royce',
  type: 'Sedan',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car3.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '70L',
  transmission: 'Manual',
  people: '4 People',
  price: '$96.00',
  id: 3
},
{
  name: 'All New Rush',
  type: 'SUV',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car4.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '70L',
  transmission: 'Manual',
  people: '6 People',
  price: '$72.00',
  id: 4
}
]

const carData = [{
  name: 'Koenigsegg',
  type: 'Sport',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '80L',
  transmission: 'Manual', // corrected 'transmisson' to 'transmission'
  people: '2 People',
  price: '$99.00',
  id: 1
},
{
  name: 'Nissan GT - R',
  type: 'Sport',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car2.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '90L',
  transmission: 'Manual',
  people: '2 People',
  price: '$80.00',
  id: 2
},
{
  name: 'Rolls - Royce',
  type: 'Sedan',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car3.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '70L',
  transmission: 'Manual',
  people: '4 People',
  price: '$96.00',
  id: 3
},
{
  name: 'All New Rush',
  type: 'SUV',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car4.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '70L',
  transmission: 'Manual',
  people: '6 People',
  price: '$72.00',
  id: 4
},
{
  name: 'CR - V',
  type: 'SUV',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car6.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '80L',
  transmission: 'Manual',
  people: '6 People',
  price: '$80.00',
  id: 5
},
{
  name: 'All New Terios',
  type: 'SUV',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car4.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '90L',
  transmission: 'Manual',
  people: '6 People',
  price: '$74.00',
  id: 6
},
{
  name: 'New MG ZS',
  type: 'SUV',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car5.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '80L',
  transmission: 'Manual',
  people: '6 People',
  price: '$80.00',
  id: 7
},
{
  name: 'MG ZX Exclusive',
  type: 'Hatchback',
  heart: "./src/images/heart.svg",
  carImage: "./src/images/car6.svg",
  fuelIcon: "./src/images/vector.svg",
  fuel: '70L',
  transmission: 'Manual',
  people: '6 People',
  price: '$72.00',
  id: 8
}

]

const CarInfo = () => {
  const { id } = useParams();
  const dataId = (id - 1)

  const [carInfo, setcarInfo] = useState([])

  useEffect(() => {
    if (id < 4) {
      setcarInfo(data[dataId])
      console.log(data[dataId])
    } else {
      setcarInfo(carData[dataId])
      console.log(carData[dataId])
      console.log(id)
    }
  }, [])

  return (
    <>
      <div className='bg-[#F6F7F9] flex justify-between text-center flex-col p-3 md:w-[949px]
      lg:w-[1200px] xl:w-[1348px]'>
        <div className='sm:flex md:px-20 md:gap-12 md:w-auto'>
          <div className='flex justify-between text-center flex-col gap-4 mt-4 '>
            <div className='bg-[#3563E9] h-52 rounded-2xl p-4 sm:h-72 sm:w-72 md:w-96'>
              <h1 className='text-white text-left text-bold text-xl sm:text-2xl sm:pb-4'>Sports car with the best design and acceleration</h1>
              <h6 className='text-white text-left font-thin text-sm tracking-tight opacity-75 pt-2 w-48 sm:text-md sm:pb-4
              '
              >Safety and comfort while driving a futuristic and elegant sports car</h6>
              <img src="./src/images/car2.svg" alt="" className='mt-3 ml-6 sm:w-72 sm:ml-0' />
            </div>
            <div className='flex justify-between text-center gap-3'>
              <div className='bg-[#3563E9] rounded-lg p-1 w-36'>
                <p className='text-white text-left text-bold text-[8px] tracking-tighter'>Sports car with the best design</p>
                <p className='text-white text-left font-thin text-[8px] tracking-tigher opacity-75 '
                >Safety and comfort while driving</p>
                <img src="./src/images/car2.svg" alt="" className='h-5 w-35' />
              </div>
              <div>
                <img src="./src/images/view2.svg" alt="" />
              </div>
              <div>
                <img src="./src/images/view3.svg" alt="" />
              </div>
            </div>
          </div>



          <div className='p-5 flex justify-between text-left gap-5 flex-col bg-white mt-8 rounded-xl sm:mt-4'>
            <div>
              <div className='flex justify-between text-left'>
                <h1 className='text-lg font-bold '>{carInfo.name}</h1>
                <img src="./src/images/heart.svg" alt="" />
              </div>
              <div className='flex gap-0.5 text-left'>
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/uncheckedstar.svg" alt="" />
                <img src="./src/images/uncheckedstar.svg" alt="" />
                <h1 className='pl-2 font-semibold opacity-45'>440+ Reviewer</h1>
              </div>
            </div>
            <div>
              <h1 className='opacity-45 font-semibold'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</h1>
            </div>
            <div>
              <h1 className=' font-semibold '>Type Car
                <span className=' opacity-40 font-bold ml-4'>{carInfo.type}</span></h1>
              <h1 className=' font-semibold '>Capacity
                <span className=' opacity-40 font-bold ml-4'>{carInfo.people}</span></h1>
              <h1 className=' font-semibold '>Steering
                <span className=' opacity-40 font-bold ml-4'>{carInfo.transmission}</span></h1>
              <h1 className=' font-semibold '>Gasoline
                <span className=' opacity-40 font-bold ml-4'>{carInfo.fuel}</span></h1>
            </div>
            <div className='flex justify-between text-center'>
              <h1 className='font-bold text-lg mt-2'>{`${carInfo.price} /`} <span className='font-normal'>days</span></h1>
              <button className='bg-[#3563E9] p-3 text-white rounded-lg font-bold'>Rent Now</button>
            </div>
          </div>
        </div>


        <div className='bg-white lex justify-between text-left flex-col gap-6 p-5 mt-8'>
          <div className='flex justify-start text-center gap-3'>
            <h1 className='font-bold text-xl opacity-75'>Reviews</h1>
            <div className='bg-[#3563E9] text-white py-1 px-3 rounded-lg'>12</div>
          </div>

          <div className='flex justify-start text-center gap-3 mt-8'>
            <div><img src="./src/images/Image.svg" alt="" /></div>
            <div>
              <h1 className='text-sm font-bold pt-2'>Alex Stanton</h1>
              <p className='text-[11px]'>CEO at Bukalapak</p>
            </div>
            <div>
              <p className='text-sm tracking-tight opacity-45'>21 Feb 2024</p>
              <div className='flex justify-start text-center text-sm'>
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/uncheckedstar.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='mt-8 text-md font-semibold opacity-45'>
            <h1>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</h1>
          </div>

          <div className='flex justify-start text-center gap-3 mt-8'>
            <div><img src="./src/images/Profill.svg" alt="" /></div>
            <div>
              <h1 className='text-sm font-bold pt-2'>Alex Stanton</h1>
              <p className='text-[11px]'>CEO at Bukalapak</p>
            </div>
            <div>
              <p className='text-sm tracking-tight opacity-45'>21 Feb 2024</p>
              <div className='flex justify-start text-center text-sm'>
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/checkedstar.svg" alt="" />
                <img src="./src/images/uncheckedstar.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='mt-8 text-md font-semibold opacity-45'>
            <h1>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</h1>
          </div>
          <div className='flex justify-center text-center mt-8 opacity-45'>
            <h1>Show All </h1>
            <div className='mt-1.5'><GoChevronDown /></div>
          </div>
        </div>



        <div className='bg-[#F6F7F9] mt-8'>
          <div className='flex justify-between text-center mb-8'>
            <h1 className='text-xl opacity-30 font-bold md:mx-8'>Recommendation Car</h1>
            <button className='text-[#3563E9] underline font-medium'>View All</button>
          </div>
          <Recomendations />

        </div>


      </div>



    </>
  )
}

export default CarInfo;