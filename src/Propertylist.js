import React, { useEffect, useState } from 'react';
import { getProperties } from './PropertyApi';
import PropertyFilters from './PropertyFilters';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties(filters);
      setProperties(data);
    };
    fetchProperties();
  }, [filters]);

  return (
    <div>
      <h2>Property Listings</h2>
      <PropertyFilters setFilters={setFilters} />
      <div className="property-list">
        {properties.map((property) => (
          <div key={property._id} className="property-card">
            <img src={property.image} alt={property.name} />
            <h3>{property.name}</h3>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            <p>{property.availability ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
