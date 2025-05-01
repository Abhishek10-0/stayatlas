import React from 'react';
import { Link } from 'react-router-dom'; // If you are using react-router-dom

const TopMiniLinks = () => {
  return (
    <div className="w-full flex justify-center space-x-5 text-sm text-center mt-2">
      <Link to="/terms-and-conditions" className="text-blue-600 hover:underline">
        Terms & Conditions
      </Link>
      <span className="text-black">|</span>
      <Link to="/privacy-policy" className="text-blue-600 hover:underline">
        Privacy Policy
      </Link>
      <span className="text-black">|</span>
      <Link to="/cancellation-policy" className="text-blue-600 hover:underline">
        Cancellation Policy
      </Link>
    </div>
  );
}

export default TopMiniLinks;
