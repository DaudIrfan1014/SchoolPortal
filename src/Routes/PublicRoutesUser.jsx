import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutesUser = () => {
  let decision = localStorage.getItem("GotoUser");
  let auth = { token: decision };
  return auth.token ? <Navigate to={"/userDetails"} /> : <Outlet />;
};

export default PublicRoutesUser;
