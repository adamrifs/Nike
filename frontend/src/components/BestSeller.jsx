import React from 'react'
import shoe2 from '../assets/shoe2.png'
import { bestSeller } from '../constants/Data'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const BestSeller = () => {
    const nav = useNavigate()

    return (
        <div className=' flex flex-col items-center justify-center relative'>
            <h2 className='font-medium text-[24px] text-left w-full sm:pl-22 pl-5 pt-5'>Best of Air Max</h2>

            {/* product card container */}
            <div className='h-auto  sm:w-[1344px] w-[100vw] mt-5 flex flex-wrap sm:justify-between justify-center sm:gap-0 gap-8'>
                {/* card */}
                {
                    bestSeller.map((item, index) => (
                        <motion.div className='sm:w-[432px] sm:h-[520px] h-[520px] w-[390px]  flex flex-col gap-2 relative' key={index}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}>
                            <div className='absolute top-5 left-5 bg-white rounded-[20px] py-[4px] px-[14px]'>
                                <p className='font-medium text-base text-[#007D48]'>{item.offer}</p>
                            </div>
                            <div className='sm:w-[432px] sm:h-[432px] h-[520px] w-[390px] overflow-hidden rounded-[4px]'>
                                <img src={item.image} className='w-full h-full cursor-pointer hover:scale-105 transition object-cover'
                                 onClick={() =>nav('/productListing')} />
                            </div>

                            <div className='h-[76px] '>
                                <div className='flex justify-between items-center'>
                                    <h2 className='font-semibold text-[16px]'>{item.name}</h2>
                                    <h2 className='font-semibold text-[16px]'>{item.price}</h2>
                                </div>
                                <h3 className='text-[#757575] font-normal text-base'>{item.category}</h3>
                                <h3 className='text-[#757575] font-normal text-base'>{item.color}</h3>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller