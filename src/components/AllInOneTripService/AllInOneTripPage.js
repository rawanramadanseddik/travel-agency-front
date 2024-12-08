import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import CardHeader from "../../UI/Card/CardHeader";
import CardBody from "../../UI/Card/CardBody";
import CardActions from "../../UI/Card/CardActions";

const AllInOneTripPage = () => {
  const navigate = useNavigate();

  // Sample data for trips
  const sampleTrips = [
    {
      id: 1,
      destination: "Paris, France",
      price: 1500, // Price per person
      duration: "7 Days",
      description: "Explore the city of love with guided tours and luxury stays.",
      image: "https://example.com/paris.jpg", // Replace with a valid image URL
      accommodation: "5-star hotel with breakfast",
      transportation: "Round-trip flights and city tours",
    },
    {
      id: 2,
      destination: "Cairo, Egypt",
      price: 1000, // Price per person
      duration: "5 Days",
      description: "Discover the pyramids and enjoy a Nile cruise.",
      image: "https://example.com/cairo.jpg", // Replace with a valid image URL
      accommodation: "4-star hotel with breakfast",
      transportation: "Round-trip flights and guided tours",
    },
    {
      id: 3,
      destination: "Tokyo, Japan",
      price: 2000, // Price per person
      duration: "10 Days",
      description: "Experience the fusion of tradition and technology in Japan.",
      image: "https://example.com/tokyo.jpg", // Replace with a valid image URL
      accommodation: "Luxury hotel with meals included",
      transportation: "Round-trip flights and rail passes",
    },
  ];

  const handleBooking = (trip) => {
    navigate("/booking-form", { state: trip });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All-In-One Trip Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleTrips.map((trip) => (
          <Card key={trip.id} className="shadow-lg">
            <img src={trip.image} alt={trip.destination} className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader className="text-xl font-semibold">{trip.destination}</CardHeader>
            <CardBody>
              <p className="text-gray-700">{trip.description}</p>
              <p>
                <strong>Duration:</strong> {trip.duration}
              </p>
              <p>
                <strong>Accommodation:</strong> {trip.accommodation}
              </p>
              <p>
                <strong>Transportation:</strong> {trip.transportation}
              </p>
              <p className="text-green-500 font-bold">
                <strong>Price:</strong> ${trip.price} per person
              </p>
            </CardBody>
            <CardActions>
              <button
                className="btn btn-primary w-full"
                onClick={() => handleBooking(trip)}
              >
                Book Now
              </button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllInOneTripPage;
