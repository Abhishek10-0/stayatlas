import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d4af75] to-[#0e3226] text-white py-8">
      <div className="max-w-[800px] mx-auto p-5 bg-black bg-opacity-70 rounded-lg animate-fadeIn">
        <h1 className="text-3xl font-bold mb-6 text-white animate-slideIn">Welcome to Stay Atlas</h1>
        
        <p className="mb-5 animate-fadeInUp">
          Your trusted partner in vacation home rentals based in Mumbai! We assist villa owners across India in maximizing their property's potential by connecting them with travelers seeking unique experiences.
        </p>
        
        <p className="mb-5 animate-fadeInUp">
          We believe every villa has a story! Our dedicated team showcases your property's charm through professional photography and targeted advertising, ensuring it stands out in a competitive market.
        </p>
        
        <p className="mb-5 animate-fadeInUp">
          We pride ourselves on exceptional support, offering personalized guidance on pricing, property management, and guest communication. Trust and transparency are our top priorities, providing a seamless experience for you and your guests.
        </p>
        
        <p className="mb-5 animate-fadeInUp">
          Join our growing network of villa owners and benefit from our extensive reach across popular destinations in India. Let us help you turn your property into a sought-after vacation spot while you enjoy your profits as well as peace of mind at the same time.
        </p>
        
        <p className="mb-5 animate-fadeInUp">
          Experience the difference with Stay Atlas—where your villa becomes a home away from home for travelers, and we handle the rest!
        </p>

        <div className="mt-8 p-4 bg-[rgba(139,255,177,0.9)] rounded text-black shadow-md animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-3">Our Mission and Vision</h2>
          <p>
            At Stay Atlas, our mission is to connect travelers with unique vacation experiences while empowering villa owners to maximize their property's potential. We envision a world where every villa tells its own story and provides unforgettable memories for guests.
          </p>
        </div>

        <div className="mt-8 p-4 bg-[rgba(139,255,177,0.9)] rounded text-black shadow-md animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-3">What Our Clients Say</h2>
          <p className="mb-3">"Stay Atlas transformed my villa into a top destination! Their support and marketing strategies are unmatched." - Villa Owner</p>
          <p>"I had a seamless experience with Stay Atlas. They took care of everything!" - Satisfied Guest</p>
        </div>

        <div className="mt-8 p-4 bg-[rgba(139,255,177,0.9)] rounded text-black shadow-md animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-3">Join Us Today!</h2>
          <p>
            Contact us to learn how we can help you turn your property into a sought-after vacation spot. Explore our services and become part of the Stay Atlas family!
          </p>
        </div>

        <div className="mt-8 p-4 bg-[rgba(139,255,177,0.9)] rounded text-black shadow-md animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Q: How do I list my property with Stay Atlas?</strong><br />
            A: Simply contact us through our website, and we will guide you through the process.
          </p>
          <p>
            <strong>Q: What support do you offer to villa owners?</strong><br />
            A: We provide personalized guidance on pricing, property management, and guest communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;