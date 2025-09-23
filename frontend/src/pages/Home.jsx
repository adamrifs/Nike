import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <BestSeller/>
        <Trending/>
    </div>
  )
}

export default Home