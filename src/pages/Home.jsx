import React from 'react'
import Slideshow from '../components/Slideshow'
import Form from '../components/searchBar'
import Testimonials from '../components/Testimonials'
import TrendingVillas from '../components/Trendingvillas'


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
      <TrendingVillas></TrendingVillas>
     </div>

     <div>
      <Testimonials></Testimonials>
     </div>   

    </>
  )
}

export default Home