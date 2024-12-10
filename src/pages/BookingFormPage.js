//rawaaaaaaaa
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookingFormPage = () => {
  const location = useLocation();
  const trip = location.state?.trip;  // Access the passed trip data

  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const totalPrice = trip ? trip.totalPrice * numberOfPersons : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      noOfPeople: numberOfPersons,
      date: bookingDate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to book the trip");
      }

      const result = await response.json();
      console.log("Booking successful:", result);
      // Optionally, you can redirect the user to a confirmation page or show a success message
    } catch (error) {
      console.error("Error booking trip:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="form-input w-full"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="form-input w-full"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Booking Date</label>
          <input
            type="date"
            className="form-input w-full"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
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
