// import { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { useJobs } from '../../context/JobContext';
// import { validateEmail, validatePassword, validateName } from '../../utils/validation';
// import { useNavigate } from 'react-router-dom';

// const RegisterCompanyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     description: '',
//     industry: '',
//     foundedYear: '',
//     employees: '',
//     website: '',
//     logo: '',
//     address: ''
//   });
//   const [error, setError] = useState('');
//   const { addCompany } = useJobs();
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // Validation
//     if (!validateName(formData.name)) {
//       setError('Company name must be at least 2 characters');
//       return;
//     }

//     if (!validateEmail(formData.email)) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     if (!validatePassword(formData.password)) {
//       setError('Password must be at least 6 characters');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Create new company
//     const newCompany = {
//       id: Date.now().toString(),
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//       description: formData.description,
//       industry: formData.industry,
//       foundedYear: formData.foundedYear,
//       employees: formData.employees,
//       website: formData.website,
//       logo: formData.logo || 'https://via.placeholder.com/150',
//       address: formData.address
//     };

//     addCompany(newCompany);
//     login({ ...newCompany, type: 'company' });
//     navigate('/dashboard');
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Company Registration</h2>
//       {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="form-label">Company Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="form-control"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             className="form-control"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="form-label">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             className="form-control"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="industry" className="form-label">Industry</label>
//           <input
//             type="text"
//             id="industry"
//             name="industry"
//             className="form-control"
//             value={formData.industry}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="foundedYear" className="form-label">Founded Year</label>
//           <input
//             type="text"
//             id="foundedYear"
//             name="foundedYear"
//             className="form-control"
//             value={formData.foundedYear}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="employees" className="form-label">Number of Employees</label>
//           <input
//             type="text"
//             id="employees"
//             name="employees"
//             className="form-control"
//             value={formData.employees}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="website" className="form-label">Website</label>
//           <input
//             type="url"
//             id="website"
//             name="website"
//             className="form-control"
//             value={formData.website}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="logo" className="form-label">Logo URL</label>
//           <input
//             type="url"
//             id="logo"
//             name="logo"
//             className="form-control"
//             value={formData.logo}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="address" className="form-label">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             className="form-control"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="w-full btn btn-primary">Register</button>
//       </form>
//       <div className="mt-4 text-center">
//         <p className="text-gray-600">Already have an account? <a href="/" className="text-primary">Login</a></p>
//       </div>
//     </div>
//   );
// };

// export default RegisterCompanyForm;


import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';
import { validateEmail, validatePassword, validateName } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import './RegisterCompanyForm.css'

const RegisterCompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    description: '',
    industry: '',
    foundedYear: '',
    employees: '',
    website: '',
    logo: '',
    address: ''
  });
  const [error, setError] = useState('');
  const { addCompany } = useJobs();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!validateName(formData.name)) {
      setError('Company name must be at least 2 characters');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Create new company
    const newCompany = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      description: formData.description,
      industry: formData.industry,
      foundedYear: formData.foundedYear,
      employees: formData.employees,
      website: formData.website,
      logo: formData.logo || 'https://via.placeholder.com/150',
      address: formData.address
    };

    addCompany(newCompany);
    login({ ...newCompany, type: 'company' });
    navigate('/dashboard');
  };

  return (
    <div className="register-company-container">
      <h2 className="register-company-heading">Company Registration</h2>
      {error && <div className="register-company-error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="register-company-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry" className="form-label">Industry</label>
          <input
            type="text"
            id="industry"
            name="industry"
            className="form-input"
            value={formData.industry}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foundedYear" className="form-label">Founded Year</label>
          <input
            type="text"
            id="foundedYear"
            name="foundedYear"
            className="form-input"
            value={formData.foundedYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employees" className="form-label">Number of Employees</label>
          <input
            type="text"
            id="employees"
            name="employees"
            className="form-input"
            value={formData.employees}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website" className="form-label">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            className="form-input"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="logo" className="form-label">Logo URL</label>
          <input
            type="url"
            id="logo"
            name="logo"
            className="form-input"
            value={formData.logo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="register-company-button">Register Company</button>
      </form>
      <div className="register-company-login-link">
        Already have an account? <a href="/" className="login-link">Login</a>
      </div>
    </div>
  );
};

export default RegisterCompanyForm;