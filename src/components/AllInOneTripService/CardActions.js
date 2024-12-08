import React from 'react';

const CardActions = ({ onBookNowClick, onLearnMoreClick }) => {
  return (
    <div className="flex justify-end space-x-4 mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onBookNowClick}
      >
        Book Now
      </button>
      <button
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        onClick={onLearnMoreClick}
      >
        Learn More
      </button>
    </div>
  );
};

export default CardActions;
