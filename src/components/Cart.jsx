import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const data = [{
    name: 'CR - V',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car6.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '80L',
    transmission: 'Manual',
    people: '6 People',
    price: '$80.00',
    id: 5
},
{
    name: 'All New Terios',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car4.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '90L',
    transmission: 'Manual',
    people: '6 People',
    price: '$74.00',
    id: 6
},
{
    name: 'New MG ZS',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car5.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '80L',
    transmission: 'Manual',
    people: '6 People',
    price: '$80.00',
    id: 7
},
{
    name: 'MG ZX Exclusive',
    type: 'Hatchback',
    heart: "./images/heart.svg",
    carImage: "./images/car6.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '70L',
    transmission: 'Manual',
    people: '6 People',
    price: '$72.00',
    id: 8
}
    , {
    name: 'Koenigsegg',
    type: 'Sport',
    heart: "./images/heart.svg",
    carImage: "./images/car.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '80L',
    transmission: 'Manual', // corrected 'transmisson' to 'transmission'
    people: '2 People',
    price: '$99.00',
    id: 1
},
{
    name: 'Nissan GT - R',
    type: 'Sport',
    heart: "./images/heart.svg",
    carImage: "./images/car2.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '90L',
    transmission: 'Manual',
    people: '2 People',
    price: '$80.00',
    id: 2
},
{
    name: 'Rolls - Royce',
    type: 'Sedan',
    heart: "./images/heart.svg",
    carImage: "./images/car3.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '70L',
    transmission: 'Manual',
    people: '4 People',
    price: '$96.00',
    id: 3
},
{
    name: 'All New Rush',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car4.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '70L',
    transmission: 'Manual',
    people: '6 People',
    price: '$72.00',
    id: 4
}

]

const Cart = () => {
    const { id } = useParams();
    const dataId = (id - 1)

    const [carInfo, setCarInfo] = useState([]);

    useEffect(() => {
        setCarInfo(data[dataId])
    }, [])


    return (
        <div className='bg-[#F6F7F9] p-5 flex text-left flex-col-reverse gap-10 sm:flex-row sm:px-8 2xl:pl-28'>
            <div className='flex justify-between text-left flex-col gap-10 '>
                {/* Billing Info */}
                <div className='bg-white flex flex-col gap-8 p-4 rounded-lg pb-3'>
                    <div className=''>
                        <div className='flex justify-between'>
                            <h1 className='font-bold opacity-95 text-xl'>Billing Info</h1>
                            <p className='opacity-45'>Step 1 of 4</p>
                        </div>
                        <p className='mt-1 opacity-55 text-lg'>Please enter your billing info</p>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-semibold text-lg'>Name</label>
                            <input type="text" placeholder='Your name' 
                            className='bg-[#F6F7F9] p-3 rounded-md'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-semibold text-lg'>Phone Number</label>
                            <input type="text" placeholder='Phone number' 
                            className='bg-[#F6F7F9] p-3 rounded-md'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-semibold text-lg'>Address</label>
                            <input type="text" placeholder='address' 
                            className='bg-[#F6F7F9] p-3 rounded-md'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='font-semibold text-lg'>Town/City</label>
                            <input type="text" placeholder='town or city' 
                            className='bg-[#F6F7F9] p-3 rounded-md'/>
                        </div>
                    </div>

                </div>

                {/* Rental Info */}
                <div className='bg-white flex justify-between flex-col gap-8 p-4 rounded-lg pb-3'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-xl'>Rental Info</h1>
                            <p className= 'opacity-45'>Step 2 of 4</p>
                        </div>
                        <p className='text-lg opacity-45'>Please enter your rental info</p>
                    </div>

                    <div className='flex justify-between flex-col gap-4'>
                        <div className='flex gap-4'>
                            <input type="radio" name="" id="" checked />
                            <h1 className='text-lg font-semibold'>Pick - Up</h1>
                        </div>
                        <div className='flex justify-between flex-col gap-8'>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Location</label>
                                <select name="" id="" className='bg-[#F6F7F9] p-3 rounded-md'>
                                    <option value="">Karachi</option>
                                    <option value="">Islamabad</option>
                                    <option value="">Lahore</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Date</label>
                                <input type="date" name="" id="" className='bg-[#F6F7F9] p-3 rounded-md'/>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Time</label>
                                <input type="time" name="" id="" className='bg-[#F6F7F9] p-3 rounded-md'/>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between flex-col gap-4'>
                        <div className='flex gap-4'>
                            <input type="radio" name="" id="" checked />
                            <h1 className='text-lg font-semibold'>Drop - Off</h1>
                        </div>
                        <div className='flex justify-between flex-col gap-8'>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Location</label>
                                <select name="" id="" className='bg-[#F6F7F9] p-3 rounded-md'>
                                    <option value="">Karachi</option>
                                    <option value="">Islamabad</option>
                                    <option value="">Lahore</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Date</label>
                                <input type="date" name="" id="" className='bg-[#F6F7F9] p-3 rounded-md'/>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Time</label>
                                <input type="time" name="" id="" className='bg-[#F6F7F9] p-3 rounded-md'/>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Billing Method */}
                <div className='bg-white flex justify-between flex-col gap-8 p-4 rounded-md pb-3'>
                    <div className='flex justify-between flex-col gap-4'>
                        <div className='flex justify-between'>
                            <h1 className='text-xl font-semibold opacity-95'>Payment Method</h1>
                            <p className='opacity-45'>Step 3 of 4</p>
                        </div>
                        <p className='text-lg opacity-45'>Please enter your payment method</p>
                    </div>

                    <div className='bg-[#F6F7F9] flex justify-between flex-col gap-8 p-4 rounded-md'>
                        <div className='flex justify-between p-2'>
                            <div className='flex justify-between gap-4'>
                                <input type="radio" name="" id="" />
                                <h1 className='text-lg font-semibold mt-1.5'>Credit Card</h1>
                            </div>
                            <div>
                                <img src="./images/visa.png" alt=""
                                    className='h-10 w-20' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-lg font-semibold'>Contact Number</label>
                                <input type="number" name="" id="" className='p-3 rounded-md'
                                placeholder='contact number' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-lg font-semibold'>Expration Date</label>
                                <input type="date" name="" id="" className='p-3 rounded-md'/>
                            </div>
                        </div>
                        <div  className='flex flex-col gap-8 '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-lg font-semibold'>Card Holder</label>
                                <input type="text" name="" id="" className='p-3 rounded-md'
                                placeholder='card holder' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-lg font-semibold'>CVC</label>
                                <input type="text" name="" id="" className='p-3 rounded-md'
                                placeholder='CVC' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#F6F7F9] flex justify-between  p-4 rounded-md'>
                        <div  className='flex gap-8'>
                            <input type="radio" name="" id="" />
                            <h1 className='text-lg font-semibold mt-1'>Paypal</h1>
                        </div>
                        <div>
                            <img src="./images/paypal.png" alt=""
                                className='h-10 w-20' />
                        </div>
                    </div>

                    <div className='bg-[#F6F7F9] flex justify-between  p-4 rounded-md'>
                        <div className='flex gap-8'>
                            <input type="radio" name="" id="" />
                            <h1 className='text-lg font-semibold mt-1'>Bitcoin</h1>
                        </div>
                        <div>
                            <img src="./images/bitcoin.png" alt=""
                                className='h-10 w-20' />
                        </div>
                    </div>
                </div>

                {/* Confirmation section */}
                <div className='bg-white flex justify-between flex-col gap-8 p-4 rounded-md pb-3'>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='text-xl font-bold opacity-95'>Confirmation</h1>
                            <p className='opacity-45'>Step 4 of 4</p>
                        </div>
                        <p className='text-lg opacity-45'>We are getting to the end. Just few clicks and your rental is ready!</p>
                    </div>
                    <div className='flex gap-4 bg-[#F6F7F9] p-3 rounded-md'>
                        <input type="checkbox" name="" id="" />
                        <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                    </div>
                    <div className='flex gap-4 bg-[#F6F7F9] p-3 rounded-md'>
                        <input type="checkbox" name="" id="" />
                        <p>I agree with our terms and conditions and privacy policy.</p>
                    </div>
                    <div>
                        <button className='bg-[#3563E9] px-3 py-2 text-white font-semibold rounded-md '>Rental Now</button>
                    </div>
                </div>

            </div>

            {/* Rental CarInfo */}
            <div className='bg-white p-4 pb-3 flex justify-between flex-col gap-6 rounded-lg sm:max-h-[650px] sm:px-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-xl'>Rental Summary</h1>
                    <p className='opacity-45'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                </div>

                <div className='flex justify-start text-center'>
                    <div>
                        <img src={`${carInfo.carImage}`} alt="" className='h-28 w-44 sm:h-40 sm:w-80' />
                    </div>
                    <div className='sm:ml-12 sm:mt-8'>
                        <h1 className='font-bold sm:text-xl'>{carInfo.name}</h1>
                        <div className='sm:pt-2'>
                            <div className='flex'>
                                <img src="./images/checkedstar.svg" alt="" />
                                <img src="./images/checkedstar.svg" alt="" />
                                <img src="./images/checkedstar.svg" alt="" />
                                <img src="./images/uncheckedstar.svg" alt="" />
                                <img src="./images/uncheckedstar.svg" alt="" />
                            </div>
                            <p className=' font-semibold opacity-50 sm:pt-2 sm:text-lg'>410+ Reviewer</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between text-center sm:px-12'>
                    <h1 className='opacity-45 sm:text-lg'>Subtotal</h1>
                    <h1 className='font-bold opacity-95 sm:text-lg'>{carInfo.price}</h1>
                </div>

                <div className='flex justify-between text-center  sm:px-12'>
                    <h1 className='opacity-45 sm:text-lg'>Tax</h1>
                    <h1 className='font-bold opacity-95 sm:text-lg'>$0</h1>
                </div>


                <div className=' sm:px-12'>
                    <hr />
                </div>

                <div className='flex flex-col gap-5  sm:px-12'>
                    <div className='flex justify-between text-center'>
                        <h1 className='opacity-45 sm:text-lg'>Subtotal</h1>
                        <h1 className='font-bold opacity-95 sm:text-lg'>{carInfo.price}</h1>
                    </div>

                    <div className='bg-[#F6F7F9] rounded-md flex justify-between text-center p-3 sm:text-lg'>
                        <input type="number" name="" id="" placeholder='Apply Promo Code' className='bg-[#F6F7F9] sm:text-lg'/>
                        <button>Apply now</button>

                    </div>

                    <div className='flex justify-between'>
                        <div >
                            <h1 className='font-bold opacity-90 sm:text-lg'>Total Rental Price</h1>
                            <p className='font-semibold opacity-45 sm:text-lg'>Overall price rental</p>
                        </div>
                        <div><h1 className='font-bold opacity-95 sm:text-lg'>{carInfo.price}</h1></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart