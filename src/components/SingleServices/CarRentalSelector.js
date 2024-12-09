import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
const CarRentalSelector = () => {
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
        {/* Your Checkup Summary */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Car Rental Summary</h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Pick-up Location:</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.pickUpLocation}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Pick-up Date & Time:</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.pickUpDateTime}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Drop-off Date & Time:</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.dropOffDateTime}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Car Type:</span>
            <span className="inline-flex w-5/6">{serviceDetails.carRental.carType}</span>
          </div>
        </div>
      </div>
    </div>
        
        );
    };

    export default CarRentalSelector;
