import React from 'react';
import TopMiniLinks from '../../components/TopMiniLinks.jsx'; // Update path accordingly

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10">
      {/* Mini Links Bar at top */}
      <TopMiniLinks />

      {/* Main Privacy Policy Box */}
      <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg mt-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-6 text-base leading-relaxed">
          This Privacy Policy is an electronic record under the provisions of the Information Technology Act, 2000, and applicable rules. Being a computer-generated document, it does not require physical or digital signatures.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection</h2>
        <p className="mb-6 text-base leading-relaxed">
          At Stay Atlas, we collect various types of information to provide and improve our services. This includes personal information such as your <strong>name</strong>, <strong>email address</strong>, <strong>phone number</strong>, and <strong>payment details</strong> when you make a booking or inquiry. We also collect non-personal information such as <strong>browser type</strong>, <strong>IP address</strong>, and <strong>usage data</strong> to enhance user experience and analyze trends.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Information</h2>
        <p className="mb-4 text-base leading-relaxed">
          The information we collect is used for various purposes, including:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-base leading-relaxed">
          <li>To provide and maintain our services.</li>
          <li>To notify you about changes to our services.</li>
          <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
          <li>To provide customer support and respond to inquiries.</li>
          <li>To gather analysis or valuable information so that we can improve our services.</li>
          <li>To monitor the usage of our services.</li>
          <li>To detect, prevent, and address technical issues.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="mb-6 text-base leading-relaxed">
          We are committed to ensuring the security of your personal information. We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. These measures include <strong>encryption</strong>, <strong>firewalls</strong>, and <strong>secure server hosting</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
        <p className="mb-6 text-base leading-relaxed">
          By accessing or using our website, you explicitly consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy. This Privacy Policy forms an integral part of the Terms and Conditions governing the use of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6 text-base leading-relaxed">
          Please note that Stay Atlas reserves the right to modify or update this Privacy Policy at any time without prior notice. We encourage users to review this policy periodically to stay informed about any changes. Your continued use of the service after any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide by and be bound by the modified policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Independent Brand</h2>
        <p className="mb-6 text-base leading-relaxed">
          Stay Atlas operates as an independent brand, and this Privacy Policy applies to all its services and platforms. We are dedicated to maintaining the trust of our users and ensuring that their personal information is handled with care.
        </p>
      </div>
    </div>
  );
}

export default Privacy;