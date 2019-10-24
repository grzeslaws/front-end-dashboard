import axios, { AxiosRequestConfig } from "axios";

export const config: AxiosRequestConfig = {
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
};

const API = axios.create(config);

API.interceptors.request.use(
  cfg => {
    Object.assign(cfg.headers);
    return cfg;
  },
  err => err
);

export default API;
