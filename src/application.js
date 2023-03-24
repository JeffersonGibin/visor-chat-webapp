import { Fragment } from "react";
import PrivateRouter from "./routes/private.routes";
import PublicRouter from "./routes/public.routes.js";
import { AuthProvider } from "./context-provider/provider/auth.provider.js";

const Application = () => (
  <Fragment>
    <AuthProvider>
      <PrivateRouter />
    </AuthProvider>
    <PublicRouter />
  </Fragment>
);

export default Application;
