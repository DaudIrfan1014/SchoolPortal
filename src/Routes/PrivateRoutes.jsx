import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let decision = localStorage.getItem("userEnter");
  console.log(decision);
  let auth = { token: decision };

  return auth.token ? <Outlet /> : <Navigate to={"/Admin"} />;
};

export default PrivateRoutes;
