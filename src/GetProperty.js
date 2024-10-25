import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3003/properties');
        setProperties(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            <h3>{property.name}</h3>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;