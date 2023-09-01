import React from "react";
import { UserSidebar } from "../components/UserSidebar";
import { useParams } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { PostingCollection } from "/imports/api/Collections";
import { useFind, useSubscribe } from "meteor/react-meteor-data";

interface Posting {
  name: String;
  company: String;
  location: String;
  description: String;
  pay: String;
}

export const UserPosting = () => {
  const isLoadingPosts = useSubscribe("allPostings");
  let params = useParams();
  const postingId = params.postingId;
  console.log(postingId)

  const position = PostingCollection.findOne({ _id: postingId });

  console.log(position?.name)

  const handleApply = () => {
    Meteor.call("applications.insertApplication", {
      name: position?.name,
      company: position?.company,
      location: position?.location,
      pay: position?.pay,
      description: position?.description,
      username: Meteor.user()?.username,
      status: "Pending",
  })

  console.log("successfully applied!");
  };

  return (
    <div className="user-posting-page">
      <UserSidebar />
      <div className="user-posting">
        {/* image */}
        <div>
          <p style={{ fontWeight: 600, fontSize: 18 }}>
            {position?.name}
          </p>
          <p style={{ fontWeight: 500, fontSize: 16 }}>
            {position?.company}
          </p>
          <p style={{ fontWeight: 600, fontSize: 14 }}>
            {position?.location}
          </p>
          <p style={{ fontWeight: 500, fontSize: 15 }}>
            {position?.pay}
          </p>
          <p style={{ fontWeight: 400, fontSize: 14 }}>
            {position?.description}
          </p>
        </div>
        <div >
          <button className="feed-post-button" onClick={handleApply}>Apply</button>
        </div>
      </div>
    </div>
  );
};
