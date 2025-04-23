import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import VillaDetails from '../components/VilaDetail'
import Testimonials from '../components/Testimonials'
import Gallery from "../components/Gallery"

const Booking = () => {
  return (
    <div>
      <Gallery/>
      <VillaDetails/>
      <Testimonials/>
    </div>
  )
}

export default Booking