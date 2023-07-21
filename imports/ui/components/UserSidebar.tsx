import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";
import { Meteor } from "meteor/meteor";
import { LogOut } from "./LogOut";
import { useSubscribe } from "meteor/react-meteor-data";

export const UserSidebar = () => {
  const navigate = useNavigate();
  const isLoadingPosts = useSubscribe("allUserProfiles");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (Meteor.userId() != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  let userProfile;
  console.log(Meteor.user()?.username);

  if (Meteor.user()?.username) {
    const username = Meteor.user()?.username;
    console.log("username again: " + username);

    userProfile = Meteor.call("user-profile.getProfile", {
      username: username,
    });
  }

  return (
    <div className="left-side-bar">
      <div className="profile-thumbnail">
        <p
          style={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Kaley Kwan
        </p>
        <p
          style={{
            paddingTop: 5,
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          @kaley
        </p>
      </div>
      <div className="left-sidebar-nav">
        <p
          style={{
            fontWeight: 500,
            fontSize: 18,
            cursor: "pointer",
          }}
          onClick={() => navigate(RoutePaths.USER_HOME)}
        >
          Dashboard
        </p>
        <p
          style={{
            fontWeight: 500,
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Community
        </p>
        <p
          style={{
            fontWeight: 500,
            fontSize: 18,
            cursor: "pointer",
          }}
          onClick={() => navigate(RoutePaths.USER_PROFILE)}
        >
          Profile
        </p>
      </div>
      <button className="access-button" onClick={() => navigate(RoutePaths.USER_SIGNUP)}>Sign Up</button>
      <button className="access-button" onClick={() => navigate(RoutePaths.USER_SIGNIN)}>Sign In</button>
    </div>
  );
};
