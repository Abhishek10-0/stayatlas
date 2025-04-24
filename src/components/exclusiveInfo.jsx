import React from "react";
import { useState } from "react";
import image1 from '../assets/bdroom2.jpg'

const ExclusiveInfo = () => {

    const property = {
          id: 1,
          name: "Silva Heritage, South Goa Pet Pool Villa",
          location: "Benaulim, India",
          beds: 5,
          baths: 5,
          guests: 10,
          price: 29999,
          rating: 5.0,
          image: [
            image1,image2,image3
          ]
     }
  return (
    <>
    <div className="w-vw bg-[#F5F5F5] h-180">
    <div className="absolute h-full w-full flex justify-center items-center">
        <div className="backdrop-blur-[10px] h-auto w-90 ">
            <div className="p-2">
                <img src={image1} alt="" className="h-1/2" />
            </div>
            <div className="p-6 ">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
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

              <button className="w-full mt-6 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
                Enquire Now
              </button>
            </div>
        </div>
    </div>
    <div  className="p-0 m-0 flex object-cover h-full">
        <div className="w-1/2">
            <div className="font-custom text-2xl text-slate-600 flex-row gap-y-2">
                <div>
                    <h1 className="font-custom text-bold"> {property.name}</h1>
                </div>
                <div className="flex">
                <svg className="h-5 w-5 m-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                    {property.location}
                </div>
                <div>
                {property.beds} Beds • {property.baths} Baths • {property.guests} Guests 
                </div>
                <div>
                    {property.price}
                </div>
            </div>
        </div>
        <div className="p-0 m-0 w-1/2 h-full object-cover">
            <img src={image1} className="h-174.5" alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default ExclusiveInfo