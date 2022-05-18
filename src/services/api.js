import axios from "axios";

const BASE_URL = "https://api.bitpin.ir/v1/mkt/markets/";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export { getProducts };