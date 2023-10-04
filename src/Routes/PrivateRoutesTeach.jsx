import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesTeach = () => {
  let decision = localStorage.getItem("Gototeach");
  console.log(decision);
  let auth = { token: decision };

  return auth.token ? <Outlet /> : <Navigate to={"/TeachLogin"} />;
};

export default PrivateRoutesTeach;
