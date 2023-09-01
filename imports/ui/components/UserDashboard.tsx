import React, { useState } from "react";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { useNavigate } from "react-router-dom";
import {
  ApplicationCollection,
  PostingCollection,
} from "../../api/Collections";
import { RoutePaths } from "../routes/RoutePaths";
import Fuse from "fuse.js";
import { Meteor } from "meteor/meteor";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const isLoadingPosts = useSubscribe("allPostings");
  const isLoadingApplications = useSubscribe("allApplications");
  const username = Meteor.user()?.username;
  console.log(username);
  const allPostings = useFind(() =>
    PostingCollection.find({}, { sort: { createdAt: -1 } })
  );

  if (isLoadingPosts()) {
  } else {
  }
  console.log(allPostings);

  const currentApplications = useFind(() =>
    ApplicationCollection.find({username: username}, { sort: { createdAt: -1 } })
  );

  console.log(currentApplications);

  const fuseOptions = {
    isCaseSensitive: false,
    keys: ["title", "companyName"],
  };

  const fuse = new Fuse(allPostings, fuseOptions);
  let searchResults;

  const handleSearchInput = (e: any) => {
    const searchInput = e.target.value;
    console.log(searchInput);
    searchResults = fuse.search(searchInput);
    console.log(searchResults);
  };

  return (
    <div className="dashboard-feed">
      <div className="dashboard-current">
        <p
          style={{
            fontWeight: 600,
            fontSize: 20,
            paddingLeft: 5,
            paddingTop: 15,
          }}
        >
          Welcome back! Here are your current applications:
        </p>
        <div className="current-posts">
          {currentApplications.map((application) => {
            return (
              <div className="current-post">
                {/* image */}
                <div className="current-post-info">
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
                    ${application.pay}
                  </p>
                </div>
                <div className="current-post-footer">
                  <p
                    style={{
                      color: "black",
                      fontWeight: 600,
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Status
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="status-button"
                      style={{
                        backgroundColor: "#670dc2",
                      }}
                    >
                      {application.status}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dashboard-recommended">
        <div className="dashboard-searchbar-div">
          <input
            className="dashboard-search-bar"
            placeholder="Search all open positions"
            onChange={(e) => handleSearchInput(e)}
          />
        </div>
        <div className="feed-posts">
          {allPostings.map((posting) => {
            return (
              <div className="feed-post">
                {/* image */}
                <div>
                  <p style={{ fontWeight: 600, fontSize: 18 }}>
                    {posting.name}
                  </p>
                  <p style={{ fontWeight: 500, fontSize: 16 }}>
                    {posting.company}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: 14 }}>
                    {posting.location}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: 15 }}>
                    ${posting.pay}/hr
                  </p>
                </div>
                <div>
                  <button
                    className="feed-post-button"
                    onClick={() =>
                      navigate(RoutePaths.USER_POSTING + posting._id)
                    }
                  >
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
