import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../styles/UserDashboardFeed.css";
import "../styles/UserSidebar.css";
import "../styles/UserProfile.css";
import "../styles/EmployerDashboard.css";
import "../styles/UserPosting.css";
import { Meteor } from "meteor/meteor";
import { UserCollection } from "/imports/api/Collections";
import { useSubscribe } from "meteor/react-meteor-data";
import { Outlet } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";
import { EmployerSignUp } from "./EmployerSignUp";
import { UserSignUp } from "./UserSignUp";
import { WelcomePage } from "./WelcomePage";
import { EmployerDashboard } from "../components/EmployerDashboard";
import { EmployerHome } from "./EmployerHome";
import { UserHome } from "./UserHome";
import { UserPosting } from "./UserPosting";
import { UserProfile } from "./UserProfile";
import { UserSignIn } from "./UserSignIn";

const ProtectedRoute = ({ type }: { type: "user" | "employer" }) => {
  const isLoadingProfiles = useSubscribe("allUserProfiles");

  let loggedInUsername = Meteor.user()?.username;
  let userType = UserCollection.findOne({ username: loggedInUsername })?.type;

  console.log("loggedInUsername: ", loggedInUsername);
  console.log("userType: ", userType);

  return userType === type ? <Outlet /> : <Navigate to="/" replace />;
};

const AnonymousRoute = () => {
  const isLoadingProfiles = useSubscribe("allUserProfiles");

  const loggedInUsername = Meteor.user()?.username;
  const userType = UserCollection.findOne({ username: loggedInUsername })?.type;

  console.log("loggedInUsername: ", loggedInUsername);
  console.log("userType: ", userType);

  return !!userType ? <Navigate to="/home" replace /> : <Outlet />;
};

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={RoutePaths.USER_HOME} element={<UserHome />} />
          <Route path={RoutePaths.USER_PROFILE} element={<UserProfile />} />
          <Route path={RoutePaths.EMPLOYER_HOME} element={<EmployerHome />} />
          <Route path="/position/:postingId" element={<UserPosting />} />
          <Route path={RoutePaths.WELCOME_PAGE} element={<WelcomePage />} />
          <Route path={RoutePaths.USER_SIGNUP} element={<UserSignUp />} />
          <Route path={RoutePaths.USER_SIGNIN} element={<UserSignIn />} />
          <Route
            path={RoutePaths.EMPLOYER_SIGNUP}
            element={<EmployerSignUp />}
          />
          <Route path={RoutePaths.USER_HOME} element={<UserHome />} />
          <Route path={RoutePaths.USER_PROFILE} element={<UserProfile />} />
          <Route path={RoutePaths.EMPLOYER_HOME} element={<EmployerHome />} />
          <Route path="/position/:postingId" element={<UserPosting />} />
          <Route path={RoutePaths.USER_HOME} element={<EmployerDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
