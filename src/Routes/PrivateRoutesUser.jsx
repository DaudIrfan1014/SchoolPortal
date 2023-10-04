import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesUser = () => {
  let decision = localStorage.getItem("GotoUser");
  console.log(decision);
  let auth = { token: decision };

  return auth.token ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutesUser;
