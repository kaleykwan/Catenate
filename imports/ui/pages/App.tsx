import React from 'react';
import { UserRouter } from '../routes/UserRouter';
import { BrowserRouter } from "react-router-dom";
import "../styles/UserDashboardFeed.css";
import "../styles/UserSidebar.css";
import "../styles/UserProfile.css";
import "../styles/EmployerDashboard.css";

export const App = () => {
  return (
    /* isUser && */
    <BrowserRouter>
      <div>
        <UserRouter />
      </div>
    </BrowserRouter>
    /* isEmployer && */
  )
};
