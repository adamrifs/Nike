import React from 'react'
import trending1 from '../assets/trending1.png'
import trending2 from '../assets/trending2.png'
import trending3 from '../assets/trending3.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Trending = () => {
    const nav = useNavigate()
    const gotoProductList = () => {
        nav('/productListing')
        window.scrollTo(0, 0)
    }
    return (
        <div className=' relative'>
            <h2 className='font-medium text-[24px] text-left w-full sm:pl-22 pl-5 pt-5'>Trending Now</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-[1344px] max-w-[98vw] mx-auto my-10'>
                {/* card 1 ================================== */}
                <div className='h-[490px] sm:col-span-2 relative'>
                    <img src={trending3} className='w-[100%] h-[100%] object-cover' />
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                    {/* buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='absolute sm:top-10 sm:left-10 top-10 left-5 sm:w-[487px] w-[calc(100%-2rem)] h-auto'>
                        <h1 className='font-bold sm:text-[56px] text-3xl text-white'>
                            React Presto
                        </h1>
                        <p className='font-normal sm:text-xl text-white'>
                            With React foam for the most comfortable Presto ever.
                        </p>
                        <button
                            onClick={gotoProductList}
                            className='sm:py-3 sm:px-10 py-2 px-6 mt-5 cursor-pointer rounded-3xl bg-white text-black font-semibold hover:bg-black hover:text-white transition duration-300 ease-in-out active:scale-95'>
                            Shop Now
                        </button>
                    </motion.div>

                </div>
                {/* card 2 ==================================== */}
                <div className='bg-red-400  h-[444px] relative'>
                    <img src={trending2} className='w-[100%] h-[100%] object-cover' />
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                    <motion.h4
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='absolute bottom-5 left-5 text-white font-semibold'>Summer Must-Haves: Air Max Dia</motion.h4>
                </div>

                {/* card 3 ====================================== */}
                <div className='bg-red-400  h-[444px] relative'>
                    <img src={trending1} className='w-[100%] h-[100%] object-cover' />
                    {/* overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                    <motion.h4
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='absolute bottom-5 left-5 text-white font-semibold'>Air Jorden 11 Retro Low LE</motion.h4>
                </div>
            </div>
        </div>
    )
}

export default Trending




