import React from 'react';

const RouteInfo = ({ transportDetails }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-800">Route Information</h2>
    <p><strong>Option:</strong> {transportDetails.option || "Not Selected"}</p>
  </div>
);

export default RouteInfo;
