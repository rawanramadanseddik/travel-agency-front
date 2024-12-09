import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
import StaySelector from '../components/SingleServices/StaySelector';
import AttractionSelector from '../components/SingleServices/AttractionSelector';
import CarRentalSelector from '../components/SingleServices/CarRentalSelector';
import AirportTransportSelector from '../components/SingleServices/AirportTransportSelector';
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
import meccaImg from '../images/mecca.jpg'; 
import cairoImg from '../images/cairo.jpg';
import parisImg from '../images/paris.jpg';
import dubaiImg from '../images/dubai.jpg';
import travelAgencyImg from '../images/travel4.jpg';




const SingleServicesPage = () => {
  const [selectedOption, setSelectedOption] = useState(''); 
  const [serviceDetails, setServiceDetails] = useState({
    stay: {
      destination: '',
      checkInDate: '',
      checkOutDate: '',
      adults: 2,
      children: 0,
      rooms: 1,
      pets: false,
    },
    attraction: { destination: '', startDate: '', endDate: '' },
    carRental: {
        pickUpLocation: '',
        pickUpDateTime: '',
        dropOffDateTime: '',
        carType: '',
      },
    airportTransport: {
        pickUpLocation: '',
        destination: '',
        dateTime: '',
        numberOfPeople: 1,
      },
  });

  const renderContent = () => {
    switch (selectedOption) {
        case 'stays':
            return (
                <StaySelector 
                    stayDetails={serviceDetails.stay}
                    setStayDetails={(updatedDetails) =>
                        setServiceDetails({ ...serviceDetails, stay: updatedDetails })
                    }
                />
            );
        case 'carRental':
            return (
                <CarRentalSelector 
                    carRentalDetails={serviceDetails.carRental}
                    setCarRentalDetails={(updatedDetails) =>
                        setServiceDetails({ ...serviceDetails, carRental: updatedDetails })
                    }
                />
            );
        case 'airportTaxi':
            return (
                <AirportTransportSelector 
                    airportTransportDetails={serviceDetails.airportTransport}
                    setAirportTransportDetails={(updatedDetails) =>
                        setServiceDetails({ ...serviceDetails, airportTransport: updatedDetails })
                    }
                />
            );
        case 'attractions':
            return (
                <AttractionSelector 
                    attractionDetails={serviceDetails.attraction}
                    setAttractionDetails={(updatedDetails) =>
                        setServiceDetails({ ...serviceDetails, attraction: updatedDetails })
                    }
                />
            );
        default:
            return null;
    }
};


  const handleHomeNavigation = () => {
    window.location.href = '/'; // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-white-100">
      <header className="bg-pink-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={handleHomeNavigation}
          >
            <img src={logo} alt="Logo" className="w-40 h-40" />
            <img src={slogan} alt="Slogan" className="h-20" />
          </div>
          {/* Navigation Bar */}
          <nav className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-800 text-lg">Home</a>
            <a href="/single-services" className="text-gray-600 hover:text-gray-800 text-lg">Single Services</a>
            <a href="/customizable-trip" className="text-gray-600 hover:text-gray-800 text-lg">Customize Trip</a>
            <a href="/public-transport" className="text-gray-600 hover:text-gray-800 text-lg">Public Transportation</a>
            <a href="/trips" className="text-gray-600 hover:text-gray-800 text-lg">Trips</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 text-lg">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-white mb-6 text-center bg-indigo-500 py-4 rounded-lg">

          Single Services 
        </h1>
        {/* Travel Agency Image */}
<div className="w-full mb-6">
  <img src={travelAgencyImg} alt="Travel Agency" className="w-full h-auto rounded-lg shadow-md" />
</div>

        {/* Service Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedOption('stays')}
            className="bg-pink-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-pink-600 flex items-center gap-2"
          >
            <FaHotel className="text-2xl" /> Stays
          </button>
          <button
            onClick={() => setSelectedOption('carRental')}
            className="bg-pink-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-pink-600 flex items-center gap-2"
          >
            <FaCar className="text-2xl" /> Car Rental
          </button>
          <button
            onClick={() => setSelectedOption('airportTaxi')}
            className="bg-pink-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-pink-600 flex items-center gap-2"
          >
            <FaTaxi className="text-2xl" /> Airport Taxi
          </button>
          <button
            onClick={() => setSelectedOption('attractions')}
            className="bg-pink-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-pink-600 flex items-center gap-2"
          >
            <FaMapMarkerAlt className="text-2xl" /> Attractions
          </button>
        </div>

        {/* Dynamic Content based on Selected Option */}
        {renderContent()}
       
        
    

        {/* The Most Popular Destinations Section */}
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">The Most Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <div className="relative">
          <img src={meccaImg} alt="Mecca" className="w-full sm:w-120 lg:w-160 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">Mecca</span>
          </div>
        </div>
        <div className="relative">
          <img src={cairoImg} alt="Cairo" className="w-full sm:w-120 lg:w-160 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">Cairo</span>
          </div>
        </div>
        <div className="relative">
          <img src={parisImg} alt="Paris" className="w-full sm:w-120 lg:w-160 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">Paris</span>
          </div>
        </div>
        <div className="relative">
          <img src={dubaiImg} alt="Dubai" className="w-full sm:w-120 lg:w-160 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">Dubai</span>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleServicesPage;
