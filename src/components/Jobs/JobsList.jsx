// import { useAuth } from '../../context/AuthContext';
// import { useJobs } from '../../context/JobContext';
// import JobCard from './JobCard';
// import { Link } from 'react-router-dom';
// import './JobList.css';

// const JobsList = () => {
//   const { user } = useAuth();
//   const { jobs } = useJobs();

//   // Filter jobs based on user type
//   let filteredJobs = [];
//   if (user?.type === 'company') {
//     filteredJobs = jobs.filter(job => job.companyId === user.id);
//   } else {
//     filteredJobs = jobs.filter(job => job.status === 'active');
//   }

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">
//           {user?.type === 'company' ? 'Your Job Postings' : 'Available Jobs'}
//         </h1>
//         {user?.type === 'company' && (
//           <Link to="/jobs/new" className="btn btn-primary">
//             Post New Job
//           </Link>
//         )}
//       </div>
      
//       {filteredJobs.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredJobs.map(job => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       ) : (
//         <div className="bg-white p-8 rounded-lg shadow-md text-center">
//           <p className="text-gray-600 mb-4">
//             {user?.type === 'company' 
//               ? 'You have not posted any jobs yet.' 
//               : 'No available jobs at the moment.'}
//           </p>
//           {user?.type === 'company' && (
//             <Link to="/jobs/new" className="btn btn-primary">
//               Post Your First Job
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobsList;



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