import React, { useState } from "react";



const FeedbackForm = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your feedback"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
