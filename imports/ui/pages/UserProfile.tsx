import React, { useEffect, useState } from "react";
import { UserSidebar } from "../components/UserSidebar";
import { ProfileHeader } from "../components/ProfileHeader";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import {
  ApplicationCollection,
  UserCollection,
} from "/imports/api/Collections";

export const UserProfile = () => {
  const isLoadingProfiles = useSubscribe("allUserProfiles");
  const [username, setUsername] = useState<String | undefined>("");
  const [userProfile, setUserProfile] = useState();
  const isLoadingApplications = useSubscribe("allApplications");

  useEffect(() => {
    setUsername(Meteor.user()?.username);
    console.log(username);
  }, []);

  const currentApplications = useFind(() =>
    ApplicationCollection.find(
      { username: username },
      { sort: { createdAt: -1 } }
    )
  );

  console.log(currentApplications);

  return (
    <div className="user-profile">
      <UserSidebar />
      <div className="user-profile-feed">
        <ProfileHeader />
        <div className="user-profile-applications">
          {currentApplications.map((application) => {
            return (
              <div className="feed-post">
                {/* image */}
                <div>
                  <p style={{ fontWeight: 600, fontSize: 18 }}>
                    {application.name}
                  </p>
                  <p style={{ fontWeight: 500, fontSize: 16 }}>
                    {application.company}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: 14 }}>
                    {application.location}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: 15 }}>
                    ${application.pay}/hr
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
