import React from 'react';
import { useAuth } from '../context/AuthContext';
import ApplicantDashboard from '../components/Dashboard/ApplicantDashboard';
import CompanyDashboard from '../components/Dashboard/CompanyDashboard';
import './DashboardPage.css'; // Import CSS

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page-container">
      {user?.type === 'applicant' ? (
        <ApplicantDashboard />
      ) : (
        <CompanyDashboard />
      )}
    </div>
  );
};

export default DashboardPage;