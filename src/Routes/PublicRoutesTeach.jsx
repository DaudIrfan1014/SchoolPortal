import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutesTeach = () => {
  let decision = localStorage.getItem("Gototeach");
  let auth = { token: decision };
  return auth.token ? <Navigate to={"/TeachDetails"} /> : <Outlet />;
};

export default PublicRoutesTeach;
