import axios from "axios";

export const GetAllProductsList = async () => {
  return await axios.get(
    process.env.REACT_APP_API_URL + `api/Product/GetAllProductsList`
  );
};
