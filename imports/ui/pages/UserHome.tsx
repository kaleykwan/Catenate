import React, { useEffect, useState } from "react";
import { UserSidebar } from "../components/UserSidebar";
import { UserDashboard } from "../components/UserDashboard";
import { Meteor } from "meteor/meteor";

export const UserHome = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (Meteor.userId() != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className="user-home">
      <UserSidebar />
      <UserDashboard />
    </div>
  );
};
