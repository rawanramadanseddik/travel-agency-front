import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
const AirportTransportSelector = () => {
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
  return (
    <div>
    <div className="space-y-6">
      {/* Pick-up Location */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-xl text-pink-500" />
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
          <FaMapMarkerAlt className="text-xl text-pink-500" />
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
          <FaCalendarAlt className="text-xl text-pink-500" />
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
          <FaUsers className="text-xl text-pink-500" />
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
      {/* Airport Transport Summary */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Airport Transport Summary</h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Pick-up Location:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.pickUpLocation}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Destination:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.destination}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Date & Time:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.dateTime}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Number of People:</span>
            <span className="inline-flex w-5/6">{serviceDetails.airportTransport.numberOfPeople}</span>
          </div>
        </div>
      </div>
    </div>
  );

    };

    export default AirportTransportSelector;
