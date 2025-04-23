import React from 'react'
// import Footer from '../components/footer'
// import Header from '../components/Header'
import VillaDetails from '../components/VilaDetail'
import Testimonials from '../components/Testimonials'
import Gallery from "../components/Gallery"
import VillaHeader from '../components/VillaHeader'

const Booking = () => {
  return (
    <div>
      <VillaHeader/>
      <Gallery/>
      <VillaDetails/>
      <Testimonials/>
    </div>
  )
}

export default Booking