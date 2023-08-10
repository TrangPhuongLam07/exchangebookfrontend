import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  withCredentials: true, // Important for sending cookies
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};
export const post = async (path, data, config = {}) => {
  const response = await httpRequest.post(path, data, config);
  return response.data;
};
export const put = async (path, data, options = {}) => {
  const response = await httpRequest.put(path, data, options);
  return response.data;
};
export const remove = async (path, options = {}) => {
  const response = await httpRequest.delete(path, options);
  return response.data;
};
export default httpRequest;
