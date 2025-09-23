import React from 'react'
import logo2 from '../assets/logoWhite.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black flex sm:flex-row flex-col items-start justify-evenly gap-10 sm:px-10 px-5 pt-20 pb-10 relative '>
        <div>
            <img src={logo2} className=' object-cover cursor-pointer'/>
        </div>
        <div className='sm:h-[186px] sm:w-[770px] flex sm:flex-row flex-col gap-3  justify-between items-start'>
            <div className=''>
                <h4 className='font-medium text-base text-white mb-2'>Featured</h4>
                <p className='font-normal text-base text-[#757575]'>Air Force 1</p>
                <p className='font-normal text-base text-[#757575]'>Huarache</p>
                <p className='font-normal text-base text-[#757575]'>Air Max 90</p>
                <p className='font-normal text-base text-[#757575]'>Air Max 95</p>
            </div>
            <div>
                <h4 className='font-medium text-base text-white mb-2'>Shoes</h4>
                <p className='font-normal text-base text-[#757575]'>All Shoes</p>
                <p className='font-normal text-base text-[#757575]'>Custom Shoes</p>
                <p className='font-normal text-base text-[#757575]'>Jordan Shoes</p>
                <p className='font-normal text-base text-[#757575]'>Running Shoes</p>
            </div>
            <div>
                <h4 className='font-medium text-base text-white mb-2'>Clothing</h4>
                <p className='font-normal text-base text-[#757575]'>All Clothing</p>
                <p className='font-normal text-base text-[#757575]'>Modest Wear</p>
                <p className='font-normal text-base text-[#757575]'>Hoodies & Pullovers</p>
                <p className='font-normal text-base text-[#757575]'>Shirts & Tops</p>
            </div>
            <div>
                <h4 className='font-medium text-base text-white mb-2'>Kids</h4>
                <p className='font-normal text-base text-[#757575]'>Infant & Toddler Shoes</p>
                <p className='font-normal text-base text-[#757575]'>Kids' Shoes</p>
                <p className='font-normal text-base text-[#757575]'>Kids' Jordan Shoes</p>
                <p className='font-normal text-base text-[#757575]'>Kids' Basketball Shoes</p>
            </div>
            
        </div>
        <div className='flex items-start gap-5 py-4'>
            <FaXTwitter  className='text-white text-3xl cursor-pointer hover:scale-90 duration-300 transition ease-in-out'/>
            <FaFacebookF className='text-white text-3xl cursor-pointer hover:scale-90 duration-300 transition ease-in-out'/>
            <FaInstagram className='text-white text-3xl cursor-pointer hover:scale-90 duration-300 transition ease-in-out'/>
        </div>

        <div className='absolute sm:bottom-5 bottom-4 left-[80px]'>
            <p className='text-white sm:text-base text-sm'>© Developed and Designed by Adam</p>
        </div>
    </div>
  )
}

export default Footer