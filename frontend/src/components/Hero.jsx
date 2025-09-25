import React from 'react'
import landing from '../assets/landing.png'
import shoe from '../assets/shoe.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const nav = useNavigate()
    const heading = "Style That Moves With You."
    const paragraph = "Not just style. Not just comfort. Footwear that effortlessly moves with your every step."
    const pWords = paragraph.split(" ")
    const words = heading.split(' ')

    // animate each word one by one 
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // delay between each word
        }
    }

    const child = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }
    return (
        <div className='relative w-full h-[90vh] bg-no-repeat bg-top bg-cover flex sm:flex-row flex-col items-center justify-center gap-10 bg-white/80 bg-blend-overlay'
            style={{ backgroundImage: `url(${landing})` }}>

            {/* landing left box */}
            <div className=' sm:w-[670px] w-[100vw] h-[374px] flex flex-col sm:gap-4 gap-5 pt-10 sm:pt-0'>
                <h4 className='font-medium text-[20px] px-3 sm:px-0 bg-gradient-to-b from-[#E2418D] to-[#FB7C76] bg-clip-text text-transparent'>Bold & Sporty</h4>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='font-[800] sm:text-[72px] text-5xl  px-3 sm:px-0'>
                    {words.map((word, i) => (
                        <motion.span key={i}
                            variants={child}
                            className="mr-2 inline-block">
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    initial="hidden"
                    variants={container}
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='font-[400] sm:text-[22px] text-lg  px-3 sm:px-0'>
                    {
                        pWords.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={child}
                                className='inline-block mr-2'>
                                {word}
                            </motion.span>
                        ))
                    }
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    onClick={() => nav('/productListing')}
                    className='font-medium sm:text-base text-sm sm:w-[190px] w-[150px] py-[14px] px-[24px] mx-3 sm:mx-0 rounded-[30px] text-white bg-black cursor-pointer border border-black hover:bg-transparent hover:text-black '>Find Your Shoe</motion.button>
            </div>

            {/* landing right box */}
            <div className='sm:w-[722px] w-[100vw] h-[464px] relative'>
                <div className='sm:w-[693px] sm:h-[381px]'>
                    <motion.img
                        initial={{ opacity: 0, rotateZ: -50 }}
                        whileInView={{ opacity: 1, rotateZ: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }} src={shoe} className='sm:w-[100%] sm:h-[100%] w-[593px] h-[281px] object-cover sm:rotate-355 rotate-0 absolute sm:bottom-16  z-10' />
                </div>
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='absolute text-[#FF8A00] font-[800] font-gilroy sm:text-[100px] text-8xl sm:top-25 sm:left-28 top-20 left-5'>AIR</motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='absolute text-black font-[800] sm:text-[110px] text-8xl sm:bottom-[20px] sm:right-0 right-0 bottom-25'>Jorden</motion.h1>
            </div>
        </div >
    )
}

export default Hero