// AdvancedSearchDialog.jsx

import React, { useState } from "react";

const AdvancedSearchDialog = ({ onClose, onSearch }) => {
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");

  const handleSearch = () => {
    const searchCriteria = {
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
    };
    onSearch(searchCriteria);
    onClose();
  };

  return (
    <div className="advanced-search-dialog">
      <h2>Advanced Search</h2>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Any">Any</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Min Price:
        <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        Max Price:
        <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <label>
        Min Bedrooms:
        <input type="text" value={minBedrooms} onChange={(e) => setMinBedrooms(e.target.value)} />
      </label>
      <label>
        Max Bedrooms:
        <input type="text" value={maxBedrooms} onChange={(e) => setMaxBedrooms(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AdvancedSearchDialog;