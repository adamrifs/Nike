import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import shoe8 from '../assets/shoe8.png'
import shoe15 from '../assets/shoe15.jpg'
import shoe16 from '../assets/shoe16.png'
import shoe17 from '../assets/shoe17.png'
import shoe18 from '../assets/shoe18.png'
import shoe19 from '../assets/shoe19.png'
import shoe20 from '../assets/shoe20.png'
import shoe21 from '../assets/shoe21.png'
import shoe22 from '../assets/shoe22.png'
import shoe23 from '../assets/shoe23.png'
import { TbRulerMeasure } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
const ProductDetail = () => {
    const [image, setImage] = useState(null)

    return (
        <div>
            <Navbar />
            <div className='w-[100vw] flex items-center justify-center mt-6'>
                <div className=' flex sm:items-start justify-center gap-20 flex-wrap '>
                    <div className=' sm:w-[656px] w-[100vw] sm:h-[665px] h-auto flex sm:flex-row gap-5 justify-between sm:items-start items-center flex-col-reverse '>
                        <div className=' sm:h-[665px] sm:w-[60px] w-[100vw] h-[60px] flex sm:flex-col flex-row gap-2 '>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe15} className='cursor-pointer' onClick={() => setImage(shoe15)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe16} className='cursor-pointer' onClick={() => setImage(shoe16)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe17} className='cursor-pointer' onClick={() => setImage(shoe17)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe18} className='cursor-pointer' onClick={() => setImage(shoe18)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe19} className='cursor-pointer' onClick={() => setImage(shoe19)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe20} className='cursor-pointer' onClick={() => setImage(shoe20)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe21} className='cursor-pointer' onClick={() => setImage(shoe21)} /> </div>
                            <div className='w-[60px] h-[60px] rounded-[4px]'> <img src={shoe22} className='cursor-pointer' onClick={() => setImage(shoe22)} /> </div>
                        </div>
                        <div className=' sm:h-[600px] sm:w-[566px] w-[100vw] h-[479px] '>
                            <img src={image ? image : shoe15} className='w-full h-full object-cover' />
                        </div>
                    </div>
                    {/* ======================== right box========================== */}
                    <div className=' sm:w-[445px] w-[100vw] h-[1189px]  '>
                        <div className='sm:w-[455px] w-[100vw] h-[236px] flex flex-col gap-3 px-4'>
                            <h1 className='font-medium text-2xl'>Nike Air Max 90 SE</h1>
                            <h3 className='text-base font-normal text-[#757575]'>Women's Shoes</h3>
                            <h1 className='font-medium text-2xl'>$140</h1>
                            <h3 className='font-medium text-base text-[#007D48]'>Extra 20% off w/ code SPORT</h3>
                            <div className='w-full h-[70px] flex gap-2'>
                                <div className='w-[70px] h-[70px] rounded-[5px] active:border-2 border-[#111111] cursor-pointer  '>
                                    <img src={shoe17} />
                                </div>
                                <div className='w-[70px] h-[70px] rounded-[5px] active:border-2 border-[#111111] cursor-pointer '>
                                    <img src={shoe17} />
                                </div>
                                <div className='w-[70px] h-[70px] rounded-[5px] active:border-2 border-[#111111] cursor-pointer '>
                                    <img src={shoe17} />
                                </div>
                                <div className='w-[70px] h-[70px] rounded-[5px] active:border-2 border-[#111111] cursor-pointer '>
                                    <img src={shoe17} />
                                </div>
                                <div className='w-[70px] h-[70px] rounded-[5px] active:border-2 border-[#111111] cursor-pointer '>
                                    <img src={shoe17} />
                                </div>
                                <div className='w-[70px] h-[70px] rounded-[5px] active:border-2 border-[#111111] cursor-pointer '>
                                    <img src={shoe17} />
                                </div>
                            </div>
                        </div>

                        {/*  ==================== size guide =========================== */}
                        <div className='sm:w-[455px] w-[100vw] h-[236px] px-4'>
                            <div className='flex justify-between'>
                                <h2 className='font-medium'>Select Size</h2>
                                <h2 className='flex justify-between items-center gap-3 font-medium'><TbRulerMeasure />Size Guide</h2>
                            </div>

                            {/* ============== size guide boxes ================  */}
                            <div className='mt-3 flex flex-wrap gap-[7px]'>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'><h4>5</h4></div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'><h4>5.5</h4></div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>6</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>6.5</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>7</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>7.5</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>8</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>8.5</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>9</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>9.5</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>10</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>10.5</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>11</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>11.5</div>
                                <div className='w-[70px] h-[48px] rounded-[4px] border border-[#CCCCCC] flex items-center justify-center cursor-pointer hover:bg-[#ddd] transition duration-300 ease-out active:bg-black active:text-white'>12</div>
                            </div>

                        </div>

                        <div className='sm:w-[455px] w-[100vw] h-[136px] flex flex-col gap-4 px-4 mt-3'>
                            <button className='cursor-pointer font-medium text-base bg-black text-white rounded-[30px]
                            py-[18px] px-[20px] border-2 border-black hover:bg-transparent hover:text-black transition duration-300 active:scale-95'>Add to Bag</button>
                            <button className='cursor-pointer font-medium text-base flex justify-center items-center gap-3 border border-[#CCCCCC] rounded-[30px] py-[18px] px-[20px] transition duration-300 active:scale-95 hover:bg-black hover:text-white'><CiHeart className='font-medium text-2xl'/>Favorite</button>
                        </div>
                        <div className='w-[455px]'></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail