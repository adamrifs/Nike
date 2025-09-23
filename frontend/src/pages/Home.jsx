import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import Trending from '../components/Trending'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <BestSeller/>
        <Trending/>
        <Banner/>
    </div>
  )
}

export default Home