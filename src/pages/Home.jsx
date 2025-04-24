import React from 'react'
import Slideshow from '../components/Slideshow'
import Form from '../components/searchBar'
import Testimonials from '../components/Testimonials'
import VillaDetail from '../components/VilaDetail'
const Home = () => {
  return (
    <>
     <div>Home</div>
     <div>
      <Slideshow></Slideshow>
     </div> 

     <div>
      <Form></Form>
     </div>

     <div>
      <Testimonials></Testimonials>
     </div>

     <div><VillaDetail></VillaDetail></div>

  
    </>
  )
}

export default Home