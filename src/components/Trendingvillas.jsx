import React from 'react';
import { properties } from './datapropertylist';

const TrendingVillas = () => {
  const trending = properties.filter(villa => villa.rating > 4.5);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {trending.map(villa => (
        <div key={villa.id} className="rounded-lg overflow-hidden shadow-md bg-white">
          <img 
            src={villa.image} 
            alt={villa.name} 
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{villa.name}</h3>
            <p className="text-sm text-gray-600">{villa.location}</p>
            <p className="text-sm mt-1">₹{villa.price.toLocaleString()}</p>
            <p className="text-sm mt-1">Rating: {villa.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingVillas;
