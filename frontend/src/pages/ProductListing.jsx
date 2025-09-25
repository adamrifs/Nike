import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { MdKeyboardArrowDown } from "react-icons/md";
import FilterDropDown from '../components/FilterDropDown';
import shoe2 from '../assets/shoe2.png'
import { shoesList } from '../constants/Data';
import { PiSlidersHorizontalFill } from "react-icons/pi";

const ProductListing = () => {

    return (
        <div>
            <Navbar />
            {/* ================= heading and sort buttons ==================  */}
            <div className='flex items-center justify-between sm:px-10 px-5 py-5'>
                <h2 className='text-2xl font-medium '>New (500)</h2>
                <div className='flex sm:gap-10 gap-5 '>
                    <p className='font-normal sm:text-[16px] text-sm flex items-center justify-between gap-2 cursor-pointer'>Hide Filters <PiSlidersHorizontalFill className='sm:text-2xl text-xl' /></p>
                    <p className='font-normal sm:text-[16px] text-sm flex items-center justify-between gap-2 cursor-pointer'>Sort By  <MdKeyboardArrowDown className='sm:text-3xl text-xl' /></p>
                </div>
            </div>

            {/* ============== main box starts here ============= */}
            <div className='flex items-start justify-between sm:px-10 px-5'>
                {/* left section */}
                <div className='sm:w-[200px] w-[120px] h-screen flex flex-col pr-2'>
                    <div>
                        <p className='font-medium sm:text-sm text-xs py-2'>Low Top</p>
                        <p className='font-medium sm:text-sm text-xs py-2'>High Top</p>
                        <p className='font-medium sm:text-sm text-xs py-2'>Skateboarding</p>
                        <p className='font-medium sm:text-sm text-xs py-2'>Nike By You</p>
                    </div>
                    <hr className='text-[#E5E5E5] my-5' />
                    <div>
                        <FilterDropDown title={'Gender'} option={["Men", "Women", "Unisex"]} />
                    </div>
                    <div>
                        <FilterDropDown title={'Kids'} option={["Boys", "Girls"]} />
                    </div>
                    <div>
                        <FilterDropDown title={'Shop By Price'} option={["$25 - $50", "$50 - $100", "$100 - $150", "Over $150"]} />
                    </div>
                    <div>
                        <FilterDropDown title="Sports" option={["Lifestyle", "Skateboarding", "Dance"]}
                        />
                    </div>
                </div>
                {/* ===================== right box ========================= */}
                <div className='sm:w-[1092px] w-full h-[auto] flex flex-wrap gap-5 pb-10'>
                    {/* ===================== card ==================== */}
                    {shoesList.map((shoe, index) => (
                        <div className='sm:w-[348px] w-[130px] sm:h-[436px] h-[200px] relative cursor-pointer'>
                            <div className='absolute sm:top-5 sm:left-5 top-2 left-2 bg-white  rounded-[20px] sm:py-[4px] py-[2px] sm:px-[14px] px-[5px]'>
                                <p className='font-medium sm:text-base text-[10px] text-[#007D48]'>{shoe.offer}</p>
                            </div>
                            <div className='sm:w-[348px] w-[130px] sm:h-[348px] h-[120px] rounded-[4px] overflow-hidden'>
                                <img src={shoe.image} className='w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out' />
                            </div>
                            <div className='flex justify-between my-2'>
                                <h2 className='sm:text-base text-[11px] font-medium'>{shoe.name}</h2>
                                <h2 className='sm:text-base text-[11px] font-medium'>{shoe.price}</h2>
                            </div>
                            <h2 className='text-[#757575] sm:text-base text-[8px] font-normal'>{shoe.category}</h2>
                            <h2 className='text-[#757575] sm:text-base text-[8px] font-normal'>{shoe.color}</h2>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProductListing