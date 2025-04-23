import React from 'react';

function VillaHeader() {
  return (
    <div className="villa-header-wrapper w-full px-6 py-6">
      <div className="villa-header flex justify-between items-center">
        <h1 className="text-gray-800 text-xl font-montserrat">
          Luxury - 3 BHK - AC - Pool Villa - in Panvel
        </h1>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-full flex items-center font-montserrat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 15.75L21 12m0 0l-3.75-3.75M21 12H9"
            />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}

export default VillaHeader;