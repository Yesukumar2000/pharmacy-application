import React from 'react';

const TabletCard = ({ tablet }) => {
  return (
    <div className="tablet-card">
      <img src={tablet.image_url} alt={tablet.name} />
      <div className="tablet-card-content">
        <h2>{tablet.name}</h2>
        <div className="tablet-card-details">
          <p>Quantity: {tablet.quantity}</p>
          <p>Arrival Date: {tablet.arrival_date}</p>
          <p>Expiry Date: {tablet.expiry_date}</p>
          <p>Rack Number: {tablet.rack_number}</p>
          <p>Manufactured By: {tablet.manufactured_by}</p>
          <p>Price: ${tablet.price}</p>
        </div>
      </div>
    </div>
  );
};

export default TabletCard;
