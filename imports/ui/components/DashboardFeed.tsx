import React, { useState } from "react";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { useNavigate } from "react-router-dom";
import { PostingCollection } from "../../api/Collections";
import { RoutePaths } from "../routes/RoutePaths";

export const DashboardFeed = () => {
  const navigate = useNavigate();
  const isLoadingPosts = useSubscribe("allPostings");
  const [open, setOpen] = useState(false);
  const allPostings = useFind(() =>
    PostingCollection.find({}, { sort: { createdAt: -1 } })
  );

  const handleOpen = () => {
    setOpen(!open);
  };

  const currentPostings = [
    {
      title: "Graphics Software Intern",
      companyName: "Intel",
      location: "remote",
      pay: "36/hr",
      status: "Pending",
    },
    {
      title: "Backend Engineer Intern",
      companyName: "Somewhere Somehow",
      location: "New York, NY",
      pay: "20/hr",
      status: "Accepted",
    },
  ];

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
          Welcome back! Here are your applications:
        </p>
        <div className="current-posts">
          {currentPostings.map((posting) => {
            return (
              <div className="current-post">
                {/* image */}
                <div className="current-post-info">
                  <p style={{ fontWeight: 600, fontSize: 18 }}>
                    {posting.title}
                  </p>
                  <p style={{ fontWeight: 500, fontSize: 16 }}>
                    {posting.companyName}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: 14 }}>
                    {posting.location}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: 15 }}>
                    ${posting.pay}
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
                      {posting.status}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dashboard-recommended">
        <input
          className="dashboard-search-bar"
          placeholder="Search all open positions"
        />
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
                  <p style={{ fontWeight: 400, fontSize: 15 }}>${posting.pay}/hr</p>
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
