import axios from "axios";

const JSON_SERVER_URL = "http://localhost:5000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/expenses`);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};
