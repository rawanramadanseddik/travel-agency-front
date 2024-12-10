import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-6 text-center">
          Have questions or need assistance? Our team is here to help you. Reach out to us through any of the options below.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Section */}
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
            <FaEnvelope className="text-4xl text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h2>
            <p className="text-gray-700">Reach out to us via email for any inquiries or support.</p>
            <a
              href="mailto:support@travelagency.com"
              className="text-pink-500 mt-2 font-medium hover:underline"
            >
              support@travelagency.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
            <FaPhoneAlt className="text-4xl text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h2>
            <p className="text-gray-700">Speak to our support team directly for urgent matters.</p>
            <p className="text-pink-500 mt-2 font-medium">+1 (800) 123-4567</p>
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
            <FaMapMarkerAlt className="text-4xl text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h2>
            <p className="text-gray-700">Come by our office during business hours for assistance.</p>
            <p className="text-gray-700 mt-2">123 Main Street</p>
            <p className="text-gray-700">City, Country</p>
          </div>
        </div>

        {/* Additional Note or CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            We are available 24/7 to provide you with the best support and guidance for your travel needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
