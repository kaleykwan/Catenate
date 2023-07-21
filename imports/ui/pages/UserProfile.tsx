import React from "react";
import { UserSidebar } from "../components/UserSidebar";
import { ProfileHeader } from "../components/ProfileHeader";

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <UserSidebar />
      <ProfileHeader />
    </div>
  );
};
