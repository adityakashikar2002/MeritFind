import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';

const ApplicantProfile = () => {
  const { user } = useAuth();
  const { applicants, updateApplicant } = useJobs();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    education: '',
    resume: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const currentApplicant = applicants.find(a => a.id === user.id);
    if (currentApplicant) {
      setFormData({
        name: currentApplicant.name,
        email: currentApplicant.email,
        phone: currentApplicant.phone || '',
        skills: currentApplicant.skills?.join(', ') || '',
        experience: currentApplicant.experience || '',
        education: currentApplicant.education || '',
        resume: currentApplicant.resume || ''
      });
    }
  }, [applicants, user.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedApplicant = {
      ...user,
      ...formData,
      skills: formData.skills.split(',').map(skill => skill.trim())
    };
    
    updateApplicant(updatedApplicant);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="btn btn-outline"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="form-label">Skills (comma separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              className="form-control"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="form-label">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="education" className="form-label">Education</label>
            <input
              type="text"
              id="education"
              name="education"
              className="form-control"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="resume" className="form-label">Resume URL</label>
            <input
              type="url"
              id="resume"
              name="resume"
              className="form-control"
              value={formData.resume}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="font-medium">{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{formData.email}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium">{formData.phone || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Skills</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {formData.skills.split(',').map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Experience</p>
            <p className="font-medium">{formData.experience || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Education</p>
            <p className="font-medium">{formData.education || 'Not provided'}</p>
          </div>
          {formData.resume && (
            <div>
              <p className="text-sm text-gray-600">Resume</p>
              <a 
                href={formData.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Resume
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicantProfile;