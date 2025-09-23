import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='sm:h-[80px] h-[60px] flex items-center justify-between sm:px-10 px-5'>
            <div className=' '>
                <img src={logo} alt='logo' className='w-[100%] h-[100%] object-cover cursor-pointer' />
            </div>

            <div className=''>
                <ul className='sm:flex items-center justify-center gap-[24px] hidden'>
                    <li className='font-[500] text-[16px] cursor-pointer'>Men</li>
                    <li className='font-[500] text-[16px] cursor-pointer'>Women</li>
                    <li className='font-[500] text-[16px] cursor-pointer'>Kids</li>
                    <li className='font-[500] text-[16px] cursor-pointer'>Collections</li>
                    <li className='font-[500] text-[16px] cursor-pointer'>Contact</li>
                </ul>
            </div>

            <div className='flex items-center justify-center gap-10'>
                <p className='font-medium text-[14px] sm:text-base cursor-pointer'>Search</p>
                <p className='font-medium text-[14px] sm:text-base cursor-pointer'>My Cart</p>
            </div>
        </div>
    )
}

export default Navbar