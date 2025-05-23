import React, { useState, useEffect } from "react";

import image1 from '../assets/bdroom2.jpg'
import image2 from '../assets/bdroom.jpg'
import image3 from '../assets/frontv.jpg'

const ExclusiveInfo = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [mouseStart, setMouseStart] = useState(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const property = {
          id: 1,
          name: "Silva Heritage, South Goa Pet Pool Villa",
          location: "Benaulim, India",
          beds: 5,
          baths: 5,
          guests: 10,
          price: 29999,
          rating: 5.0,
          image:[
            image1,image2,image3
          ]
     }

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                prevIndex === property.image.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds
        
        return () => clearInterval(interval);
    }, [property.image.length]);

    // Touch event handlers for swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;
        
        if (distance > minSwipeDistance) {
            // Swiped left, show next image
            setCurrentImageIndex(prevIndex => 
                prevIndex === property.image.length - 1 ? 0 : prevIndex + 1
            );
        } else if (distance < -minSwipeDistance) {
            // Swiped right, show previous image
            setCurrentImageIndex(prevIndex => 
                prevIndex === 0 ? property.image.length - 1 : prevIndex - 1
            );
        }
    };

    // Mouse event handlers for swipe
    const onMouseDown = (e) => {
        setIsMouseDown(true);
        setMouseStart(e.clientX);
    };

    const onMouseMove = () => {
        if (!isMouseDown) return;
    };

    const onMouseUp = (e) => {
        if (!isMouseDown || !mouseStart) return;
        
        const distance = mouseStart - e.clientX;
        const minSwipeDistance = 50;
        
        if (distance > minSwipeDistance) {
            // Swiped left, show next image
            setCurrentImageIndex(prevIndex => 
                prevIndex === property.image.length - 1 ? 0 : prevIndex + 1
            );
        } else if (distance < -minSwipeDistance) {
            // Swiped right, show previous image
            setCurrentImageIndex(prevIndex => 
                prevIndex === 0 ? property.image.length - 1 : prevIndex - 1
            );
        }
        
        setIsMouseDown(false);
    };

    const onMouseLeave = () => {
        setIsMouseDown(false);
    };

  return (
    <>
    <div className="w-vw bg-[#F5F5F5] h-225 md:h-215">
    <div className="absolute h-full w-full flex justify-center items-center">
        <div className="backdrop-blur-[17px] h-auto w-90 ">
            <div className=" p-2"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
                <img src={property.image[currentImageIndex]} alt="" className="h-1/2 overflow-hidden mt-40 md:mt-0" />
            </div>
            <div className="p-6 ">
              <h3 className="text-lg font-semibold text-gray-900 p-4">
                {property.name}
              </h3>
              <p className="text-sm text-gray-600 flex items-center mb-2">
                <svg className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </p>

              <div className="text-sm text-gray-700 mb-3">
                {property.beds} Beds • {property.baths} Baths • {property.guests} Guests
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    ₹{property.price}
                    <span className="text-sm text-gray-500"> /night</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium">{property.rating}</span>
                </div>
              </div>
              <div className="h-50 md:h-0 pt-2 overflow-auto md:overflow-hidden w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum facere minima est, sapiente ex quas quod dicta placeat dolorum ipsa, quidem odit ea non in totam. Maxime quas quis natus iure et non asperiores praesentium mollitia exercitationem! Velit excepturi temporibus, molestiae quo eligendi error placeat aliquid nemo commodi ut vel? Atque ducimus omnis est iusto! Soluta maiores officiis culpa quisquam accusantium eius atque repudiandae at facere fuga! Blanditiis veritatis tempore molestias possimus aut, aperiam in aliquam provident quo voluptates tenetur porro asperiores cumque ab voluptatem nulla, corporis, nobis vel?
              </div>

              <button className="w-full mt-6 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-70 transition">
                Book Now
              </button>
            </div>
        </div>
    </div>
    <div  className="h-0 md:h-full p-0 m-0 flex object-cover ">
    <div className=" w-1/2 overflow-hidden md:overflow-visible pl-20 pr-80 py-35 bg-gray-100">
   <div className="font-custom text-slate-600 space-y-4">
    
    {/* Property Name */}
    <h1 className="text-4xl font-bold leading-snug text-slate-700">{property.name}</h1>

    {/* Location */}
    <div className="flex items-center text-slate-700 font-semibold text-4xl py-2">
      <svg
        className="h-5 w-5 mr-2 text-slate-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span>{property.location}</span>
    </div>

    {/* Bed/Bath/Guest Info */}
    <div className="text-2xl text-slate-700 font-semibold py-2">
      {property.beds} Beds &bull; {property.baths} Baths &bull; {property.guests} Guests
    </div>

    {/* Price */}
    <div className="text-xl font-semibold text-slate-800 py-2">
      ₹{property.price.toLocaleString()}
      <span className="text-sm font-normal text-gray-500"> / night</span>
    </div>
    <div className="text-2xl font-semibold text-slate-800">
      Description
    </div>
    <div className="text-xl ">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nulla, illo mollitia exercitationem ipsa corporis magnam similique optio voluptatem debitis hic quos libero iste blanditiis dolorum culpa fuga, enim, nesciunt dolores in id. Incidunt laboriosam odit, est facere saepe corrupti quos rerum accusantium ducimus maiores delectus minus doloremque illum officiis. Assumenda nam accusamus, nesciunt unde maxime debitis natus, voluptates eum officiis enim et corrupti modi repudiandae minima ratione culpa beatae!
    </div>

      </div>
      </div>

        <div className="p-0 m-0 w-1/2 h-0 md:h-full object-cover"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
            <img src={property.image[currentImageIndex]} className="h-0 md:h-215" alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default ExclusiveInfo