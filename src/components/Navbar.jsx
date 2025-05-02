import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"></span>JobPortal
        </Link>

        {isAuthenticated ? (
          <div className="navbar-menu">
            <div className="navbar-links">
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
              <Link to="/jobs" className="navbar-link">
                Jobs
              </Link>
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
            </div>
            <div className="navbar-user">
              <span className="user-greeting">Hello, {user.name}</span>
              <button onClick={handleLogout} className="navbar-logout-button">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar-auth">
            <Link to="/" className="navbar-login-button">
              Login
            </Link>
            <Link to="/register" className="navbar-register-button">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;