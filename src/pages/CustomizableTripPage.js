import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';
import backgroundImage from '../images/background.jpg';

const CustomizeTripPage = () => {
  const location = useLocation();
  const selectedLocation = location.state?.selectedLocation; // Get the selected location from state

  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [transportations, setTransportations] = useState([]);
  const [selectedTransportation, setSelectedTransportation] = useState(null);
  const [extraFacilities, setExtraFacilities] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();  // Hook to navigate

  const fetchPrograms = async () => {
    if (selectedLocation) {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5000/api/customizable-programs/${selectedLocation.name}`
        );
        if (!response.ok) throw new Error("Failed to fetch programs");

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setPrograms(result.data);
        } else {
          throw new Error("Programs data is not an array or there was an error with the response");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchDetails = async (programId) => {
    if (programId) {
      setLoading(true);
      setError(null);

      try {
        const accommodationResponse = await fetch(
          `http://localhost:5000/api/accommodations?programId=${programId}`
        );
        if (!accommodationResponse.ok) {
          throw new Error("Failed to fetch accommodations");
        }
        const accommodationData = await accommodationResponse.json();
        setAccommodations(accommodationData);

        const transportationResponse = await fetch(
          `http://localhost:5000/api/transportations?programId=${programId}`
        );
        if (!transportationResponse.ok) throw new Error("Failed to fetch transportations");
        const transportationData = await transportationResponse.json();
        setTransportations(transportationData);

        const facilitiesResponse = await fetch(
          `http://localhost:5000/api/programs/${programId}/extra-facilities`
        );
        if (!facilitiesResponse.ok) throw new Error("Failed to fetch extra facilities");
        const facilitiesData = await facilitiesResponse.json();
        setExtraFacilities(facilitiesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, [selectedLocation]);

  const handleProgramChange = (event) => {
    const programId = event.target.value;
    setSelectedProgram(programId);
    fetchDetails(programId);
  };

  const calculateTotal = () => {
    const accommodationPrice = accommodations.find(
      (acc) => acc._id === selectedAccommodation
    )?.price || 0;

    const transportationPrice = transportations.find(
      (trans) => trans._id === selectedTransportation
    )?.price || 0;

    const facilitiesPrice = selectedFacilities.reduce((total, facilityId) => {
      const facility = extraFacilities.find((fac) => fac._id === facilityId);
      return total + (facility?.price || 0);
    }, 0);

    return accommodationPrice + transportationPrice + facilitiesPrice;
  };

  // New handle for Confirm button to navigate to the booking form
  const handleConfirmBooking = () => {
    const selectedTrip = {
      location: selectedLocation,
      program: programs.find((p) => p._id === selectedProgram),
      accommodation: accommodations.find((acc) => acc._id === selectedAccommodation),
      transportation: transportations.find((trans) => trans._id === selectedTransportation),
      extraFacilities: extraFacilities.filter((fac) => selectedFacilities.includes(fac._id)),
      totalPrice: calculateTotal(),
    };

    // Navigate to the BookingFormPage with the selected trip details
    navigate('/bookingform', { state: { trip: selectedTrip } });
;
  };

  return (
    <div className="p-6" style={{ backgroundImage: `url(${selectedLocation.imageUrl})` }}>
      <header className="shadow-md bg-cover bg-center bg-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate('/')}
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

      {selectedLocation ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white font-bold mb-6">{selectedLocation.name}</h2>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="bg-gray-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-2">Choose a Program</h3>
            <select
              id="program"
              className="p-2 border rounded"
              onChange={handleProgramChange}
              value={selectedProgram || ""}
            >
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option key={program._id} value={program._id}>
                  {program.name} ({program.duration} days)
                </option>
              ))}
            </select>
          </div>

          {selectedProgram && (
            <div>
              <div className="bg-gray-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Available Accommodations</h3>
                <select
                  className="p-2 border rounded"
                  onChange={(e) => setSelectedAccommodation(e.target.value)}
                >
                  <option value="">Select an accommodation</option>
                  {accommodations.map((accommodation) => (
                    <option key={accommodation._id} value={accommodation._id}>
                      {accommodation.hotelName} - ${accommodation.price} per night
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Available Transportations</h3>
                <select
                  className="p-2 border rounded"
                  onChange={(e) => setSelectedTransportation(e.target.value)}
                >
                  <option value="">Select a transportation</option>
                  {transportations.map((transportation) => (
                    <option key={transportation._id} value={transportation._id}>
                      {transportation.type} - ${transportation.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Extra Facilities</h3>
                <ul className="space-y-2">
                  {extraFacilities.map((facility) => (
                    <li key={facility._id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={facility._id}
                        value={facility._id}
                        className="mr-2"
                        onChange={(e) => {
                          const facilityId = facility._id;
                          if (e.target.checked) {
                            setSelectedFacilities((prev) => [...prev, facilityId]);
                          } else {
                            setSelectedFacilities((prev) => prev.filter((id) => id !== facilityId));
                          }
                        }}
                      />
                      <label htmlFor={facility._id} className="text-lg">
                        {facility.name} - ${facility.price}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="bg-gray-200 p-6 rounded-lg mt-6">
            <h3 className="text-2xl font-bold">Summary</h3>
            <ul>
              <li>
                <strong>Program:</strong>{" "}
                {selectedProgram ? programs.find((p) => p._id === selectedProgram)?.name : "None"}
              </li>
              <li>
                <strong>Accommodation:</strong>{" "}
                {selectedAccommodation
                  ? accommodations.find((acc) => acc._id === selectedAccommodation)?.hotelName
                  : "None"}
              </li>
              <li>
                <strong>Transportation:</strong>{" "}
                {selectedTransportation
                  ? transportations.find((trans) => trans._id === selectedTransportation)?.type
                  : "None"}
              </li>
              <li>
                <strong>Extra Facilities:</strong>{" "}
                {selectedFacilities.length > 0
                  ? selectedFacilities
                      .map((facilityId) => {
                        const facility = extraFacilities.find((f) => f._id === facilityId);
                        return facility?.name;
                      })
                      .join(", ")
                  : "None"}
              </li>
            </ul>
            <p className="text-xl font-bold mt-4">Total: ${calculateTotal()}</p>

            <button
              onClick={handleConfirmBooking}
              className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-600"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-white">
          <h2>Select a location to start customizing your trip.</h2>
        </div>
      )}
    </div>
  );
};

export default CustomizeTripPage;
