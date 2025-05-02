import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';
import { validateEmail } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { applicants, companies } = useJobs();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Check applicants first
    const applicant = applicants.find(a => a.email === email && a.password === password);
    if (applicant) {
      login({ ...applicant, type: 'applicant' });
      navigate('/dashboard');
      return;
    }

    // Then check companies
    const company = companies.find(c => c.email === email && c.password === password);
    if (company) {
      login({ ...company, type: 'company' });
      navigate('/dashboard');
      return;
    }

    setError('Invalid email or password');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full btn btn-primary">Login</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-600">Don't have an account? <a href="/register" className="text-primary">Register</a></p>
      </div>
    </div>
  );
};

export default LoginForm;