import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../images/aboutus.jpg';

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [activeTab, setActiveTab] = useState("bookings");
  const [showForm, setShowForm] = useState(false); // New state to toggle form visibility
  const navigate = useNavigate();

  // Fetch data for the selected tab
  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (activeTab === "bookings") url = "/api/bookings";
      if (activeTab === "trips") url = "/api/trips";
      if (activeTab === "programs") url = "/api/programs";

      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [activeTab]);

  // Handle form submission
  const handleCreate = async (tab, formData) => {
    let url = "";
    let method = "POST";

    if (formData._id) {
      method = "PUT";
      url = `/${tab}/${formData._id}`; // Fixed template literal syntax
    } else {
      url = `/${tab}`; // Fixed template literal syntax
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setShowForm(false); // Hide form after submit
      setForm({}); // Reset form fields
      alert("Record saved successfully!");
    }
  };

  // Handle deletion
  const handleDelete = async (id) => {
    const url = `/${activeTab}/${id}`; // Fixed template literal syntax
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Record deleted successfully!");
      setData(data.filter(item => item._id !== id));
    }
  };

  // Handle view (redirect to details page)
  const handleView = (id) => {
    navigate(`/view/${activeTab}/${id}`); // Fixed template literal syntax
  };

  // Toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
    setForm({}); // Reset form when toggling
  };

  return (
    <div
    className="container mx-auto p-4 flex justify-center items-center min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center', // Optional: Centers the background image
    }}
  >
      <div className="w-full max-w-4xl">
        <div className="flex mb-4 justify-center">
          <button
            onClick={() => setActiveTab("bookings")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          >
            Bookings
          </button>
          <button
            onClick={() => setActiveTab("trips")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          >
            Trips
          </button>
          <button
            onClick={() => setActiveTab("programs")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Programs
          </button>
        </div>

        {/* Show data */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-center text-white">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <ul>
            {data.map((item) => (
              <li key={item._id} className="mb-2">
                <div className="flex justify-between items-center">
                  <div>{item.name}</div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleView(item._id)}
                      className="text-blue-500"
                    >
                      View
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons to trigger form */}
        <div className="mb-4 flex justify-center space-x-4">
          <button
            onClick={toggleForm}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            {showForm ? "Close Form" : "Create New"}
          </button>

          {/* Button for delete */}
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this record?")) {
                // Perform delete logic if needed
              }
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Delete
          </button>

          {/* Button for view all */}
          <button
            onClick={() => {
              alert("Fetching all records...");
              // You can implement logic to fetch and display all records if needed
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            View All
          </button>
        </div>

        {/* Form to create or update records */}
        {showForm && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <button
                onClick={toggleForm}
                className="absolute top-2 right-2 text-red-500"
              >
                Close
              </button>

              <h3 className="text-xl font-bold mb-4">{activeTab === "bookings" ? "Create Booking" : activeTab === "trips" ? "Create Trip" : "Create Program"}</h3>
              {activeTab === "bookings" && (
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email || ""}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="No of People"
                    value={form.noOfPeople || ""}
                    onChange={(e) => setForm({ ...form, noOfPeople: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    value={form.date || ""}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                </div>
              )}

              {activeTab === "trips" && (
                <div>
                  <input
                    type="text"
                    placeholder="Trip Name"
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={form.location || ""}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    value={form.date || ""}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={form.price || ""}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                </div>
              )}

              {activeTab === "programs" && (
                <div>
                  <input
                    type="text"
                    placeholder="Program Name"
                    value={form.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={form.location || ""}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    value={form.date || ""}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={form.price || ""}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full mb-4 p-2 border rounded-lg"
                  />
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleCreate(activeTab, form)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  {form._id ? "Update" : "Create"}
                </button>
                <button
                  onClick={toggleForm}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  Close Form
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
