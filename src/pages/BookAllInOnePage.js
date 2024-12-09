
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const BookAllInOnePage = () => {
//   const location = useLocation();
//   const trip = location.state?.trip;  // Access the passed trip data
//   console.log(trip);
//   const [numberOfPersons, setNumberOfPersons] = useState(1);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
  
//   const totalPrice = trip?.price * numberOfPersons;


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingData = {
//         name: name,
//         email: email,
//         noOfPeople: numberOfPersons,
//         date: trip.date,
//     };
      
      

//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to book the trip");
//       }

//       const result = await response.json();
//       console.log("Booking successful:", result);
//       // Optionally, you can redirect the user to a confirmation page or show a success message
//     } catch (error) {
//       console.error("Error booking trip:", error);
//       // Optionally, show an error message to the user
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium">Full Name</label>
//           <input
//             type="text"
//             className="form-input w-full"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             className="form-input w-full"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
       
//         <div>
//           <label className="block text-sm font-medium">Number of Persons</label>
//           <input
//             type="number"
//             className="form-input w-full"
//             min="1"
//             value={numberOfPersons}
//             onChange={(e) => setNumberOfPersons(Number(e.target.value))}
//             required
//           />
//         </div>
        
//         <button type="submit" className="btn btn-primary w-full">
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookAllInOnePage;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookAllInOnePage = () => {
  const location = useLocation();
  const trip = location.state?.trip; // Access the passed trip data
  console.log(trip);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const totalPrice = trip?.price * numberOfPersons;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct booking data
    const bookingData = {
      name: name,
      email: email,
      noOfPeople: numberOfPersons,
      date: trip.date,
    };

    // Conditionally add optional fields
    if (trip.accommodationId) {
      bookingData.accommodationId = trip.accommodationId;
    }
    if (trip.transportationId) {
      bookingData.transportationId = trip.transportationId;
    }

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
      // Optionally, redirect to a confirmation page or display a success message
    } catch (error) {
      console.error("Error booking trip:", error);
      // Optionally, display an error message to the user
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
        <div>
          <label className="block text-sm font-medium">Total Price</label>
          <p className="text-lg font-semibold">{`$${totalPrice || 0}`}</p>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookAllInOnePage;
