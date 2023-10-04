import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  let decision = localStorage.getItem("userEnter");
  let auth = { token: decision };
  return auth.token ? <Navigate to={"/dashboard"} /> : <Outlet />;
};

export default PublicRoutes;
