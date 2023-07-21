import React from "react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

export const ProfileHeader = ({ name, username, bio, college, major }: any) => {
  return (
    <div className="profile-header">
      <div className="profile-header-avatar"></div>
      <div className="profile-header-info">
        <p className="profile-header-info-name" style={{color: 'white'}}>{name}</p>
        <p className="profile-header-info-username">{username}</p>
        <p className="profile-header-info-bio">{bio}</p>
      </div>
      <div className="profile-header-facts">
        <div className="profile-header-fact">
          <SchoolOutlinedIcon className="profile-header-fact-icon" />
          <p className="profile-header-fact-text">{college}</p>
        </div>
        <div className="profile-header-fact">
          <HistoryEduOutlinedIcon className="profile-header-fact-icon" />
          <p className="profile-header-fact-text">{major}</p>
        </div>
      </div>
    </div>
  );
};
