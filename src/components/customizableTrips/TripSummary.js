import React from 'react';

const TripSummary = ({ tripDetails }) => {
    const calculateTotalPrice = () => {
      if (!tripDetails) return 0; // Guard against undefined tripDetails
  
      let price = 0;
  
      // Ensure location, accommodation, transportation, and facilities are available
      if (tripDetails.location) {
        // Apply any logic or price modification based on location if needed
        if (tripDetails.location === "Paris") price += 200;
        if (tripDetails.location === "New York") price += 150;
      }
  
      if (tripDetails.accommodation) {
        if (tripDetails.accommodation === "Hotel") price += 100;
        if (tripDetails.accommodation === "Hostel") price += 50;
      }
  
      if (tripDetails.transportation) {
        if (tripDetails.transportation === "Bus") price += 30;
        if (tripDetails.transportation === "Car") price += 80;
      }
  
      if (tripDetails.facilities) {
        if (tripDetails.facilities.includes("Wifi")) price += 10;
        if (tripDetails.facilities.includes("Breakfast")) price += 20;
      }
  
      return price;
    };
  
    const totalPrice = calculateTotalPrice();
  
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Trip Summary</h2>
        <div>
          <p><strong>Location:</strong> {tripDetails.location || "Not Selected"}</p> {/* Safeguard for location */}
          <p><strong>Accommodation:</strong> {tripDetails.accommodation || "Not Selected"}</p>
          <p><strong>Transportation:</strong> {tripDetails.transportation || "Not Selected"}</p>
          <p><strong>Facilities:</strong> {tripDetails.facilities.length > 0 ? tripDetails.facilities.join(', ') : "None"}</p>
          <p><strong>Total Price:</strong> ${totalPrice}</p>
        </div>
      </div>
    );
  };
  
  export default TripSummary;
  