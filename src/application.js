import React from "react";
import AppRouter from "./routes/app-router.routes";
import { AuthProvider } from "./context-provider/provider/auth.provider.js";

const Application = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default Application;
