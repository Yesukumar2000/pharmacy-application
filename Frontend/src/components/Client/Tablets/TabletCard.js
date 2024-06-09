import React from 'react';

const TabletCard = ({ tablet }) => {
  const {  name, image_url, price, category, rack_number, dosage, composition } = tablet; // Destructure relevant props

  return (
    <div className="tablet-card">
      <img src={image_url} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>Category: {category}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Rack Number: {rack_number}</p>
        <p>Dosage: {dosage}</p>
        <p>Composition: {composition}</p>
      </div>
    </div>
  );
};

export default TabletCard;
