import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://event-listingg.herokuapp.com/",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("profile")
    )}`;
  }
  console.log(localStorage.getItem("profile"));
  return req;
});

export const login = (loginData) => API.post("/user/login", loginData);
export const signUp = (signUpData) => API.post("/user/signUp", signUpData);
