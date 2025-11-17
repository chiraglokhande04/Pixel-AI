
import React, { useState } from 'react';


const EditForm = ({ instructor, onClose, onSave }) => {
    const [formData, setFormData] = useState({
      name: instructor.name || '',
      email: instructor.email || '',
      experience: instructor.experience || '',
      instructorImg: instructor.img || '',
      education: instructor.education || [],
      workedCompanies: instructor.workedCompanies || []
    });
  
    const [imageFile, setImageFile] = useState(null);
    const [newEducation, setNewEducation] = useState('');
    const [newCompany, setNewCompany] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleFileChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setImageFile(e.target.files[0]);
      }
    };
  
    const addEducation = () => {
      if (newEducation.trim()) {
        setFormData(prev => ({
          ...prev,
          education: [...prev.education, newEducation.trim()]
        }));
        setNewEducation('');
      }
    };
  
    const removeEducation = (index) => {
      setFormData(prev => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }));
    };
  
    const addCompany = () => {
      if (newCompany.trim()) {
        setFormData(prev => ({
          ...prev,
          workedCompanies: [...prev.workedCompanies, newCompany.trim()]
        }));
        setNewCompany('');
      }
    };
  
    const removeCompany = (index) => {
      setFormData(prev => ({
        ...prev,
        workedCompanies: prev.workedCompanies.filter((_, i) => i !== index)
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Create FormData for file upload
      const submitData = new FormData();
      
      // Add all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'education' || key === 'workedCompanies') {
          submitData.append(key, JSON.stringify(formData[key]));
        } else {
          submitData.append(key, formData[key]);
        }
      });
      
      // Add image file if selected
      if (imageFile) {
        submitData.append('instructorImg', imageFile);
      }
      
      try {
        // Make API request to update instructor
        const response = await fetch(`https://iaimers-1.onrender.com/api/instructors/${instructor._id}`, {
          method: 'PUT',
          body: submitData, // No need to set Content-Type with FormData
        });
        
        if (!response.ok) {
          throw new Error('Failed to update instructor');
        }
        
        const updatedInstructor = await response.json();
        onSave(updatedInstructor); // Pass updated data back to parent
      } catch (error) {
        console.error('Error updating instructor:', error);
        // Handle error (show message to user)
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Profile Image</label>
          <div className="flex items-center space-x-4">
            {(formData.instructorImg || instructor.img) && (
              <img 
                src={imageFile ? URL.createObjectURL(imageFile) : (formData.instructorImg || instructor.img)}
                alt="Instructor preview" 
                className="h-16 w-16 rounded-full object-cover border border-gray-300"
              />
            )}
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 rounded p-2"
              accept="image/*"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Education</label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={newEducation}
              onChange={(e) => setNewEducation(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Add education"
            />
            <button
              type="button"
              onClick={addEducation}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="border border-gray-200 rounded-lg p-2 max-h-40 overflow-y-auto">
            {formData.education.map((edu, idx) => (
              <li key={idx} className="flex justify-between items-center py-1">
                <span>{edu}</span>
                <button
                  type="button"
                  onClick={() => removeEducation(idx)}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </li>
            ))}
            {formData.education.length === 0 && (
              <li className="text-gray-500 italic">No education entries added</li>
            )}
          </ul>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Worked Companies</label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Add company"
            />
            <button
              type="button"
              onClick={addCompany}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="border border-gray-200 rounded-lg p-2 max-h-40 overflow-y-auto">
            {formData.workedCompanies.map((company, idx) => (
              <li key={idx} className="flex justify-between items-center py-1">
                <span>{company}</span>
                <button
                  type="button"
                  onClick={() => removeCompany(idx)}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </li>
            ))}
            {formData.workedCompanies.length === 0 && (
              <li className="text-gray-500 italic">No companies added</li>
            )}
          </ul>
        </div>
        
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    );
  };


export default EditForm;