import React from "react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

export const ProfileHeader = ({ name, username, bio, college, major }: any) => {
  const testProfile = {
    name: "Kaley",
    username: "kaley",
    bio: "CS student",
    college: "Purdue",
    major: "computer science"
  }

  return (
    <div className="profile-header">
      <div className="profile-header-avatar"></div>
      <div className="profile-header-info">
        <p className="profile-header-info-name" style={{color: 'white'}}>{testProfile.name}</p>
        <p className="profile-header-info-username">{testProfile.username}</p>
        <p className="profile-header-info-bio">{testProfile.bio}</p>
      </div>
      <div className="profile-header-facts">
        <div className="profile-header-fact">
          <SchoolOutlinedIcon className="profile-header-fact-icon" />
          <p className="profile-header-fact-text">{testProfile.college}</p>
        </div>
        <div className="profile-header-fact">
          <HistoryEduOutlinedIcon className="profile-header-fact-icon" />
          <p className="profile-header-fact-text">{testProfile.major}</p>
        </div>
      </div>
    </div>
  );
};
