import React from 'react';

const ListYourProperty = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:translate-y-1 border-2 border-[#d4af75]">
      <h2 className="text-3xl text-center text-[#2c3e50] mb-6">Property Request Form</h2>
      <form>
        <label htmlFor="firstName" className="block mb-2 font-bold">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        />

        <label htmlFor="lastName" className="block mb-2 font-bold">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        />

        <label htmlFor="email" className="block mb-2 font-bold">Email ID *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        />

        <label htmlFor="mobile" className="block mb-2 font-bold">Mobile Phone *</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        />

        <label htmlFor="location" className="block mb-2 font-bold">Select Your Property Location *</label>
        <select
          id="location"
          name="location"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        >
          <option value="">Select Location</option>
          <option value="aurangabad">Aurangabad</option>
          <option value="lonavala">Lonavala</option>
          <option value="karjat">Karjat</option>
          <option value="kasauli">Kasauli</option>
          <option value="ooty">Ooty</option>
          <option value="mussoorie">Mussoorie</option>
          <option value="panchgani">Panchgani</option>
          <option value="udaipur">Udaipur</option>
          <option value="nainital">Nainital</option>
          <option value="goa">Goa</option>
          <option value="alibaug">Alibaug</option>
          <option value="manali">Manali</option>
          <option value="coorg">Coorg</option>
          <option value="nashik">Nashik</option>
          <option value="jaipur">Jaipur</option>
          <option value="alleppey">Alleppey</option>
          <option value="wayanad">Wayanad</option>
        </select>

        <label htmlFor="propertyType" className="block mb-2 font-bold">What Type of Property? *</label>
        <select
          id="propertyType"
          name="propertyType"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        >
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="land">Land</option>
          <option value="commercial">Commercial</option>
        </select>

        <label htmlFor="rooms" className="block mb-2 font-bold">How Many Rooms? *</label>
        <select
          id="rooms"
          name="rooms"
          required
          className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        >
          <option value="">Select Number of Rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>

        <label htmlFor="photos" className="block mb-2 font-bold">Photos (Upload)</label>
        <input
          type="file"
          id="photos"
          name="photos"
          accept="image/*"
          multiple
          className="w-full mb-4"
        />

        <label htmlFor="description" className="block mb-2 font-bold">Describe Your Property</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          placeholder="Provide a brief description of your property..."
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:border-[#096b4a] focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-[#d4af75] border-2 border-[#0e3226] rounded-md hover:bg-[#0e3226] hover:scale-105 transition-all duration-200 shadow-md"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default ListYourProperty;
