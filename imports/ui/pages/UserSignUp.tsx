import React, { useState } from "react";
import { Input } from "@mui/material";
import { Accounts } from "meteor/accounts-base";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";
import { Meteor } from "meteor/meteor";

export const UserSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("password is: " + password);
    console.log("username is: " + username);
    console.log("email is: " + email);
    Accounts.createUser(
      {
        username: username,
        password: password,
        email: email,
      },
      (error) => {
        if (error) {
          console.log(error);
          return;
        } else {
          console.log("success!");
        }
      }
    );

    Meteor.call("user-profile.createNewProfile", {
      username: username,
      name: name,
    });

    console.log("created user profile");

    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    console.log("submitted!");
    navigate(RoutePaths.USER_HOME);
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="sign-up-form">
        <div>
          <Input
            className="sign-up-form-field"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Input
            className="sign-up-form-field"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <Input
            className="sign-up-form-field"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="sign-up-form-button">
          <button type="submit" className="make-post-button">
            Submit
          </button>
        </div>
        <div>
          <a
            onClick={() => navigate(RoutePaths.SIGNIN)}
            className="sign-up-switch-link"
          >
            Already have an account? Click here to sign in!
          </a>
        </div>
      </form>
    </div>
  );
};
