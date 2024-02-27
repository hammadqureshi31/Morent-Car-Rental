import React, { useState, useEffect } from 'react'
import Home from '../home/Home'
import Recomendations from '../home/Recomendations'
import { GoGear } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavbar } from '../../contexts/NavBarContext';
import { IoSwapVertical } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";


const data = [{
    name: 'CR - V',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car6.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '80L',
    transmission: 'Manual',
    people: '6People',
    price: '$80.00'
},
{
    name: 'All New Terios',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car4.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '90L',
    transmission: 'Manual',
    people: '6People',
    price: '$74.00'
},
{
    name: 'New MG ZS',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car5.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '80L',
    transmission: 'Manual',
    people: '6People',
    price: '$80.00'
},
{
    name: 'MG ZX Exclusive',
    type: 'Hatchback',
    heart: "./images/heart.svg",
    carImage: "./images/car6.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '70L',
    transmission: 'Manual',
    people: '6People',
    price: '$72.00'
}
    , {
    name: 'Koenigsegg',
    type: 'Sport',
    heart: "./images/heart.svg",
    carImage: "./images/car.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '80L',
    transmission: 'Manual', // corrected 'transmisson' to 'transmission'
    people: '2People',
    price: '$99.00'
},
{
    name: 'Nissan GT - R',
    type: 'Sport',
    heart: "./images/heart.svg",
    carImage: "./images/car2.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '90L',
    transmission: 'Manual',
    people: '2People',
    price: '$80.00'
},
{
    name: 'Rolls - Royce',
    type: 'Sedan',
    heart: "./images/heart.svg",
    carImage: "./images/car3.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '70L',
    transmission: 'Manual',
    people: '4People',
    price: '$96.00'
},
{
    name: 'All New Rush',
    type: 'SUV',
    heart: "./images/heart.svg",
    carImage: "./images/car4.svg",
    fuelIcon: "./images/vector.svg",
    fuel: '70L',
    transmission: 'Manual',
    people: '6People',
    price: '$72.00'
}

]

function AllCars() {

    const [myData, setMyData] = useState([])
    const [check, setCheck] = useState(true)
    const [people, setPeople] = useState(true)
    const [filteredType, setFilteredType] = useState([])
    const [filteredPeople, setFilteredPeople] = useState([])

    const { isNavbarOpen } = useNavbar();

    useEffect(() => {
        setMyData(data)
    }, [myData])

    const handleClick = (id) => {
        if (check) {
            var filtered = myData.filter((item) => item.type === id)
            setFilteredType(filtered)
            document.getElementById('allcars').style.display = 'none'
        } else {
            document.getElementById('allcars').style.display = 'block'
            filtered = null
            setFilteredType(filtered)
        }

        let choice = document.getElementsByClassName('filter').value
        choice = !check
        setCheck(choice)
    }

    const handleClickPeople = (noOfPeople) => {
        if (people) {
            document.getElementById('allcars').style.display = 'none'
            var filterPeople = myData.filter((item) => item.people === noOfPeople)
            setFilteredPeople(filterPeople)
        } else {
            document.getElementById('allcars').style.display = 'block'
            filterPeople = null
            setFilteredPeople(filterPeople)
        }

        let choice = document.getElementsByClassName('people').value
        choice = !people
        setPeople(choice)
    }


    return (
        <>

            <div className='md:flex md:justify-left md:text-center md:flex-col'>
                <div className=' max-w-full'>
                    <div className='bg-[#F6F7F9] p-4 flex justify-between text-center flex-col gap-4'>
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
                             mt-32 sm:left-80 md:top-[20px] md:left-[650px]'>
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
                    </div>

                    <div className='bg-[#F6F7F9] md:pt-6' id='allcars'>
                        <Recomendations />
                        <div className='flex justify-evenly text-center mt-10 md:pb-14'>
                            <div><button className='text-white bg-[#3563E9] text-lg font-semibold p-2 
                          rounded-md tracking-wider md:ml-96'
                            >Show More Car</button></div>
                            <h1 className='text-xl opacity-30 font-bold mt-2 md:pl-40'>120 Car</h1>
                        </div>
                    </div>


                    {/* Filtering by Type */}

                    {filteredType !== null &&
                        <div className='bg-[#F6F7F9] flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-4'>
                            {filteredType.map((item, idx) => (
                                <div key={idx} className='bg-white flex flex-col gap-6 p-3 rounded-md md:w-72 md:mx-4 md:mb-6 md:gap-8'>
                                    <div className='flex justify-between text-center'>
                                        <div>
                                            <h1 className='font-bold text-lg tracking-wide'>{item.name}</h1>
                                            <p className='text-left opacity-40'>{item.type}</p>
                                        </div>
                                        <img className='mb-5' src={item.heart} alt="" />
                                    </div>
                                    <div>
                                        <img className='ml-4' src={item.carImage} alt="" />
                                    </div>
                                    <div className='flex justify-between text-center gap-2'>
                                        <div className='flex text-center justify-between gap-1'>
                                            <img src={item.fuelIcon} alt="" />
                                            <h4 className='text-md font-semibold opacity-35'>{item.fuel}</h4>
                                        </div>
                                        <div className='flex text-center justify-between gap-1'>
                                            <div className='text-2xl font-bold opacity-35'><GoGear /></div>
                                            <h4 className='text-sm font-semibold opacity-35'>{item.transmission}</h4>
                                        </div>
                                        <div className='flex text-center justify-between gap-1'>
                                            <div className='text-2xl font-semibold opacity-35'><BsFillPeopleFill /></div>
                                            <h4 className='text-sm font-semibold opacity-35'>{item.people}</h4>
                                        </div>
                                    </div>
                                    <div className='flex text-center justify-evenly gap-4'>
                                        <div className='flex text-center justify-between mt-3'>
                                            <h1 className='font-bold text-lg tracking-tight'>{item.price + "/"}</h1>
                                            <h4 className='text-lg font-semibold opacity-35'>day</h4>
                                        </div>
                                        <div><button className='bg-[#3563E9] text-white text-lg font-semibold p-2 rounded'>Rent Now</button></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                    {/* filtering by Capacity */}

                    {filteredPeople !== null &&
                        <div className=' bg-[#F6F7F9] flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-4'>
                            {filteredPeople.map((item, idx) => (
                                <div key={idx} className='bg-white flex flex-col gap-6 p-3 rounded-md md:w-72 md:mx-4 md:mb-6'>
                                    <div className='flex justify-between text-center'>
                                        <div>
                                            <h1 className='font-bold text-lg tracking-wide'>{item.name}</h1>
                                            <p className='text-left opacity-40'>{item.type}</p>
                                        </div>
                                        <img className='mb-5' src={item.heart} alt="" />
                                    </div>
                                    <div>
                                        <img className='ml-4' src={item.carImage} alt="" />
                                    </div>
                                    <div className='flex justify-between text-center gap-2'>
                                        <div className='flex text-center justify-between gap-1'>
                                            <img src={item.fuelIcon} alt="" />
                                            <h4 className='text-md font-semibold opacity-35'>{item.fuel}</h4>
                                        </div>
                                        <div className='flex text-center justify-between gap-1'>
                                            <div className='text-2xl font-bold opacity-35'><GoGear /></div>
                                            <h4 className='text-sm font-semibold opacity-35'>{item.transmission}</h4>
                                        </div>
                                        <div className='flex text-center justify-between gap-1'>
                                            <div className='text-2xl font-semibold opacity-35'><BsFillPeopleFill /></div>
                                            <h4 className='text-sm font-semibold opacity-35'>{item.people}</h4>
                                        </div>
                                    </div>
                                    <div className='flex text-center justify-evenly gap-4'>
                                        <div className='flex text-center justify-between mt-3'>
                                            <h1 className='font-bold text-lg tracking-tight'>{item.price + "/"}</h1>
                                            <h4 className='text-lg font-semibold opacity-35'>day</h4>
                                        </div>
                                        <div><button className='bg-[#3563E9] text-white text-lg font-semibold p-2 rounded'>Rent Now</button></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>



                {/* Menu Section */}

                {isNavbarOpen &&
                    <div className={`flex text-center flex-col absolute h-full w-44 bg-white
             top-40 -translate-y-3  pl-8 pt-8 md:w-80  md:top-24 md:ml-8 md:pt-20 md:h-[1050px]`}>
                        <div className='flex flex-col gap-12'>
                            <div className='flex text-left flex-col gap-4'>
                                <h1 className='text-xl font-semibold opacity-40'>TYPE</h1>
                                <div className='flex text-center gap-3'>

                                    <input type="checkbox" name="" id="filter" className='filter' value={check}
                                        onClick={() => { handleClick('Sport') }} />
                                    <h2 className='font-semibold opacity-80' >Sport</h2>
                                    <h1 className='font-semibold opacity-50'>(2)</h1>
                                </div>
                                <div className='flex text-center gap-3'>
                                    <input type="checkbox" name="" id="filter" className='filter' value={check}
                                        onClick={() => handleClick('Sedan')} />
                                    <h2 className='font-semibold opacity-80 '>Sedan </h2>
                                    <h1 className='font-semibold opacity-50'>(1)</h1>
                                </div>
                                <div className='flex text-center gap-3'>
                                    <input type="checkbox" name="" id="filter" className='filter' value={check}
                                        onClick={() => handleClick('SUV')} />
                                    <h2 className='font-semibold opacity-80 '>SUV </h2>
                                    <h1 className='font-semibold opacity-50'>(4)</h1>
                                </div>
                                <div className='flex text-center gap-3'>
                                    <input type="checkbox" name="" id="filter" className='filter' value={check}
                                        onClick={() => handleClick('Hatchback')} />
                                    <h2 className='font-semibold opacity-80 '>Hatchback</h2>
                                    <h1 className='font-semibold opacity-50'>(1)</h1>
                                </div>
                            </div>

                            <div className='flex text-left flex-col gap-4'>
                                <h1 className='text-xl font-semibold opacity-40 tracking-tight'>CAPACITY</h1>
                                <div className='flex text-center gap-3'>
                                    <input type="checkbox" name="" id="" className='people' value={people}
                                        onClick={() => handleClickPeople('2People')} />
                                    <h2 className='font-semibold opacity-80 '>2People</h2>
                                    <h1 className='font-semibold opacity-50'>(2)</h1>
                                </div>
                                <div className='flex text-center gap-3'>
                                    <input type="checkbox" name="" id="" className='people' value={people}
                                        onClick={() => handleClickPeople('4People')} />
                                    <h2 className='font-semibold opacity-80 '>4People</h2>
                                    <h1 className='font-semibold opacity-50'>(1)</h1>
                                </div>
                                <div className='flex text-center gap-3'>
                                    <input type="checkbox" name="" id="" className='people' value={people}
                                        onClick={() => handleClickPeople('6People')} />
                                    <h2 className='font-semibold opacity-80 ' >6People</h2>
                                    <h1 className='font-semibold opacity-50'>(5)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}

export default AllCars