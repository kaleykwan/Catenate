import React, { useState } from "react";
import { Input } from "@mui/material";
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";

export const UserSignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log("success signing in!");
      }
    });
    setUsername("");
    setPassword("");
    console.log("submitted!");
    navigate(RoutePaths.USER_HOME);
  };
  return (
    <div>
      <form onSubmit={handleSignIn} className="sign-up-form">
        <div>
          <Input
            className="sign-up-form-field"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Input
            className="sign-up-form-field"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="sign-up-form-button">
          <button type="submit" className="make-post-button">Get Codeworking</button>
        </div>
        <div>
        <a onClick={() => navigate(RoutePaths.USER_SIGNUP)} className="sign-up-switch-link">
          Don't have an account? Click here to sign up!
        </a>
      </div>
      </form>
    </div>
  );
};
