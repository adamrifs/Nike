import React from 'react'
import shoe5 from '../assets/shoe5.png'
import { motion } from 'framer-motion'

const Banner = () => {
    const heading = 'Nike React Presto by you'
    const hWord = heading.split(" ")

    const paragraph = "Take advantage of brand new, proprietary cushioning technology with a fresh pair of Nike react shoes."
    const pWord = paragraph.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }
    const child = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    }
    return (
        <div className='flex sm:flex-row flex-col items-center justify-center'>
            <div className='sm:w-[680px] px-10 '>
                <h4 className='font-medium text-[20px]  sm:px-0 bg-gradient-to-b from-[#E2418D] to-[#FB7C76] bg-clip-text text-transparent'>Bold & Sporty</h4>
                <motion.h1
                    initial='hidden'
                    variants={container}
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='font-bold sm:text-[72px] text-4xl'>
                    {
                        hWord.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={child}
                                className='inline-block mr-2'>
                                {word}
                            </motion.span>
                        ))
                    }
                </motion.h1>
                <motion.p
                    initial='hidden'
                    variants={container}
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='font-normal sm:text-2xl text-sm mt-4'>
                    {pWord.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={child}
                            className='inline-block mr-2'
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='font-medium sm:text-base text-sm sm:w-[190px] w-[150px] py-[14px] px-[24px]  sm:mx-0 rounded-[30px] text-white bg-black mt-4'>Shop Now</motion.button>
            </div>

            {/* =================== right box ===================== */}
            <div className='sm:w-[622px] sm:h-[622px]'>
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src={shoe5} className='object-cover' />
            </div>
        </div>
    )
}

export default Banner