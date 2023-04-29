import axios from 'axios';

const API_URL = 'https://644cfdb757f12a1d3dd51a8b.mockapi.io/Shoes/Storage';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const fetchDataById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    return null;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    return null;
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    return null;
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};
