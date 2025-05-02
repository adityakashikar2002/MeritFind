// import React from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { useJobs } from '../../context/JobContext';
// import StatsCard from '../StatsCard';
// import './CompanyDashboard.css'; // Import CSS

// const CompanyDashboard = () => {
//   const { user } = useAuth();
//   const { jobs, applications } = useJobs();

//   // Filter jobs posted by this company
//   const companyJobs = jobs.filter(job => job.companyId === user.id);

//   // Calculate stats
//   const postedJobs = companyJobs.length;
//   const activeJobs = companyJobs.filter(job => job.status === 'active').length;
//   const inactiveJobs = companyJobs.filter(job => job.status === 'inactive').length;
//   const totalApplications = applications.filter(app =>
//     companyJobs.some(job => job.id === app.jobId)
//   ).length;

//   return (
//     <div className="company-dashboard-container">
//       <h1 className="dashboard-heading">Welcome, {user.name}</h1>
//       <div className="stats-cards-container">
//         <StatsCard
//           title="Posted Jobs"
//           value={postedJobs}
//           icon="📋"
//           color="--primary"
//         />
//         <StatsCard
//           title="Active Jobs"
//           value={activeJobs}
//           icon="✅"
//           color="--secondary"
//         />
//         <StatsCard
//           title="Inactive Jobs"
//           value={inactiveJobs}
//           icon="⏸️"
//           color="--info"
//         />
//         <StatsCard
//           title="Total Applications"
//           value={totalApplications}
//           icon="📩"
//           color="--warning"
//         />
//       </div>
//       <div className="recent-postings-container">
//         <h2 className="section-heading">Recent Job Postings</h2>
//         {companyJobs.length > 0 ? (
//           <div className="postings-list">
//             {companyJobs.slice(0, 3).map(job => (
//               <div key={job.id} className="posting-item">
//                 <div className="job-info">
//                   <h3 className="job-title">{job.title}</h3>
//                   <p className="job-details">{job.location} • {job.type}</p>
//                 </div>
//                 <span className={`status-badge ${job.status}`}>
//                   {job.status}
//                 </span>
//                 <p className="post-date">Posted on: {job.postedDate}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="no-postings-message">You haven't posted any jobs yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;



// import React from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { useJobs } from '../../context/JobContext';
// import StatsCard from '../StatsCard';
// import './CompanyDashboard.css'; // Import updated CSS

// const CompanyDashboard = () => {
//   const { user } = useAuth();
//   const { jobs, applications } = useJobs();

//   // Filter jobs posted by this company
//   const companyJobs = jobs.filter(job => job.companyId === user.id);

//   // Calculate stats
//   const postedJobs = companyJobs.length;
//   const activeJobs = companyJobs.filter(job => job.status === 'active').length;
//   const inactiveJobs = companyJobs.filter(job => job.status === 'inactive').length;
//   const totalApplications = applications.filter(app =>
//     companyJobs.some(job => job.id === app.jobId)
//   ).length;

//   return (
//     <div className="company-dashboard">
//       <h1 className="dashboard-title">
//         Welcome Back, <span className="company-name">{user.name}</span> <span role="img" aria-label="office building">🏢</span>
//       </h1>
//       <div className="stats-grid">
//         <StatsCard
//           title="Posted Jobs"
//           value={postedJobs}
//           icon="💼"
//           color="var(--primary-glow)"
//           animation="scale-up"
//         />
//         <StatsCard
//           title="Active Jobs"
//           value={activeJobs}
//           icon="🚀"
//           color="var(--success-glow)"
//           animation="slide-left"
//         />
//         <StatsCard
//           title="Inactive Jobs"
//           value={inactiveJobs}
//           icon="⏳"
//           color="var(--warning-glow)"
//           animation="slide-right"
//         />
//         <StatsCard
//           title="Total Applications"
//           value={totalApplications}
//           icon="📬"
//           color="var(--info-glow)"
//           animation="fade-in"
//         />
//       </div>
//       <div className="recent-postings">
//         <h2 className="section-title">Recent Job Postings <span role="img" aria-label="new">🆕</span></h2>
//         {companyJobs.length > 0 ? (
//           <ul className="postings-list">
//             {companyJobs.slice(0, 3).map(job => (
//               <li key={job.id} className="posting-item fade-in">
//                 <div className="job-info">
//                   <h3 className="job-title">{job.title}</h3>
//                   <p className="job-location"><span role="img" aria-label="location pin">📍</span> {job.location} • {job.type}</p>
//                 </div>
//                 <div className="status-date">
//                   <span className={`status-badge ${job.status}`}>
//                     {job.status.toUpperCase()}
//                   </span>
//                   <p className="post-date">Posted on: {job.postedDate}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="empty-message">You haven't posted any jobs yet. <span role="img" aria-label="light bulb">💡</span></p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;

// CompanyDashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';
import StatsCard from '../StatsCard';
import './Dashboard.css';

const CompanyDashboard = () => {
  const { user } = useAuth();
  const { jobs, applications } = useJobs();

  // Filter jobs posted by this company
  const companyJobs = jobs.filter(job => job.companyId === user.id);

  // Calculate stats
  const postedJobs = companyJobs.length;
  const activeJobs = companyJobs.filter(job => job.status === 'active').length;
  const inactiveJobs = companyJobs.filter(job => job.status === 'inactive').length;
  const totalApplications = applications.filter(app =>
    companyJobs.some(job => job.id === app.jobId)
  ).length;

  const recentJobs = companyJobs.slice(0, 3);

  return (
    <div className="company-dashboard-container">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="dashboard-heading"
      >
        Welcome back, <span className="text-gradient">{user.name}</span>
      </motion.h1>
      
      <div className="stats-cards-container">
        <StatsCard
          title="Posted Jobs"
          value={postedJobs}
          icon="📋"
          color="primary"
        />
        <StatsCard
          title="Active Jobs"
          value={activeJobs}
          icon="✅"
          color="secondary"
        />
        <StatsCard
          title="Inactive Jobs"
          value={inactiveJobs}
          icon="⏸️"
          color="info"
        />
        <StatsCard
          title="Total Applications"
          value={totalApplications}
          icon="📩"
          color="warning"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="dashboard-section recent-postings-container"
      >
        <h2 className="section-heading">Recent Job Postings</h2>
        
        {recentJobs.length > 0 ? (
          <div className="postings-list">
            {recentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="posting-item"
              >
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-details">
                    {job.location} • {job.type}
                  </p>
                  <p className="post-date">
                    Posted on: <span>{job.postedDate}</span>
                  </p>
                </div>
                <span className={`status-badge ${job.status}`}>
                  {job.status}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-postings-message"
          >
            You haven't posted any jobs yet.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default CompanyDashboard;