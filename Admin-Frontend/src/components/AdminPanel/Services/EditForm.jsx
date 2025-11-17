import React, { useState, useEffect } from 'react';
import {  X, Save, Trash2 } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;


// Edit Service Component
const EditForm = ({ isOpen, onClose, service, onUpdate }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    features: ['']
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (service) {
      setFormData({
        serviceName: service.serviceName || '',
        features: service.features && service.features.length > 0 ? service.features : ['']
      });
    }
  }, [service]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      features: newFeatures
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      features: newFeatures
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${apiUrl}/api/services/${service._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          features: formData.features.filter(feature => feature.trim() !== '')
        }),
      });
      
      if (response.ok) {
        const updatedService = await response.json();
        onUpdate(updatedService);
        onClose();
      }
    } catch (error) {
      console.error('Error updating service:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Service</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Name *
            </label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features
            </label>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder="Enter feature"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              + Add Feature
            </button>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save size={16} />
              {loading ? 'Updating...' : 'Update Service'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;