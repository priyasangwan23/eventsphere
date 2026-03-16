import axios from 'axios';

const API_URL = '/api/users';

const getMyEvents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/me/events`, config);
  return response.data;
};

const getMyRegistrations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/me/registrations`, config);
  return response.data;
};

const getSavedEvents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/me/saved`, config);
  return response.data;
};

const saveEvent = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/save/${id}`, {}, config);
  return response.data;
};

const unsaveEvent = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/save/${id}`, config);
  return response.data;
};

const userService = {
  getMyEvents,
  getMyRegistrations,
  getSavedEvents,
  saveEvent,
  unsaveEvent,
};

export default userService;
