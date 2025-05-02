import { useAuth } from '../context/AuthContext';
import ApplicantDashboard from '../components/Dashboard/ApplicantDashboard';
import CompanyDashboard from '../components/Dashboard/CompanyDashboard';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="py-6">
      {user?.type === 'applicant' ? (
        <ApplicantDashboard />
      ) : (
        <CompanyDashboard />
      )}
    </div>
  );
};

export default DashboardPage;