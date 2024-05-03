import React from 'react'
import { useState, useEffect } from 'react';
import { GoGear } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

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

function Recomendations() {
    const [myData, setMyData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setMyData(data);
    }, []);

    return (
        <div className='flex flex-col gap-8 sm:flex-wrap sm:flex-row md:flex-row md:flex-wrap md:justify-center md:gap-8'>
            {myData.map((item, idx) => (
                <div onClick={() => { navigate(`/${item.id}`) }} key={idx}
                    className='bg-white flex flex-col gap-6 p-3 rounded-md sm:w-60 md:w-72 md:mb-6 2xl:w-80'>
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
                        <div><button onClick={(event) => {
                            event.stopPropagation();
                            navigate(`/cart/${item.id}`);
                            }}
                        className='bg-[#3563E9] text-white text-lg font-semibold p-2 rounded'>Rent Now</button></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Recomendations;