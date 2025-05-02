import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import JobsPage from './pages/JobsPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import { initializeMockData } from './utils/storage';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  // Initialize mock data if not present
  initializeMockData();

  return (
    <Router>
      <AuthProvider>
        <JobProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-4">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Home />} />
                  <Route path="/dashboard/*" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
                  <Route path="/jobs/*" element={<PrivateRoute><JobsPage /></PrivateRoute>} />
                  <Route path="/profile/*" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </main>
          </div>
        </JobProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;