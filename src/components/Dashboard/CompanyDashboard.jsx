// import { useAuth } from '../../context/AuthContext';
// import { useJobs } from '../../context/JobContext';
// import StatsCard from '../StatsCard';

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
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <StatsCard 
//           title="Posted Jobs" 
//           value={postedJobs} 
//           icon="📋" 
//           color="primary" 
//         />
//         <StatsCard 
//           title="Active Jobs" 
//           value={activeJobs} 
//           icon="✅" 
//           color="secondary" 
//         />
//         <StatsCard 
//           title="Inactive Jobs" 
//           value={inactiveJobs} 
//           icon="⏸️" 
//           color="info" 
//         />
//         <StatsCard 
//           title="Total Applications" 
//           value={totalApplications} 
//           icon="📩" 
//           color="warning" 
//         />
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Recent Job Postings</h2>
//         {companyJobs.length > 0 ? (
//           <div className="space-y-4">
//             {companyJobs.slice(0, 3).map(job => (
//               <div key={job.id} className="border-b pb-4 last:border-b-0">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-medium">{job.title}</h3>
//                     <p className="text-sm text-gray-600">{job.location} • {job.type}</p>
//                   </div>
//                   <span className={`px-2 py-1 text-xs rounded ${
//                     job.status === 'active' 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-gray-100 text-gray-800'
//                   }`}>
//                     {job.status}
//                   </span>
//                 </div>
//                 <p className="text-sm mt-1">Posted on: {job.postedDate}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-600">You haven't posted any jobs yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;



import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';
import StatsCard from '../StatsCard';
import './CompanyDashboard.css'; // Import CSS

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

  return (
    <div className="company-dashboard-container">
      <h1 className="dashboard-heading">Welcome, {user.name}</h1>
      <div className="stats-cards-container">
        <StatsCard
          title="Posted Jobs"
          value={postedJobs}
          icon="📋"
          color="--primary"
        />
        <StatsCard
          title="Active Jobs"
          value={activeJobs}
          icon="✅"
          color="--secondary"
        />
        <StatsCard
          title="Inactive Jobs"
          value={inactiveJobs}
          icon="⏸️"
          color="--info"
        />
        <StatsCard
          title="Total Applications"
          value={totalApplications}
          icon="📩"
          color="--warning"
        />
      </div>
      <div className="recent-postings-container">
        <h2 className="section-heading">Recent Job Postings</h2>
        {companyJobs.length > 0 ? (
          <div className="postings-list">
            {companyJobs.slice(0, 3).map(job => (
              <div key={job.id} className="posting-item">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-details">{job.location} • {job.type}</p>
                </div>
                <span className={`status-badge ${job.status}`}>
                  {job.status}
                </span>
                <p className="post-date">Posted on: {job.postedDate}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-postings-message">You haven't posted any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyDashboard;