import { useAuth } from '../context/AuthContext';
import ApplicantProfile from '../components/Profile/ApplicantProfile';
import CompanyProfile from '../components/Profile/CompanyProfile';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="py-6">
      {user?.type === 'applicant' ? (
        <ApplicantProfile />
      ) : (
        <CompanyProfile />
      )}
    </div>
  );
};

export default ProfilePage;