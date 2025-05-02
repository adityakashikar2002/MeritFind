// import { useParams } from 'react-router-dom';
// import { useJobs } from '../../context/JobContext';
// import './CompanyDetails.css';

// const CompanyDetails = () => {
//   const { id } = useParams();
//   const { companies, jobs } = useJobs();

//   // If coming from job details, get companyId from job
//   const job = jobs.find(j => j.id === id);
//   const companyId = job ? job.companyId : id;
//   const company = companies.find(c => c.id === companyId);

//   if (!company) {
//     return <div className="text-center py-8">Company not found</div>;
//   }

//   // Get company's active jobs
//   const companyJobs = jobs.filter(j => 
//     j.companyId === company.id && j.status === 'active'
//   );

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
//       <div className="flex items-center gap-6 mb-8">
//         <img 
//           src={company.logo || 'https://via.placeholder.com/150'} 
//           alt={company.name} 
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h1 className="text-2xl font-bold">{company.name}</h1>
//           <p className="text-gray-600">{company.industry}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Company Details</h2>
//           <div className="space-y-2">
//             <p><span className="font-medium">Email:</span> {company.email}</p>
//             <p><span className="font-medium">Founded:</span> {company.foundedYear || 'N/A'}</p>
//             <p><span className="font-medium">Employees:</span> {company.employees || 'N/A'}</p>
//             <p><span className="font-medium">Website:</span> 
//               {company.website ? (
//                 <a 
//                   href={company.website} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-primary hover:underline ml-1"
//                 >
//                   {company.website}
//                 </a>
//               ) : ' N/A'}
//             </p>
//             <p><span className="font-medium">Address:</span> {company.address || 'N/A'}</p>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold mb-2">About</h2>
//           <p className="whitespace-pre-line">{company.description || 'No description available.'}</p>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-lg font-semibold mb-4">Active Job Postings ({companyJobs.length})</h2>
//         {companyJobs.length > 0 ? (
//           <div className="space-y-4">
//             {companyJobs.map(job => (
//               <div key={job.id} className="border-b pb-4 last:border-b-0">
//                 <h3 className="font-medium">{job.title}</h3>
//                 <p className="text-sm text-gray-600">{job.location} • {job.type}</p>
//                 <p className="text-sm mt-1">{job.salary}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-600">This company has no active job postings.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompanyDetails;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useJobs } from '../../context/JobContext';
import './CompanyDetails.css'; // Import CSS

const CompanyDetails = () => {
  const { id } = useParams();
  const { companies, jobs } = useJobs();

  // If coming from job details, get companyId from job
  const job = jobs.find(j => j.id === id);
  const companyId = job ? job.companyId : id;
  const company = companies.find(c => c.id === companyId);

  if (!company) {
    return <div className="company-details-not-found">Company not found</div>;
  }

  // Get company's active jobs
  const companyJobs = jobs.filter(j =>
    j.companyId === company.id && j.status === 'active'
  );

  return (
    <div className="company-details-container">
      <div className="company-header">
        <img
          src={company.logo || 'https://via.placeholder.com/150'}
          alt={company.name}
          className="company-logo"
        />
        <div className="company-info">
          <h1 className="company-name">{company.name}</h1>
          <p className="company-industry">{company.industry}</p>
        </div>
      </div>

      <div className="company-grid">
        <div className="company-details-section">
          <h2 className="section-title">Company Details</h2>
          <div className="details-list">
            <p><span className="detail-label">Email:</span> {company.email}</p>
            <p><span className="detail-label">Founded:</span> {company.foundedYear || 'N/A'}</p>
            <p><span className="detail-label">Employees:</span> {company.employees || 'N/A'}</p>
            <p><span className="detail-label">Website:</span>
              {company.website ? (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-website-link"
                >
                  {company.website}
                </a>
              ) : ' N/A'}
            </p>
            <p><span className="detail-label">Address:</span> {company.address || 'N/A'}</p>
          </div>
        </div>

        <div className="company-about-section">
          <h2 className="section-title">About</h2>
          <p className="company-description">{company.description || 'No description available.'}</p>
        </div>
      </div>

      <div className="company-jobs-section">
        <h2 className="section-title">Active Job Postings ({companyJobs.length})</h2>
        {companyJobs.length > 0 ? (
          <div className="jobs-list">
            {companyJobs.map(job => (
              <div key={job.id} className="job-item">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-location">{job.location} • {job.type}</p>
                <p className="job-salary">{job.salary}</p>
                <Link to={`/jobs/${job.id}`} className="job-details-link">View Details</Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-jobs-message">This company has no active job postings.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyDetails;