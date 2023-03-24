import { Route, Routes } from "react-router-dom";
import { SignUpPage, SignInPage } from "../pages";
import { ConstantsRoutes } from "./constants.routes.js";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path={ConstantsRoutes.RouterSignUp} element={<SignUpPage />} />
      <Route path={ConstantsRoutes.RouterSignIn} element={<SignInPage />} />
      <Route path={ConstantsRoutes.RouterGeneric} element={<SignInPage />} />
    </Routes>
  );
};

export default PublicRouter;
