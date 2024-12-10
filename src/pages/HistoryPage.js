import React, { useState } from "react";

const HistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const fetchBookings = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/user/name/${name}`);
      if (!response.ok) {
        throw new Error("Failed to fetch bookings.");
      }
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      setError("Name field cannot be empty.");
      return;
    }
    setSubmittedName(userName);
    fetchBookings(userName);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking History</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>

        {loading && <div className="text-center text-gray-600">Loading...</div>}

        {error && <div className="text-center text-red-500">{error}</div>}

        {!loading && !error && submittedName && bookings.length === 0 && (
          <div className="text-center text-gray-600">
            No bookings found for "{submittedName}".
          </div>
        )}

        {!loading && bookings.length > 0 && (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li
                key={booking._id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-blue-600">
                  Booking ID: {booking._id}
                </h3>
                <p className="text-gray-700">
                  <strong>Name:</strong> {booking.name}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {booking.email}
                </p>
                <p className="text-gray-700">
                  <strong>No. of People:</strong> {booking.noOfPeople}
                </p>
                <p className="text-gray-700">
                  <strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                  <strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
