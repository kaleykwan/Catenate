import { Meteor } from "meteor/meteor";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";

export const LogOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    Meteor.logout();
    navigate(RoutePaths.WELCOME_PAGE);
  };
  return (
    <button className="access-button" onClick={logOut}>
      Log out
    </button>
  );
};
