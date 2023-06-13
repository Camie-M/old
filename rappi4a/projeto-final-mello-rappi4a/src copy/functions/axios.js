import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

export const signup = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchRestaurantDetail = async (restaurantId, token) => {
  try {
    const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
      headers: {
        auth: token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signupAddress = async (body) => {
    const axiosConfig = {
        headers: {
          auth: JSON.parse(localStorage.getItem("rappi4")).token,
        },
      };
    try {
        const response = await axios.put(`${baseUrl}/address`, body, axiosConfig)
        return response.data
    } catch (error) {
        return error.response.data
    }
}


