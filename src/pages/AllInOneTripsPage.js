
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
import backgroundImage from '../images/background.jpg';
import { useLocation } from "react-router-dom"; // Add this import

const handleHomeNavigation = () => {
  window.location.href = '/'; // Navigate to the home page
};

const AllInOneTrips = () => {
    const location = useLocation();
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedLocationFromHome = location.state?.selectedLocation || "";
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const fetchTrips = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/trips");
      if (!response.ok) throw new Error("Failed to fetch trips");

      const result = await response.json();
      if (Array.isArray(result)) {
        setTrips(result);
        setFilteredTrips(result);
      } else {
        throw new Error("Trips data is not an array");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationFilter = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handlePriceRangeFilter = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleBookNow = (trip) => {
    // Navigate to the booking form page with the price as a query parameter
    navigate("/bookallinone", { state: { trip } });
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  useEffect(() => {
    let filtered = [...trips];

    if (selectedLocation) {
      filtered = filtered.filter((trip) =>
        trip.programId.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(
        (trip) => trip.price >= min && trip.price <= max
      );
    }

    if (sortBy) {
      if (sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'date') {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
    }

    setFilteredTrips(filtered);
  }, [selectedLocation, selectedPriceRange, sortBy, trips]);

  return (
    <div className="p-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="shadow-md bg-cover bg-center">
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
            <a href="/" className="text-white hover:text-gray-200 text-lg">
              Home
            </a>
            <a href="/contactus" className="text-white hover:text-gray-200 text-lg">
              Contact Us
            </a>
            <a href="/aboutus" className="text-white hover:text-gray-200 text-lg">
              About Us
            </a>
          </nav>
        </div>
      </header>

      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-white">Available Trips</h2>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between mb-6">
        <div>
          <label htmlFor="locationFilter" className="mr-2 text-white font-bold">Location</label>
          <input
            id="locationFilter"
            type="text"
            value={selectedLocation}
            onChange={handleLocationFilter}
            placeholder="Filter by location"
            className="border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="priceRangeFilter" className="mr-2 text-white font-bold">Price Range</label>
          <select
            id="priceRangeFilter"
            value={selectedPriceRange}
            onChange={handlePriceRangeFilter}
            className="border p-2 rounded"
          >
            <option value="">All</option>
            <option value="0-100">0 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1001-5000">1001 - 5000</option>
          </select>
        </div>

        <div>
          <label htmlFor="sortBy" className="mr-2 text-white font-bold">Sort By</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortChange}
            className="border p-2 rounded"
          >
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center my-6">Loading...</div>
      ) : error ? (
        <div className="text-center my-6 text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <div key={trip._id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-300">{trip.name}</h3>
              <p className="text-md mt-2 text-white">{trip.programId.name}</p>
              <p className="text-sm mt-1 text-gray-100">{trip.programId.location}</p>
              <p className="mt-2 text-white">{trip.programId.description}</p>
              <div className="mt-4 flex justify-between items-center text-white">
                <span className="text-lg font-bold text-green-500">${trip.price}</span>
                <span className="text-sm text-gray-200">{new Date(trip.date).toLocaleDateString()}</span>
              </div>
              <button
                onClick={() => handleBookNow(trip)} // Navigate with price on click
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllInOneTrips;
