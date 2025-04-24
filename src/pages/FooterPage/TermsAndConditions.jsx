import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d4af75] to-[#0e3226] text-white py-8">
      <div className="max-w-[90%] mx-auto my-5 p-5 md:p-8 bg-black bg-opacity-70 rounded-lg animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-slideIn">Terms and Conditions</h1>
        
        <p className="mb-4 animate-fadeInUp">
          For both online and offline bookings made through our platform, the terms used in these Terms and Conditions shall have the following meanings:
        </p>
        
        <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-white animate-slideIn">Definitions</h2>
        <ul className="list-disc ml-5 mb-6">
          <li className="mb-2 animate-fadeInUp">
            <strong>(a) Property/Properties</strong> – Refers to villas, bungalows, farmhouses, homestays, serviced apartments, and individual rooms available for reservation through Stay Atlas's booking channels.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(b) Guest/Guests</strong> – Individuals, businesses, or entities that show interest in booking a Property via Stay Atlas's booking platforms. Guests may also be addressed as "you" or "you're" depending on the context.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(c) Booking</strong> – A confirmed reservation by a Guest for accommodation at a Stay Atlas Property.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(d) Check-In</strong> – The designated date and time by which the Guest must complete all check-in procedures as required by Stay Atlas before gaining access to the reserved Property.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(e) Check-Out</strong> – The scheduled date and time by which the Guest must vacate the Property after completing all check-out formalities as stipulated by Stay Atlas.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(f) Booking Duration</strong> – The total period between the Guest's Check-In and Check-Out.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(g) Booking Fee</strong> – The full amount payable by the Guest to Stay Atlas for securing a reservation, as per the payment terms communicated by Stay Atlas.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(h) Booking Confirmation</strong> – A formal communication (email/message) sent by Stay Atlas upon receipt of the initial payment (Advance), containing all booking details, including the Guest's name, number of occupants, Check-In and Check-Out dates, Property details, number of rooms, total Booking Fee, and Security Deposit amount (if applicable), along with due dates for payment. The Guest must complete the payment of the full Booking Fee within the stipulated period, failing which the Booking may be considered invalid despite receiving the Booking Confirmation. Proof of full payment must be presented at the Property during Check-In.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(i) Advance Payment</strong> – A non-refundable deposit required from the Guest to temporarily hold a booking for a specified Property.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(j) Security Deposit</strong> – An additional refundable amount that Guests may be required to pay before Check-In, depending on the Property and booking terms. This deposit serves as a safeguard against any damages to the Property, furniture, or items within, as well as for any additional charges incurred during the Guest's stay. Any deductions, if applicable, will be communicated to the Guest post Check-Out.
          </li>
          <li className="mb-2 animate-fadeInUp">
            <strong>(k) High-Demand Dates</strong> – Refers to peak travel periods such as festive seasons (e.g., Christmas, New Year's Eve, Diwali) and long weekends, where special pricing and booking policies may apply.
          </li>
        </ul>
        
        <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-white animate-slideIn">Eligibility for Booking</h2>
        <p className="mb-4 animate-fadeInUp">
          The use of Stay Atlas's booking channels to make a reservation for any Property is restricted to individuals who are legally capable of entering into binding agreements under the Indian Contract Act, 1872. Individuals classified as 'incompetent to contract' as per the provisions of the Indian Contract Act, 1872, are not permitted to utilize Stay Atlas's booking services.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;