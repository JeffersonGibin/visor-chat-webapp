import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ConstantsRoutes } from "./constants.routes.js";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path={ConstantsRoutes.RouterHome} element={<HomePage />} />
    </Routes>
  );
};

export default PrivateRoute;
