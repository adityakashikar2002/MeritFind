// import { Routes, Route, useNavigate } from 'react-router-dom';
// import JobsList from '../components/Jobs/JobsList';
// import JobDetails from '../components/Jobs/JobDetails';
// import JobForm from '../components/Jobs/JobForm';
// import CompanyDetails from '../components/Jobs/CompanyDetails';
// import { useAuth } from '../context/AuthContext';
// import './JobsPage.css';

// const JobsPage = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div className="py-6">
//       <Routes>
//         <Route path="/" element={<JobsList />} />
//         <Route path="/new" element={<JobForm />} />
//         <Route path="/:id" element={<JobDetails />} />
//         <Route path="/:id/edit" element={<JobForm />} />
//         <Route path="/:id/company" element={<CompanyDetails />} />
//       </Routes>
//     </div>
//   );
// };

// export default JobsPage;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobsList from '../components/Jobs/JobsList';
import JobDetails from '../components/Jobs/JobDetails';
import JobForm from '../components/Jobs/JobForm';
import CompanyDetails from '../components/Jobs/CompanyDetails';
import './JobsPage.css'; // Import CSS

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <Routes>
        <Route path="/" element={<JobsList />} />
        <Route path="/new" element={<JobForm />} />
        <Route path="/:id" element={<JobDetails />} />
        <Route path="/:id/edit" element={<JobForm />} />
        <Route path="/:id/company" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
};

export default JobsPage;