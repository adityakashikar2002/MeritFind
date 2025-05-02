// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, isAuthenticated, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-primary">JobPortal</Link>
        
//         {isAuthenticated ? (
//           <div className="flex items-center gap-6">
//             <div className="flex gap-4">
//               <Link to="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link>
//               <Link to="/jobs" className="text-gray-600 hover:text-primary">Jobs</Link>
//               <Link to="/profile" className="text-gray-600 hover:text-primary">Profile</Link>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-gray-800">Hello, {user.name}</span>
//               <button 
//                 onClick={handleLogout}
//                 className="btn btn-outline"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex gap-4">
//             <Link to="/" className="btn btn-outline">Login</Link>
//             <Link to="/register" className="btn btn-primary">Register</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



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
                <span className="link-icon dashboard-icon"></span>Dashboard
              </Link>
              <Link to="/jobs" className="navbar-link">
                <span className="link-icon jobs-icon"></span>Jobs
              </Link>
              <Link to="/profile" className="navbar-link">
                <span className="link-icon profile-icon"></span>Profile
              </Link>
            </div>
            <div className="navbar-user">
              <span className="user-greeting">Hello, {user.name}</span>
              <button onClick={handleLogout} className="navbar-logout-button">
                <span className="logout-icon"></span>Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar-auth">
            <Link to="/" className="navbar-login-button">
              <span className="login-icon"></span>Login
            </Link>
            <Link to="/register" className="navbar-register-button">
              <span className="register-icon"></span>Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;