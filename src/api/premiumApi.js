import axios from "axios";

export const updgradeToPremium = async ({ data }) => {
  return await axios.post(
    process.env.REACT_APP_API_URL + `api/User/UpdgradeToPremium`,
    data
  );
};
