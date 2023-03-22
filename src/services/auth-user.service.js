import http from "./http.js";

export const authUserService = async (parameters) => {
  return http
    .post("/auth/sign-in", parameters)
    .then((response) => response.data)
    .catch((err) => {
      return err.response.data;
    });
};
  