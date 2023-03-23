import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth.context.js";
import { Config } from "../../config/environment.dev.js";

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const instanceConfig = new Config();

  const session = JSON.parse(localStorage.getItem("session"));
  const currentPage = location.pathname;

  const whenTokenExistsRedirectTo = useCallback(
    (toPage) => {
      const routes = ["/sign-in", "/sign-up", "/"];

      if (session?.token != null && routes.includes(currentPage)) {
        console.info(
          `You were redirected to home because is in the ----> ${currentPage}`
        );
        navigateTo(toPage);
      }
    },
    [currentPage, navigateTo, session?.token]
  );

  const whenTokenMissingRedirectTo = useCallback(
    (toPage) => {
      console.log(session)
      if (!session?.token && currentPage === "/home") {
        console.info("You were redirected to 'sign-in' because haven't token!");
        navigateTo(toPage);
      }
    },
    [currentPage, navigateTo, session?.token]
  );

  // Effect When token Missing
  useEffect(() => {
    whenTokenMissingRedirectTo("/");
  }, [whenTokenMissingRedirectTo]);

  // Effect When token Exist
  useEffect(() => {
    whenTokenExistsRedirectTo("/home");
  }, [whenTokenExistsRedirectTo]);

  const socket = new WebSocket(instanceConfig.configs.SOCKET_URL);

  return (
    <AuthContext.Provider value={{ session, socket }}>
      {children}
    </AuthContext.Provider>
  );
};
