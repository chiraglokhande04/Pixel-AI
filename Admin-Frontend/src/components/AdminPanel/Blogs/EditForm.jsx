import React, { useState } from 'react';
import { Save, X, Trash2 } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;

const EditForm = ({ blog, onClose, onBlogUpdated }) => {
    const [formData, setFormData] = useState({
      title: blog.title || '',
      mainImage: blog.mainImage || '', // Keep existing URL
      content: blog.content || []
    });
    const [newMainImage, setNewMainImage] = useState(null); // New file upload
    const [newSectionImages, setNewSectionImages] = useState({}); 
    const [loading, setLoading] = useState(false);
  
    const addContentSection = () => {
      setFormData(prev => ({
        ...prev,
        content: [...prev.content, { subHeading: '', img: '', paragraph: [''] }]
      }));
    };
  
    const updateContentSection = (index, field, value) => {
      setFormData(prev => ({
        ...prev,
        content: prev.content.map((section, i) => 
          i === index ? { ...section, [field]: value } : section
        )
      }));
    };
  
    const addParagraph = (sectionIndex) => {
      setFormData(prev => ({
        ...prev,
        content: prev.content.map((section, i) => 
          i === sectionIndex 
            ? { ...section, paragraph: [...section.paragraph, ''] }
            : section
        )
      }));
    };
  
    const updateParagraph = (sectionIndex, paragraphIndex, value) => {
      setFormData(prev => ({
        ...prev,
        content: prev.content.map((section, i) => 
          i === sectionIndex 
            ? {
                ...section,
                paragraph: section.paragraph.map((p, j) => 
                  j === paragraphIndex ? value : p
                )
              }
            : section
        )
      }));
    };
  
    const removeParagraph = (sectionIndex, paragraphIndex) => {
      setFormData(prev => ({
        ...prev,
        content: prev.content.map((section, i) => 
          i === sectionIndex 
            ? {
                ...section,
                paragraph: section.paragraph.filter((_, j) => j !== paragraphIndex)
              }
            : section
        )
      }));
    };
  
    const removeContentSection = (index) => {
      setFormData(prev => ({
        ...prev,
        content: prev.content.filter((_, i) => i !== index)
      }));
      
      // Remove any new image for this section
      setNewSectionImages(prev => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    };
  
    const handleMainImageChange = (e) => {
      const file = e.target.files[0];
      setNewMainImage(file);
    };
  
    const handleSectionImageChange = (sectionIndex, e) => {
      const file = e.target.files[0];
      setNewSectionImages(prev => ({
        ...prev,
        [sectionIndex]: file
      }));
    };
  
    const removeMainImage = () => {
      setFormData(prev => ({ ...prev, mainImage: '' }));
      setNewMainImage(null);
    };
  
    const removeSectionImage = (sectionIndex) => {
      updateContentSection(sectionIndex, 'img', '');
      setNewSectionImages(prev => {
        const updated = { ...prev };
        delete updated[sectionIndex];
        return updated;
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        const formDataToSend = new FormData();
        
        // Add basic fields
        formDataToSend.append('title', formData.title);
        formDataToSend.append('blogId', blog._id);
        
        // Add main image (new file or keep existing)
        if (newMainImage) {
          formDataToSend.append('mainImage', newMainImage);
          formDataToSend.append('mainImageAction', 'replace');
        } else if (formData.mainImage) {
          formDataToSend.append('mainImageAction', 'keep');
          formDataToSend.append('existingMainImage', formData.mainImage);
        } else {
          formDataToSend.append('mainImageAction', 'remove');
        }
        
        // Add content sections
        formData.content.forEach((section, index) => {
          formDataToSend.append(`content[${index}][subHeading]`, section.subHeading);
          
          // Handle section images
          if (newSectionImages[index]) {
            formDataToSend.append(`content[${index}][img]`, newSectionImages[index]);
            formDataToSend.append(`content[${index}][imgAction]`, 'replace');
          } else if (section.img) {
            formDataToSend.append(`content[${index}][imgAction]`, 'keep');
            formDataToSend.append(`content[${index}][existingImg]`, section.img);
          } else {
            formDataToSend.append(`content[${index}][imgAction]`, 'remove');
          }
          
          section.paragraph.forEach((paragraph, pIndex) => {
            formDataToSend.append(`content[${index}][paragraph][${pIndex}]`, paragraph);
          });
        });
        
        const response = await fetch(`${apiUrl}/api/blogs/${blog._id}`, {
          method: 'PATCH',
          body: formDataToSend // Don't set Content-Type header
        });
        
        if (response.ok) {
          const updatedBlog = await response.json();
          onBlogUpdated(updatedBlog);
          onClose();
        } else {
          console.error('Failed to update blog');
        }
      } catch (error) {
        console.error('Error updating blog:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Blog</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
  
              {/* Main Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Image *
                </label>
                
                {/* Current Image Display */}
                {formData.mainImage && !newMainImage && (
                  <div className="mb-3 p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={formData.mainImage} 
                          alt="Current main image" 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span className="text-sm text-gray-600">Current image</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeMainImage}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
                
                {/* File Input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                
                {newMainImage && (
                  <p className="mt-2 text-sm text-green-600">
                    New image selected: {newMainImage.name}
                  </p>
                )}
                
                {!formData.mainImage && !newMainImage && (
                  <p className="mt-2 text-sm text-red-600">
                    Main image is required
                  </p>
                )}
              </div>
  
              {/* Content Sections */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Content Sections
                  </label>
                  <button
                    type="button"
                    onClick={addContentSection}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm"
                  >
                    Add Section
                  </button>
                </div>
  
                {formData.content.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-700">Section {sectionIndex + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeContentSection(sectionIndex)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
  
                    {/* Sub Heading */}
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Sub Heading *
                      </label>
                      <input
                        type="text"
                        value={section.subHeading}
                        onChange={(e) => updateContentSection(sectionIndex, 'subHeading', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
  
                    {/* Image */}
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Section Image
                      </label>
                      
                      {/* Current Section Image Display */}
                      {section.img && !newSectionImages[sectionIndex] && (
                        <div className="mb-3 p-3 bg-gray-50 rounded-md">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img 
                                src={section.img} 
                                alt="Current section image" 
                                className="w-12 h-12 object-cover rounded"
                              />
                              <span className="text-sm text-gray-600">Current image</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeSectionImage(sectionIndex)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* File Input */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleSectionImageChange(sectionIndex, e)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      
                      {newSectionImages[sectionIndex] && (
                        <p className="mt-2 text-sm text-green-600">
                          New image selected: {newSectionImages[sectionIndex].name}
                        </p>
                      )}
                    </div>
  
                    {/* Paragraphs */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-gray-600">
                          Paragraphs
                        </label>
                        <button
                          type="button"
                          onClick={() => addParagraph(sectionIndex)}
                          className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                        >
                          Add Paragraph
                        </button>
                      </div>
                      
                      {section.paragraph.map((paragraph, paragraphIndex) => (
                        <div key={paragraphIndex} className="flex gap-2 mb-2">
                          <textarea
                            value={paragraph}
                            onChange={(e) => updateParagraph(sectionIndex, paragraphIndex, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            placeholder={`Paragraph ${paragraphIndex + 1}`}
                          />
                          {section.paragraph.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeParagraph(sectionIndex, paragraphIndex)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading || (!formData.mainImage && !newMainImage)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
                >
                  <Save size={16} />
                  {loading ? 'Updating...' : 'Update Blog'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default EditForm;