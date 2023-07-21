import React from "react";
import { UserSidebar } from "../components/UserSidebar";

interface Posting {
  name: String;
  company: String;
  location: String;
  description: String;
  pay: String;
}

export const UserPosting = ({
  name,
  company,
  location,
  description,
  pay,
}: Posting) => {
  const handleApply = () => {};
  return (
    <div>
      <UserSidebar />
      <div className="feed-post">
        {/* image */}
        <div>
          <p style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
            {name}
          </p>
          <p style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
            {company}
          </p>
          <p style={{ color: "gray", fontWeight: 500, fontSize: 14 }}>
            {location}
          </p>
          <p style={{ color: "white", fontWeight: 500, fontSize: 15 }}>{pay}</p>
          <p style={{ color: "white", fontWeight: 400, fontSize: 14 }}>
            {description}
          </p>
        </div>
        <div className="feed-post-button">
          <button onClick={handleApply}>More information</button>
        </div>
      </div>
    </div>
  );
};
