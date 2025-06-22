import axios from "axios";

// const API_URL = "http://localhost:3000/api/vehicles";
const API_URL = `${import.meta.env.VITE_API_URL}/api/vehicles`;

export const getVehicles = async (params) => {
  try {
    const response = await axios.get(API_URL,{params});
    return response;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

export const getVehicleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw error;
  }
};
