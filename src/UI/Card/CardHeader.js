// src/UI/Card/CardHeader.js
import React from 'react';

function CardHeader({ children }) {
  return (
    <div className="font-semibold text-xl text-gray-800 mb-2">
      {children}
    </div>
  );
}

export default CardHeader;
