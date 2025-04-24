import React from 'react';

const PropertyRequestForm = () => {
  return (
    <div className="bg-gradient-to-r from-[#d4af75] to-[#0e3226] p-5">
      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg border-2 border-[#d4af75] transition-transform transform hover:translate-y-1">
        <h2 className="text-3xl font-semibold text-center text-[#2c3e50] mb-6">Property Request Form</h2>
        <form>
          <label htmlFor="firstName" className="block text-lg font-bold mb-2">First Name *</label>
          <input type="text" id="firstName" name="firstName" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]" />

          <label htmlFor="lastName" className="block text-lg font-bold mb-2">Last Name *</label>
          <input type="text" id="lastName" name="lastName" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]" />

          <label htmlFor="email" className="block text-lg font-bold mb-2">Email ID *</label>
          <input type="email" id="email" name="email" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]" />

          <label htmlFor="mobile" className="block text-lg font-bold mb-2">Mobile Phone *</label>
          <input type="tel" id="mobile" name="mobile" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]" />

          <label htmlFor="location" className="block text-lg font-bold mb-2">Select Your Property Location *</label>
          <select id="location" name="location" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]">
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

          <label htmlFor="propertyType" className="block text-lg font-bold mb-2">What Type of Property? *</label>
          <select id="propertyType" name="propertyType" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]">
            <option value="">Select Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>

          <label htmlFor="rooms" className="block text-lg font-bold mb-2">How Many Rooms? *</label>
          <select id="rooms" name="rooms" required className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]">
            <option value="">Select Number of Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>

          <label htmlFor="photos" className="block text-lg font-bold mb-2">Photos (Upload)</label>
          <input type="file" id="photos" name="photos" accept="image/*" multiple className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]" />

          <label htmlFor="description" className="block text-lg font-bold mb-2">Describe Your Property</label>
          <textarea id="description" name="description" rows="4" placeholder="Provide a brief description of your property..." className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096b4a]"></textarea>

          <button type="submit" className="w-full py-3 bg-[#d4af75] text-white font-bold rounded-lg hover:bg-[#0e3226] transform transition-all duration-300">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyRequestForm;
