import * as api from "../api/index.js";

export const login = async (loginData, navigate) => {
  console.log(loginData);

  try {
    const { data } = await api.login(loginData);
    console.log(data);
    navigate("parcel");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (signUpData, navigate) => {
  console.log(signUpData);
  try {
    const { data } = await api.signUp(signUpData);
    navigate("parcel");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
