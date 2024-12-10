import React from 'react';
import aboutUsImage from '../images/aboutus3.jpg'; // Importing the image
import { FaCar, FaBed, FaSuitcase, FaHeadset } from 'react-icons/fa'; // Importing icons

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* About Us Content Container */}
      <div className="w-full bg-white shadow-md p-6 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        
        {/* Image on the left (only for the About Us section) */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img src={aboutUsImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* About Us Text on the Right (on large screens) */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h1 className="text-3xl font-bold mb-6 text-pink-500">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our travel agency platform! We specialize in offering seamless and tailored travel solutions to make your trips unforgettable. From convenient airport transport to luxurious accommodations, customizable trip packages, and car rental services, we handle every detail of your journey. Whether you are traveling for business, leisure, or a special occasion, our team ensures that each aspect of your experience is smooth and enjoyable. Our partnerships with trusted providers allow us to offer a wide range of options, whether you're looking for budget-friendly choices or premium experiences. We focus on giving you personalized service so you can explore your destination with ease and comfort.
          </p>
          <p className="text-gray-700 mb-4">
            Our goal is to ensure that every aspect of your journey is smooth and enjoyable. Whether you are planning a business trip, a family vacation, or a solo adventure, we have the right services to suit your needs.
          </p>
          <p className="text-gray-700 mb-4">
            We work with trusted partners to offer a variety of options, from budget-friendly services to luxurious experiences. Our team is committed to delivering excellent customer service and ensuring your satisfaction every step of the way.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section (starts full width) */}
      <div className="w-full bg-white shadow-md p-6 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-pink-500">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaSuitcase className="text-3xl text-pink-500 mb-2" />
            <p className="text-gray-700">Customizable trip packages designed around your interests, with curated programs to enhance your travel experience.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBed className="text-3xl text-pink-500 mb-2" />
            <p className="text-gray-700">A wide selection of accommodations to suit your budget and style, from budget-friendly to luxurious options.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCar className="text-3xl text-pink-500 mb-2" />
            <p className="text-gray-700">Reliable airport transport services tailored to your preferences, so you can arrive in comfort and style.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeadset className="text-3xl text-pink-500 mb-2" />
            <p className="text-gray-700">24/7 customer support to assist you at any time, ensuring peace of mind throughout your journey.</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AboutUs;
