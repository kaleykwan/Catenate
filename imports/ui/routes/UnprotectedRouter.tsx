import { Routes, Route } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { WelcomePage } from "../pages/WelcomePage";
import React from "react";
import { EmployerSignUp } from "../pages/EmployerSignUp";
import { UserSignUp } from "../pages/UserSignUp";

export const UnprotectedRouter = () => {
  return (
    <React.Fragment>
      <Route path={RoutePaths.WELCOME_PAGE} element={<WelcomePage />} />
      <Route path={RoutePaths.USER_SIGNUP} element={<UserSignUp />} />
      <Route path={RoutePaths.EMPLOYER_SIGNUP} element={<EmployerSignUp />} />
    </React.Fragment>
  );
};
