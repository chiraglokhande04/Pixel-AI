import React, { useState, useEffect } from 'react';
import { Plus, Edit, Eye, X, Save, Trash2 } from 'lucide-react';
import AddForm from './AddForm';
import EditForm from './EditForm';
import ServiceDetailsModal from './ServiceDetailsModal';
const apiUrl = import.meta.env.VITE_API_URL;

// Main Services Admin Panel
const ServiceManagement  = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/services`);
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleUpdateService = (updatedService) => {
    setServices(services.map(service => 
      service._id === updatedService._id ? updatedService : service
    ));
  };

  const handleDeleteService = async (serviceId) => {
    try {
      const response = await fetch(`${apiUrl}/api/services/${serviceId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setServices(services.filter(service => service._id !== serviceId));
        setDeleteConfirmation(null);
      } else {
        console.error('Failed to delete service');
        alert('Failed to delete service. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Error deleting service. Please try again.');
    }
  };

  const handleEditClick = (service) => {
    setSelectedService(service);
    setShowEditForm(true);
  };

  const handleViewClick = (service) => {
    setSelectedService(service);
    setShowServiceDetails(true);
  };

  const handleDeleteClick = (service) => {
    setDeleteConfirmation(service);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Services Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={20} />
          Add Service
        </button>
      </div>

      {services.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No services found. Add your first service!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service._id} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{service.serviceName}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewClick(service)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEditClick(service)}
                    className="text-gray-600 hover:text-gray-800 p-1"
                    title="Edit Service"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(service)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Delete Service"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Features: {service.features?.length || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Projects: {service.projects?.length || 0}</p>
                </div>
                <div className="text-xs text-gray-500">
                  Created: {new Date(service.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "<strong>{deleteConfirmation.serviceName}</strong>"? 
              This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirmation(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteService(deleteConfirmation._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <AddForm
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onAdd={handleAddService}
      />

      <EditForm
        isOpen={showEditForm}
        onClose={() => {
          setShowEditForm(false);
          setSelectedService(null);
        }}
        service={selectedService}
        onUpdate={handleUpdateService}
      />

      <ServiceDetailsModal
        isOpen={showServiceDetails}
        onClose={() => {
          setShowServiceDetails(false);
          setSelectedService(null);
        }}
        service={selectedService}
      />
    </div>
  );
};

export default ServiceManagement;