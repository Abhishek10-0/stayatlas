import React from 'react'
import Slideshow from '../components/Slideshow'
import Form from '../components/searchBar'
import Testimonials from '../components/Testimonials'

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

     

  
    </>
  )
}

export default Home