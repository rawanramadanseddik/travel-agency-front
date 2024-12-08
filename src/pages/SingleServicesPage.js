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
    carRental: '',
    airportTransport: '',
  });

  const renderContent = () => {
    switch (selectedOption) {
      case 'stays':
        return (
          <div className="space-y-6">
            {/* Stays Content */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <FaBed className="text-xl text-gray-500" />
                <label className="text-lg font-semibold">Where are you going?</label>
              </div>
              <input
                type="text"
                value={serviceDetails.stay.destination}
                onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, destination: e.target.value } })}
                placeholder="Enter destination"
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>

            {/* Check-in and Check-out Date */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xl text-gray-500" />
                <label className="text-lg font-semibold">Check-in Date and Check-out Date</label>
              </div>
              <div className="flex gap-4 mt-2">
                <input
                  type="date"
                  value={serviceDetails.stay.checkInDate}
                  onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, checkInDate: e.target.value } })}
                  className="p-2 w-full border border-gray-300 rounded-lg"
                />
                <input
                  type="date"
                  value={serviceDetails.stay.checkOutDate}
                  onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, checkOutDate: e.target.value } })}
                  className="p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Adults, Children, Rooms, and Pets */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <FaUsers className="text-xl text-gray-500" />
                <label className="text-lg font-semibold">Adults, Children, Rooms</label>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="w-1/3">
                  <label className="block">Adults</label>
                  <input
                    type="number"
                    value={serviceDetails.stay.adults}
                    onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, adults: parseInt(e.target.value) } })}
                    className="p-2 w-full border border-gray-300 rounded-lg"
                    min="1"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block">Children</label>
                  <input
                    type="number"
                    value={serviceDetails.stay.children}
                    onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, children: parseInt(e.target.value) } })}
                    className="p-2 w-full border border-gray-300 rounded-lg"
                    min="0"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block">Rooms</label>
                  <input
                    type="number"
                    value={serviceDetails.stay.rooms}
                    onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, rooms: parseInt(e.target.value) } })}
                    className="p-2 w-full border border-gray-300 rounded-lg"
                    min="1"
                  />
                </div>
              </div>

              {/* Pets Checkbox */}
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  checked={serviceDetails.stay.pets}
                  onChange={(e) => setServiceDetails({ ...serviceDetails, stay: { ...serviceDetails.stay, pets: e.target.checked } })}
                  className="mr-2"
                />
                <label className="text-lg">Traveling with pets?</label>
              </div>
            </div>
          </div>
        );
      case 'carRental':
      return (
        <div className="space-y-6">
          {/* Pick-up Location */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-xl text-gray-500" />
              <label className="text-lg font-semibold">Pick-up Location</label>
            </div>
            <input
              type="text"
              value={serviceDetails.carRental.pickUpLocation}
              onChange={(e) => setServiceDetails({
                ...serviceDetails,
                carRental: { ...serviceDetails.carRental, pickUpLocation: e.target.value },
              })}
              placeholder="Enter pick-up location"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>

          {/* Pick-up Date and Time */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-xl text-gray-500" />
              <label className="text-lg font-semibold">Pick-up Date and Time</label>
            </div>
            <input
              type="datetime-local"
              value={serviceDetails.carRental.pickUpDateTime}
              onChange={(e) => setServiceDetails({
                ...serviceDetails,
                carRental: { ...serviceDetails.carRental, pickUpDateTime: e.target.value },
              })}
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>

          {/* Drop-off Date and Time */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-xl text-gray-500" />
              <label className="text-lg font-semibold">Drop-off Date and Time</label>
            </div>
            <input
              type="datetime-local"
              value={serviceDetails.carRental.dropOffDateTime}
              onChange={(e) => setServiceDetails({
                ...serviceDetails,
                carRental: { ...serviceDetails.carRental, dropOffDateTime: e.target.value },
              })}
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>

          {/* Car Type and Name */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <FaCarAlt className="text-xl text-gray-500" />
              <label className="text-lg font-semibold">Car Type and Name</label>
            </div>
            <input
              type="text"
              value={serviceDetails.carRental.carType}
              onChange={(e) => setServiceDetails({
                ...serviceDetails,
                carRental: { ...serviceDetails.carRental, carType: e.target.value },
              })}
              placeholder="Enter car type and name"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      );
      case 'airportTaxi':
  return (
    <div className="space-y-6">
      {/* Pick-up Location */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-xl text-gray-500" />
          <label className="text-lg font-semibold">Pick-up Location</label>
        </div>
        <input
          type="text"
          value={serviceDetails.airportTransport.pickUpLocation}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              airportTransport: { ...serviceDetails.airportTransport, pickUpLocation: e.target.value },
            })
          }
          placeholder="Enter pick-up location"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>

      {/* Destination */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-xl text-gray-500" />
          <label className="text-lg font-semibold">Destination</label>
        </div>
        <input
          type="text"
          value={serviceDetails.airportTransport.destination}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              airportTransport: { ...serviceDetails.airportTransport, destination: e.target.value },
            })
          }
          placeholder="Enter destination"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>

      {/* Date and Time */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-xl text-gray-500" />
          <label className="text-lg font-semibold">Date and Time</label>
        </div>
        <input
          type="datetime-local"
          value={serviceDetails.airportTransport.dateTime}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              airportTransport: { ...serviceDetails.airportTransport, dateTime: e.target.value },
            })
          }
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>

      {/* Number of People */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaUsers className="text-xl text-gray-500" />
          <label className="text-lg font-semibold">Number of People</label>
        </div>
        <input
          type="number"
          value={serviceDetails.airportTransport.numberOfPeople}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              airportTransport: { ...serviceDetails.airportTransport, numberOfPeople: parseInt(e.target.value) },
            })
          }
          min="1"
          placeholder="Enter number of people"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
  case 'attractions':
  return (
    <div className="space-y-6">
      {/* Where are you going? */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-xl text-gray-500" />
          <label className="text-lg font-semibold">Where are you going?</label>
        </div>
        <input
          type="text"
          value={serviceDetails.attraction.destination || ''}
          onChange={(e) =>
            setServiceDetails({
              ...serviceDetails,
              attraction: { ...serviceDetails.attraction, destination: e.target.value },
            })
          }
          placeholder="Enter destination"
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>

      {/* Start and End Date */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-xl text-gray-500" />
          <label className="text-lg font-semibold">Start and End Date</label>
        </div>
        <div className="flex gap-4 mt-2">
          <input
            type="date"
            value={serviceDetails.attraction.startDate || ''}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                attraction: { ...serviceDetails.attraction, startDate: e.target.value },
              })
            }
            className="p-2 w-full border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            value={serviceDetails.attraction.endDate || ''}
            onChange={(e) =>
              setServiceDetails({
                ...serviceDetails,
                attraction: { ...serviceDetails.attraction, endDate: e.target.value },
              })
            }
            className="p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );



    default:
      return null;
  }
};

  const handleHomeNavigation = () => {
    window.location.href = '/'; // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
        {/* Checkout Summary */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
           <h2 className="text-xl font-semibold mb-4">Your Checkout Summary</h2>
           <div className="space-y-4">
              {/* Display stay details if selected */}
              {selectedOption === 'stays' && (
                <div>
                   <h3 className="text-lg">Stay Details</h3>
                   <p>Destination: {serviceDetails.stay.destination}</p>
                   <p>Check-in: {serviceDetails.stay.checkInDate}</p>
                   <p>Check-out: {serviceDetails.stay.checkOutDate}</p>
                   <p>Rooms: {serviceDetails.stay.rooms}</p>
                 </div>
               )}
             </div>
          </div>

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
