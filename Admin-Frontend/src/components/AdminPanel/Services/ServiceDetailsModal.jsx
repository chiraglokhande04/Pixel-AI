import React, { useState, useEffect } from 'react';
import { Plus, X, Save, Edit2, Trash2, Eye, ExternalLink } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;

const AddProjectForm = ({ isOpen, onClose, serviceId, onAdd }) => {
    const [formData, setFormData] = useState({
      projectName: '',
      description: '',
      logo: '',
      viewLink: ''
    });
    const [loading, setLoading] = useState(false);
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        const response = await fetch(`${apiUrl}/api/services/${serviceId}/projects/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          const result = await response.json();
          onAdd(result);
          setFormData({ projectName: '', description: '', logo: '', viewLink: '' });
          onClose();
        }
      } catch (error) {
        console.error('Error adding project:', error);
      } finally {
        setLoading(false);
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add New Project</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name *
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo URL
              </label>
              <input
                type="url"
                name="logo"
                value={formData.logo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                View Link
              </label>
              <input
                type="url"
                name="viewLink"
                value={formData.viewLink}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Save size={16} />
                {loading ? 'Adding...' : 'Add Project'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

const EditProjectForm = ({ isOpen, onClose, serviceId, project, onUpdate }) => {
    const [formData, setFormData] = useState(project || {
      projectName: '',
      description: '',
      logo: '',
      viewLink: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (project) {
        setFormData(project);
      }
    }, [project]);
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        const response = await fetch(`${apiUrl}/api/services/${serviceId}/projects/${project._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          const result = await response.json();
          onUpdate(result);
          onClose();
        }
      } catch (error) {
        console.error('Error updating project:', error);
      } finally {
        setLoading(false);
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Edit Project</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name *
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo URL
              </label>
              <input
                type="url"
                name="logo"
                value={formData.logo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                View Link
              </label>
              <input
                type="url"
                name="viewLink"
                value={formData.viewLink}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Save size={16} />
                {loading ? 'Updating...' : 'Update Project'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{project.projectName}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            {project.logo && (
              <div className="flex justify-center">
                <img
                  src={project.logo}
                  alt={project.projectName}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
            
            {project.viewLink && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Link</h3>
                <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-md transition-colors"
                >
                  <ExternalLink size={16} />
                  Visit Project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, projectName }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-red-600">Delete Project</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">
              Are you sure you want to delete <strong>"{projectName}"</strong>? This action cannot be undone.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={onConfirm}
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <Trash2 size={16} />
              Delete
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

const ServiceDetailsModal = ({ isOpen, onClose, service }) => {
    const [showAddProject, setShowAddProject] = useState(false);
    const [showEditProject, setShowEditProject] = useState(false);
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentService, setCurrentService] = useState(service);
  
    useEffect(() => {
      setCurrentService(service);
    }, [service]);
  
    const handleAddProject = (newProject) => {
      setCurrentService(prev => ({
        ...prev,
        projects: [...(prev.projects || []), newProject]
      }));
    };

    const handleUpdateProject = (updatedProject) => {
      setCurrentService(prev => ({
        ...prev,
        projects: prev.projects.map(p => 
          p._id === updatedProject._id ? updatedProject : p
        )
      }));
    };

    const handleDeleteProject = async () => {
      if (!selectedProject) return;
      
      try {
        const response = await fetch(`${apiUrl}/api/services/${currentService._id}/projects/${selectedProject._id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setCurrentService(prev => ({
            ...prev,
            projects: prev.projects.filter(p => p._id !== selectedProject._id)
          }));
          setShowDeleteConfirm(false);
          setSelectedProject(null);
        }
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    };

    const openEditProject = (project) => {
      setSelectedProject(project);
      setShowEditProject(true);
    };

    const openProjectDetails = (project) => {
      setSelectedProject(project);
      setShowProjectDetails(true);
    };

    const openDeleteConfirm = (project) => {
      setSelectedProject(project);
      setShowDeleteConfirm(true);
    };
  
    if (!isOpen || !currentService) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{currentService.serviceName}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              {currentService.features && currentService.features.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {currentService.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No features added yet.</p>
              )}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Projects ({currentService.projects?.length || 0})</h3>
                <button
                  onClick={() => setShowAddProject(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add Project
                </button>
              </div>
              
              {currentService.projects && currentService.projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        {project.logo && (
                          <img
                            src={project.logo}
                            alt={project.projectName}
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">{project.projectName}</h4>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
                          {project.viewLink && (
                            <a
                              href={project.viewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-flex items-center gap-1"
                            >
                              <ExternalLink size={12} />
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2 mt-3 pt-3 border-t">
                        <button
                          onClick={() => openProjectDetails(project)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => openEditProject(project)}
                          className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                          title="Edit Project"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => openDeleteConfirm(project)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No projects added yet.</p>
              )}
            </div>
          </div>
          
          <AddProjectForm
            isOpen={showAddProject}
            onClose={() => setShowAddProject(false)}
            serviceId={currentService._id}
            onAdd={handleAddProject}
          />

          <EditProjectForm
            isOpen={showEditProject}
            onClose={() => {
              setShowEditProject(false);
              setSelectedProject(null);
            }}
            serviceId={currentService._id}
            project={selectedProject}
            onUpdate={handleUpdateProject}
          />

          <ProjectDetailsModal
            isOpen={showProjectDetails}
            onClose={() => {
              setShowProjectDetails(false);
              setSelectedProject(null);
            }}
            project={selectedProject}
          />

          <DeleteConfirmModal
            isOpen={showDeleteConfirm}
            onClose={() => {
              setShowDeleteConfirm(false);
              setSelectedProject(null);
            }}
            onConfirm={handleDeleteProject}
            projectName={selectedProject?.projectName}
          />
        </div>
      </div>
    );
  };

export default ServiceDetailsModal;