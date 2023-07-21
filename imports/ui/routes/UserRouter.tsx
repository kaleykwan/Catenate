import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { UserHome } from "../pages/UserHome";
import { UserProfile } from "../pages/UserProfile";
import { EmployerHome } from "../pages/EmployerHome";
import { UserSignUp } from "../pages/UserSignUp";
import { UserPosting } from "../pages/UserPosting";
import { UserSignIn } from "../pages/UserSignIn";

export const UserRouter = () => {
  return (
    <Routes>
      <Route path={RoutePaths.USER_HOME} element={<UserHome />} />
      <Route path={RoutePaths.USER_PROFILE} element={<UserProfile />} />
      <Route path={RoutePaths.EMPLOYER_HOME} element={<EmployerHome />} />
      <Route path={RoutePaths.USER_SIGNUP} element={<UserSignUp />} />
      <Route path={RoutePaths.USER_SIGNIN} element={<UserSignIn />} />
    </Routes>
  );
};
