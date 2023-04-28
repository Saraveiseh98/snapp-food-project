import axios from "axios";

export const instance = axios.create({
  baseURL: "https://snappfood.ir",
  timeout: 100000,
});

instance.interceptors.request.use(
  function (config) {
    console.log("request sent");
    return config;
  },
  function (error) {
    console.log("something is wrong with request!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("response received successfully");
    return response;
  },
  function (error) {
    console.log("something went wrong with the response!");
    return Promise.reject(error);
  }
);
