// src/UI/Card/Card.js
import React from 'react';

function Card({ children }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      {children}
    </div>
  );
}

export default Card;
