import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


const FilterDropDown = ({ title, option }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h3 className='font-medium sm:text-[16px] text-xs flex justify-between items-center hover:bg-[#f2efef] transition duration-300 ease-in-out px-2 py-2 cursor-pointer active:scale-95' onClick={() => setIsOpen(!isOpen)}>
                {title}
                <MdKeyboardArrowDown className='sm:text-2xl text-xl' />
            </h3>

            {
                isOpen && (
                    <div className='my-2'>
                        {option.map((opt, index) => (
                            <label key={index} className="flex items-center text-sm gap-2">
                                <input type="checkbox" className="sm:w-4 sm:h-4 w-3 h-3 ml-2" />
                                {opt}
                            </label>
                        ))}
                        <hr className='text-[#E5E5E5] my-8'/>
                    </div>
                
                )
            }
        </div>
    )
}

export default FilterDropDown