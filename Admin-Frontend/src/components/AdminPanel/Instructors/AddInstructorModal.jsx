import { useState, useRef, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import axios from 'axios';

export default function AddInstructorModal({ isOpen, onClose}) {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    experience: '',
    education: [''],
    workedCompanies: ['']
  });
  
  const [instructorImg, setinstructorImg] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  
  // Debug useEffect to confirm instructorImg is being set correctly
  useEffect(() => {
    if (instructorImg) {
      console.log('Image file state updated:', instructorImg);
    }
  }, [instructorImg]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleArrayChange = (e, index, field) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({
      ...formData,
      [field]: newArray
    });
  };
  
  const addArrayItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };
  
  const removeArrayItem = (index, field) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({
      ...formData,
      [field]: newArray
    });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    console.log('Selected file:', file);
    setinstructorImg(file);
    
    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started...');
    
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('experience', formData.experience);
  
    formData.education.forEach((item, index) => {
      if (item.trim()) submitData.append(`education[${index}]`, item);
    });
  
    formData.workedCompanies.forEach((item, index) => {
      if (item.trim()) submitData.append(`workedCompanies[${index}]`, item);
    });
  
    if (instructorImg) {
      submitData.append('instructorImg', instructorImg);
      console.log('Image file being sent:', instructorImg);
    } else {
      console.warn('No image file selected for upload');
    }
  
    for (let pair of submitData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      console.log('FormData contents:');
submitData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});



      console.log('Sending request to backend...',submitData);
  
      const response = await axios.post('https://iaimers-1.onrender.com/api/instructors/add', submitData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Response status:', response.status);
      console.log('Server response data:', response.data);
  
      alert('Instructor added successfully!');
  
      // Reset form
      setFormData({
        name: '',
        email:'',
        experience: '',
        education: [''],
        workedCompanies: ['']
      });
      setinstructorImg(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
  
      onClose();
    } catch (error) {
      console.error('Error during form submission:', error);
      alert(`Error: ${error.message}`);
    }
  };
  
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Instructor</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Profile Image
            </label>
            <div className="flex items-center space-x-4">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500"
                onClick={() => fileInputRef.current.click()}
              >
                <Upload size={24} className="text-gray-400" />
                <span className="text-sm text-gray-500 mt-2">Click to upload image</span>
                <input
                  type="file"
                  accept="image/*"
                  name="instructorImg" // Make sure this matches what your backend expects
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview} 
                    alt="Preview" 
                    className="h-24 w-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    onClick={() => {
                      setinstructorImg(null);
                      setImagePreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
           
          </div>
          
          {/* Experience Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          
          {/* Education Fields (Array) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Education
            </label>
            {formData.education.map((edu, index) => (
              <div key={`edu-${index}`} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={edu}
                  onChange={(e) => handleArrayChange(e, index, 'education')}
                  className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Degree, Institution"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'education')}
                  className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('education')}
              className="mt-1 text-blue-500 hover:text-blue-700 text-sm"
            >
              + Add Education
            </button>
          </div>
          
          {/* Worked Companies Fields (Array) */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Previous Companies
            </label>
            {formData.workedCompanies.map((company, index) => (
              <div key={`company-${index}`} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => handleArrayChange(e, index, 'workedCompanies')}
                  className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Company name"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'workedCompanies')}
                  className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('workedCompanies')}
              className="mt-1 text-blue-500 hover:text-blue-700 text-sm"
            >
              + Add Company
            </button>
          </div>
          
          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Instructor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}