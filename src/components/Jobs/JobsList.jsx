import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';
import './JobsList.css'; // Import CSS

const JobsList = () => {
  const { user } = useAuth();
  const { jobs } = useJobs();

  // Filter jobs based on user type
  let filteredJobs = [];
  if (user?.type === 'company') {
    filteredJobs = jobs.filter(job => job.companyId === user.id);
  } else {
    filteredJobs = jobs.filter(job => job.status === 'active');
  }

  return (
    <div className="jobs-list-container">
      <div className="list-header">
        <h1 className="list-title">
          {user?.type === 'company' ? 'Your Job Postings' : 'Available Jobs'}
        </h1>
        {user?.type === 'company' && (
          <Link to="/jobs/new" className="post-job-button">
            Post New Job
          </Link>
        )}
      </div>

      {filteredJobs.length > 0 ? (
        <div className="job-grid">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="empty-list-message">
          <p className="message-text">
            {user?.type === 'company'
              ? 'You have not posted any jobs yet.'
              : 'No available jobs at the moment.'}
          </p>
          {user?.type === 'company' && (
            <Link to="/jobs/new" className="post-job-button primary">
              Post Your First Job
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default JobsList;