import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';
import StatsCard from '../StatsCard';

const ApplicantDashboard = () => {
  const { user } = useAuth();
  const { jobs, applications } = useJobs();

  // Calculate stats
  const appliedJobs = applications.filter(app => app.applicantId === user.id).length;
  const activeJobs = jobs.filter(job => job.status === 'active').length;
  const inactiveJobs = jobs.filter(job => job.status === 'inactive').length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Jobs Applied" 
          value={appliedJobs} 
          icon="📄" 
          color="primary" 
        />
        <StatsCard 
          title="Active Jobs" 
          value={activeJobs} 
          icon="✅" 
          color="secondary" 
        />
        <StatsCard 
          title="Inactive Jobs" 
          value={inactiveJobs} 
          icon="⏸️" 
          color="info" 
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
        {applications.filter(app => app.applicantId === user.id).length > 0 ? (
          <div className="space-y-4">
            {applications
              .filter(app => app.applicantId === user.id)
              .slice(0, 3)
              .map(app => {
                const job = jobs.find(j => j.id === app.jobId);
                return (
                  <div key={app.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-medium">{job?.title || 'Job not found'}</h3>
                    <p className="text-sm text-gray-600">Applied on: {app.applicationDate}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded mt-1">
                      {app.status}
                    </span>
                  </div>
                );
              })}
          </div>
        ) : (
          <p className="text-gray-600">You haven't applied to any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicantDashboard;