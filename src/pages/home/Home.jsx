import React from 'react'
import Pricing from '../../components/pricing/Pricing'
import Navbar from '../../components/navbar/Navbar'
import "./Home.scss"
import AddOn from '../../components/addOns/AddOn'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Pricing/>
        <AddOn/>
    </div>
  )
}

export default Home