import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">JobPortal</Link>
        
        {isAuthenticated ? (
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link>
              <Link to="/jobs" className="text-gray-600 hover:text-primary">Jobs</Link>
              <Link to="/profile" className="text-gray-600 hover:text-primary">Profile</Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-800">Hello, {user.name}</span>
              <button 
                onClick={handleLogout}
                className="btn btn-outline"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;