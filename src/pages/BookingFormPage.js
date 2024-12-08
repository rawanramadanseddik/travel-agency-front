import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookingFormPage = () => {
  const location = useLocation();
  const trip = location.state;

  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const totalPrice = trip.price * numberOfPersons;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input type="text" className="form-input w-full" placeholder="Your Name" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="form-input w-full" placeholder="Your Email" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Number of Persons</label>
          <input
            type="number"
            className="form-input w-full"
            min="1"
            value={numberOfPersons}
            onChange={(e) => setNumberOfPersons(Number(e.target.value))}
            required
          />
        </div>
        <p className="text-lg font-bold text-green-600">
          Total Price: ${totalPrice}
        </p>
        <button type="submit" className="btn btn-primary w-full">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingFormPage;
