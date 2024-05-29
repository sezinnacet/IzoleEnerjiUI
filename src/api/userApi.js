import axios from "axios";

export const getUserDetail = async ({ data }) => {
  return await axios.post(
    process.env.REACT_APP_API_URL + `api/User/GetUserDetail`,
    data
  );
};

export const getUserDetailGoogle = async ({ data }) => {
  return await axios.post(
    process.env.REACT_APP_API_URL + `api/User/GetUserDetailGoogle`,
    data
  );
};

export const addUser = async ({ data }) => {
  return await axios.post(
    process.env.REACT_APP_API_URL + `api/User/AddUser`,
    data
  );
};
