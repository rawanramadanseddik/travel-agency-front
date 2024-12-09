import React, { useState } from 'react';
import { FaHotel, FaCar, FaTaxi, FaMapMarkerAlt, FaBed, FaCalendarAlt, FaUsers, FaCarAlt } from 'react-icons/fa';
const AttractionSelector = () => {
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
     {/* Your Checkup Summary */}
     <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Attraction Summary</h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Destination:</span>
            <span className="inline-flex w-5/6">{serviceDetails.attraction.destination}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">Start Date:</span>
            <span className="inline-flex w-5/6">{serviceDetails.attraction.startDate}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-0.5">
            <span className="inline-flex w-1/6">End Date:</span>
            <span className="inline-flex w-5/6">{serviceDetails.attraction.endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );

    };

    export default AttractionSelector;
