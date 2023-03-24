import { useCallback } from "react";
import { createUserService } from "../../services/create-user.service";

export const useUserAccount = () => {
  const normalizeMessageError = (code) => {
    return (
      {
        InvalidPasswordException:
          "Your password must be at least 6 characters long with lowercase letters and numbers.",
        InvalidParameterException: "The data entered is invalid, please check the information!",
        InvalidParameterType:
          "Your details are not correct, check and try again.",
        UsernameExistsException:
          "Your email is already in use, choose another email and try again.",
      }[code] || "code"
    );
  };

  const signUp = useCallback(async (name, email, password) => {
    const result = await createUserService({
      name,
      email,
      password,
    }).then((result) => {

      if (result.status === "SUCCESS") {
        return {
          status: "SUCCESS",
          message: "User successfully registered!",
        };
      } else {

        return {
          status: result.code,
          message: normalizeMessageError(result.code),
        };
      }
    });


    return result;
  }, []);

  return {
    signUp,
  };
};
