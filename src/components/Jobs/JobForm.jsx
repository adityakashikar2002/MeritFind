import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useJobs } from '../../context/JobContext';

const JobForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { jobs, addJob, updateJob } = useJobs();
  const navigate = useNavigate();

  const isEditing = !!id;
  const jobToEdit = jobs.find(j => j.id === id);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    type: 'Full-time',
    status: 'active'
  });

  useEffect(() => {
    if (isEditing && jobToEdit) {
      setFormData({
        title: jobToEdit.title,
        description: jobToEdit.description,
        requirements: jobToEdit.requirements.join(', '),
        location: jobToEdit.location,
        salary: jobToEdit.salary,
        type: jobToEdit.type,
        status: jobToEdit.status
      });
    }
  }, [isEditing, jobToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      requirements: formData.requirements.split(',').map(req => req.trim()),
      companyId: user.id,
      postedDate: new Date().toISOString().split('T')[0]
    };

    if (isEditing) {
      updateJob({ ...jobToEdit, ...jobData });
    } else {
      addJob({
        ...jobData,
        id: Date.now().toString()
      });
    }

    navigate('/jobs');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Job' : 'Post New Job'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="form-label">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirements" className="form-label">Requirements (comma separated)</label>
          <textarea
            id="requirements"
            name="requirements"
            rows="3"
            className="form-control"
            value={formData.requirements}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="salary" className="form-label">Salary Range</label>
            <input
              type="text"
              id="salary"
              name="salary"
              className="form-control"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="type" className="form-label">Job Type</label>
            <select
              id="type"
              name="type"
              className="form-control"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          {isEditing && (
            <div>
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate('/jobs')}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            {isEditing ? 'Update Job' : 'Post Job'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;