import React from 'react';
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";
import { LogOut } from '../components/LogOut';

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="access-button"
        onClick={() => navigate(RoutePaths.USER_SIGNUP)}
      >
        User Sign Up
      </button>
      <button
        className="access-button"
        onClick={() => navigate(RoutePaths.USER_SIGNIN)}
      >
        User Sign in
      </button>
      <button
        className="access-button"
        onClick={() => navigate(RoutePaths.EMPLOYER_SIGNUP)}
      >
        Employer Sign Up
      </button>
      <LogOut />
    </div>
  );
};
