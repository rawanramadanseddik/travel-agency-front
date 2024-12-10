import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../images/logoo.svg';
import slogan from '../images/slog.svg';

const CustomizeTripPage = () => {
  const location = useLocation();
  const selectedLocation = location.state?.selectedLocation;

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

  const navigate = useNavigate();

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
        setPrograms(result.data || []);
      } catch (err) {
        setError(err.message);
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
        const accommodationRes = await fetch(
          `http://localhost:5000/api/accommodations?programId=${programId}`
        );
        const transportationRes = await fetch(
          `http://localhost:5000/api/transportations?programId=${programId}`
        );
        const facilitiesRes = await fetch(
          `http://localhost:5000/api/programs/${programId}/extra-facilities`
        );

        if (!accommodationRes.ok || !transportationRes.ok || !facilitiesRes.ok) {
          throw new Error("Failed to fetch all details");
        }

        const accommodationData = await accommodationRes.json();
        const transportationData = await transportationRes.json();
        const facilitiesData = await facilitiesRes.json();

        setAccommodations(accommodationData);
        setTransportations(transportationData);
        setExtraFacilities(facilitiesData);
      } catch (err) {
        setError(err.message);
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

    return (
      parseFloat(accommodationPrice) +
      parseFloat(transportationPrice) +
      parseFloat(facilitiesPrice)
    );
  };

  const handleConfirmBooking = () => {
    const selectedTrip = {
      location: selectedLocation,
      program: programs.find((p) => p._id === selectedProgram),
      accommodation: accommodations.find((acc) => acc._id === selectedAccommodation),
      transportation: transportations.find((trans) => trans._id === selectedTransportation),
      extraFacilities: extraFacilities.filter((fac) => selectedFacilities.includes(fac._id)),
      totalPrice: calculateTotal(),
    };

    navigate('/bookingform', { state: { trip: selectedTrip } });
  };

  return (
    <div className="p-6" style={{ backgroundImage: `url(${selectedLocation?.imageUrl})` }}>
      <header className="shadow-md bg-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="w-40 h-40" />
            <img src={slogan} alt="Slogan" className="h-20" />
          </div>
          <nav className="space-x-6">
            <a href="/" className="text-white hover:text-gray-200 text-lg">Home</a>
            <a href="/contactus" className="text-white hover:text-gray-200 text-lg">Contact Us</a>
            <a href="/aboutus" className="text-white hover:text-gray-200 text-lg">About Us</a>
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
                  {accommodations.map((acc) => (
                    <option key={acc._id} value={acc._id}>
                      {acc.hotelName} - ${acc.price}
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
                  {transportations.map((trans) => (
                    <option key={trans._id} value={trans._id}>
                      {trans.type} - ${trans.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2">Extra Facilities</h3>
                <ul>
                  {extraFacilities.map((fac) => (
                    <li key={fac._id}>
                      <label>
                        <input
                          type="checkbox"
                          value={fac._id}
                          onChange={(e) => {
                            const id = e.target.value;
                            setSelectedFacilities((prev) =>
                              e.target.checked
                                ? [...prev, id]
                                : prev.filter((f) => f !== id)
                            );
                          }}
                        />
                        {fac.name} - ${fac.price}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="bg-gray-200 p-6 rounded-lg mt-6">
            <h3 className="text-2xl font-bold">Summary</h3>
            <p>Total: ${calculateTotal()}</p>
            <button onClick={handleConfirmBooking} className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4">
              Confirm Booking
            </button>
          </div>
        </div>
      ) : (
        <p>Select a location to customize your trip.</p>
      )}
    </div>
  );
};

export default CustomizeTripPage;
