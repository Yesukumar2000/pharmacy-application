import React, { useState } from "react";
import "./Tablets.css";
import TabletCard from "./TabletCard.js";
import Navbar from "../Navbar/Navbar.js";

const Tablets = () => {
  // Sample tablet data
  const tablets = [
    {
      id: 1,
      name: "Paracetamol",
      quantity: 100,
      arrival_date: "2024-04-20",
      expiry_date: "2025-04-20",
      rack_number: "A1",
      manufactured_by: "ABC Pharmaceuticals",
      image_url: "https://dummyimage.com/200x200/000/fff&text=Paracetamol",
      price: 5.99,
      dosage: "500 mg",
      composition: "Paracetamol",
      category: "Pain Reliever",
      formulation: "Tablet",
      instructions:
        "Take 1-2 tablets every 4-6 hours as needed for pain relief.",
      prescription_required: false,
      storage_conditions: "Store at room temperature.",
      side_effects: "May cause mild stomach upset.",
      warnings: "Do not exceed recommended dosage.",
      batch_number: "AB12345",
      country_of_origin: "USA",
      barcode: "1234567890123",
      generic_equivalent: true,
      packaging: "Bottle",
      special_features: "",
    },
    {
      id: 2,
      name: "Ibuprofen",
      quantity: 75,
      arrival_date: "2024-04-18",
      expiry_date: "2025-04-18",
      rack_number: "B2",
      manufactured_by: "XYZ Pharmaceuticals",
      image_url: "https://dummyimage.com/200x200/000/fff&text=Ibuprofen",
      price: 7.99,
      dosage: "200 mg",
      composition: "Ibuprofen",
      category: "Pain Reliever",
      formulation: "Tablet",
      instructions: "Take 1 tablet every 4-6 hours with food.",
      prescription_required: false,
      storage_conditions: "Store in a cool, dry place.",
      side_effects: "May cause stomach irritation.",
      warnings: "Do not take on an empty stomach.",
      batch_number: "CD23456",
      country_of_origin: "UK",
      barcode: "2345678901234",
      generic_equivalent: true,
      packaging: "Blister Pack",
      special_features: "",
    },
    {
      id: 3,
      name: "Aspirin",
      quantity: 50,
      arrival_date: "2024-04-15",
      expiry_date: "2025-04-15",
      rack_number: "C3",
      manufactured_by: "PharmaCorp",
      image_url: "https://dummyimage.com/200x200/000/fff&text=Aspirin",
      price: 4.49,
      dosage: "81 mg",
      composition: "Aspirin",
      category: "Pain Reliever",
      formulation: "Tablet",
      instructions: "Take 1 tablet daily with a glass of water.",
      prescription_required: false,
      storage_conditions: "Store in a dry place.",
      side_effects: "May cause gastric irritation.",
      warnings: "Not recommended for children under 12.",
      batch_number: "EF34567",
      country_of_origin: "Germany",
      barcode: "3456789012345",
      generic_equivalent: true,
      packaging: "Bottle",
      special_features: "",
    },
  ];
  
//state variable 
let [priceSort, setPriceSort] = useState();

let priceSorted = (tablets, sortOrder) => {
  tablets.sort((a, b) =>
    sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price
  );
};

let filteredTablets = priceSort ? priceSorted(tablets, priceSort) : tablets;
return (
  <>
    <Navbar />
    <div className="tablets-Card">
      <h1>Tablets</h1>
      <div className="filters">
        <select
          value={priceSort}
          onChange={(e) => {
            setPriceSort(e.target.value);
          }}>
          <option>Sort by Price</option>
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>
        <button onClick={() => {  }}>Apply Filters</button>
      </div>
      <div className="tablet-grid">
        {filteredTablets.map((tablet) => (
          <TabletCard key={tablet.id} tablet={tablet} />
        ))}
      </div>
    </div>
  </>
);
};

export default Tablets;

// State variables

//   let [priceSort, setPriceSort] = useState();

 
//   let tabletsList = (tablets,sortOrder) => 
//     tablets.sort((a,b) =>
//       sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price
//     );
//   let filteredTablets  = priceSort ?  tabletsList(tablets,priceSort) : tablets;

//   return (
//     <>
//       <Navbar />
//       <div className="tablets-Card">
//         <h1>Tablets</h1>
//         <div className="filters">
//           <select value={priceSort} onChange={(e) => {setPriceSort(e.target.value)}}>
//             <option>Sort by Price</option>
//             <option value="high-to-low">High to Low</option>
//             <option value="low-to-high">Low to High</option>
//           </select>
//           <button onClick={() => {tabletsList(tablets,priceSort)}}>Apply Filters</button>
//         </div>
//         <div className="tablet-grid">
//           {filteredTablets.map((tablet) => (
//             <TabletCard key={tablets.id} tablet={tablet} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tablets;
