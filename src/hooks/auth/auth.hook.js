import { useCallback, useContext } from "react";
import { AuthContext } from "../../context-provider/context/auth.context.js";
import { useNavigate } from "react-router-dom";
import { authUserService } from "../../services/auth-user.service.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const navigateTo = useNavigate();

  const signIn = useCallback(async (email, password) => {
  
    const result = await authUserService({
      email,
      password,
    });
    
    const data = result?.data;
    if(result.status === "SUCCESS" && data.token){
      const payloadSession = JSON.stringify({
        name: data.name,
        email: data.email,
        token: data.token,
      });
      localStorage.setItem("session", payloadSession);

      return {
        status: "SUCCESS",
        message: "Login Successfully!",
      };
    }

    return {
      status: result.code,
      message: result.message
    };
    
  }, []);

  const logoff = useCallback(() => {
    const localStorageSession = localStorage.getItem("session");
    if(localStorageSession){
      localStorage.removeItem("session");
      navigateTo("/sign-in");
    }
  }, [navigateTo]);

  const getSession = useCallback(() => context.session, [context.session]);

  return {
    getSession,
    logoff,
    signIn
  };
};