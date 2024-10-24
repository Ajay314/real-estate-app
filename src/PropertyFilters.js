import React, { useState } from 'react';

const PropertyFilters = ({ setFilters }) => {
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    const filters = {};
    if (location) filters.location = location;
    if (availability !== 'all') filters.availability = availability === 'true';
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;

    
    setFilters(filters);
  };

  return (
    <div className="filter-section">
      <h3>Filter Properties</h3>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
      </div>

      <div>
        <label>Availability:</label>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="all">All</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>

      <div>
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min price"
        />
      </div>

      <div>
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max price"
        />
      </div>

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default PropertyFilters;
