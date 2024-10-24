import axios from 'axios';

const API_URL = 'http://localhost:3003/property/api';

export const getProperties = async (filters) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};

export const addProperty = async (property) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};

export const updateProperty = async (id, property) => {
  const response = await axios.put(`${API_URL}/${id}`, property);
  return response.data;
};

export const deleteProperty = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
