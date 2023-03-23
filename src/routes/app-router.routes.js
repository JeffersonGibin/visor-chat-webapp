import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, SignUpPage, SignInPage } from "../pages";
import { ConstantsRoutes } from "./constants.routes.js";

const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={ConstantsRoutes.RouterHome} element={<HomePage />} />
        <Route path={ConstantsRoutes.RouterSignUp} element={<SignUpPage />} />
        <Route path={ConstantsRoutes.RouterSignIn} element={<SignInPage />} />
        <Route path={ConstantsRoutes.RouterGeneric} element={<SignInPage />} />
      </Routes>
    </Fragment>
  );
};

export default AppRouter;
