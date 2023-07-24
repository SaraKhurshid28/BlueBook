import React from "react";
import { Outlet } from "react-router-dom";
import { BlueHeader } from "../Components/CommonComponents";
const PublicRoute = () => {
  return (
    <>
      <BlueHeader />
      <Outlet />
    </>
  );
};

export default PublicRoute;
