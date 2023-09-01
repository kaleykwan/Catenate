import { Routes, Route } from "react-router-dom";
import { EmployerDashboard } from "../components/EmployerDashboard";
import { RoutePaths } from "./RoutePaths";
import React from "react";

export const EmployerRouter = () => {
  return (
    <React.Fragment>
      <Route path={RoutePaths.USER_HOME} element={<EmployerDashboard />} />
    </React.Fragment>
  );
};
