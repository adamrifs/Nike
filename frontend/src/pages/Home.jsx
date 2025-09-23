import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import Trending from '../components/Trending'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <BestSeller/>
        <Trending/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home