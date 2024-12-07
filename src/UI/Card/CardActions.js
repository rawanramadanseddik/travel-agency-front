// src/UI/Card/CardActions.js
import React from 'react';

function CardActions({ children }) {
  return (
    <div className="flex justify-between items-center">
      {children}
    </div>
  );
}

export default CardActions;
