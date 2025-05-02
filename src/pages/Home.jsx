// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import LoginForm from '../components/Auth/LoginForm';
// import RegisterApplicantForm from '../components/Auth/RegisterApplicantForm';
// import RegisterCompanyForm from '../components/Auth/RegisterCompanyForm';

// const Home = () => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [registrationType, setRegistrationType] = useState(null);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//     // Reset registration type when the route changes away from /register
//     if (location.pathname !== '/register') {
//       setRegistrationType(null);
//     }
//   }, [isAuthenticated, navigate, location.pathname]);

//   const renderForm = () => {
//     if (location.pathname === '/register') {
//       if (registrationType === 'applicant') {
//         return <RegisterApplicantForm />;
//       } else if (registrationType === 'company') {
//         return <RegisterCompanyForm />;
//       } else {
//         return (
//           <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
//             <h2 className="text-xl font-bold mb-6">Register As</h2>
//             <div className="flex flex-col gap-4">
//               <button
//                 onClick={() => setRegistrationType('applicant')}
//                 className="btn btn-primary"
//               >
//                 Job Applicant
//               </button>
//               <button
//                 onClick={() => setRegistrationType('company')}
//                 className="btn btn-secondary"
//               >
//                 Company
//               </button>
//             </div>
//           </div>
//         );
//       }
//     } else {
//       return <LoginForm />;
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
//       <div className="w-full max-w-md">
//         {renderForm()}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/Auth/LoginForm';
import RegisterApplicantForm from '../components/Auth/RegisterApplicantForm';
import RegisterCompanyForm from '../components/Auth/RegisterCompanyForm';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [registrationType, setRegistrationType] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
    // Reset registration type when the route changes away from /register
    if (location.pathname !== '/register') {
      setRegistrationType(null);
    }
  }, [isAuthenticated, navigate, location.pathname]);

  const renderForm = () => {
    if (location.pathname === '/register') {
      if (registrationType === 'applicant') {
        return <RegisterApplicantForm />;
      } else if (registrationType === 'company') {
        return <RegisterCompanyForm />;
      } else {
        return (
          <div className="registration-type-container">
            <h2 className="registration-type-heading">Register As</h2>
            <div className="registration-buttons-container">
              <button
                onClick={() => setRegistrationType('applicant')}
                className="registration-applicant-button"
              >
                Job Applicant
              </button>
              <button
                onClick={() => setRegistrationType('company')}
                className="registration-company-button"
              >
                Company
              </button>
            </div>
          </div>
        );
      }
    } else {
      return <LoginForm />;
    }
  };

  return (
    <div className="home-container">
      <div className="home-form-wrapper">
        {renderForm()}
      </div>
    </div>
  );
};

export default Home;