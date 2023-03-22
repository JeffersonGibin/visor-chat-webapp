import http from "./http.js";

export const createUserService = async (parameters) => {
  return http
    .post("/account/sign-up", parameters)
    .then((response) => response.data)
    .catch((err) => {
      return err.response.data;
    });
};
  