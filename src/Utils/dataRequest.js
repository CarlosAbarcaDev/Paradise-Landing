import axios from "axios";

const options = {
  "Content-Type": "application/json",
};

export const dealGet = () => {
  const url = `tours.json`;
  return axios.get(url, {
    headers: options,
  });
};
