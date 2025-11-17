import { Eye, Edit, Plus } from 'lucide-react';
import React, { useState } from 'react';
import EditForm from './EditForm'; // Assuming EditForm is in the same directory

// Separate EditForm component


const InstructorCard = ({ instructor, onInstructorUpdate }) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentInstructor, setCurrentInstructor] = useState(null);

  const handleViewClick = (instructor) => {
    setCurrentInstructor(instructor);
    setShowViewModal(true);
  };

  const handleEditClick = (instructor) => {
    setCurrentInstructor(instructor);
    setShowEditModal(true);
  };

  const closeModals = () => {
    setShowViewModal(false);
    setShowEditModal(false);
    setCurrentInstructor(null);
  };

  const handleSaveInstructor = (updatedInstructor) => {
    // Notify parent component about the update
    if (onInstructorUpdate) {
      onInstructorUpdate(updatedInstructor);
    }
    closeModals();
  };

  const ViewModal = () => {
    if (!showViewModal || !currentInstructor) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-1/3 max-h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Instructor Details</h2>
          
          <div className="mb-4 space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {currentInstructor.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {currentInstructor.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Experience:</span> {currentInstructor.experience}
            </p>
      
            {(currentInstructor.img || currentInstructor.instructorImg) && (
              <div>
                <p className="text-gray-700 font-semibold mb-1">Profile Image:</p>
                <img
                  src={currentInstructor.img || currentInstructor.instructorImg}
                  alt="Instructor"
                  className="w-32 h-32 rounded-full object-cover border border-gray-300"
                />
              </div>
            )}
      
            {currentInstructor.workedCompanies?.length > 0 && (
              <div>
                <p className="text-gray-700 font-semibold mb-1">Worked Companies:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {currentInstructor.workedCompanies.map((company, idx) => (
                    <li key={idx}>{company}</li>
                  ))}
                </ul>
              </div>
            )}
      
            {currentInstructor.education?.length > 0 && (
              <div>
                <p className="text-gray-700 font-semibold mb-1">Education:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {currentInstructor.education.map((degree, idx) => (
                    <li key={idx}>{degree}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
      
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
            onClick={closeModals}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const EditModal = () => {
    if (!showEditModal || !currentInstructor) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-2/3 max-h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Edit Instructor</h2>
          <EditForm 
            instructor={currentInstructor} 
            onClose={closeModals}
            onSave={handleSaveInstructor}
          />
        </div>
      </div>
    );
  };

  return (
    <div key={instructor.id || instructor._id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start mb-2 space-x-3">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-lg">{instructor.name}</h3>
          <p className="text-sm text-gray-500">{instructor.experience}</p>
        </div>
        <div className="flex space-x-2">
          <button
            className="p-1 rounded bg-blue-100 text-blue-600 hover:bg-blue-200"
            onClick={() => handleViewClick(instructor)}
            aria-label="View instructor details"
          >
            <Eye size={18} />
          </button>
          <button
            className="p-1 rounded bg-green-100 text-green-600 hover:bg-green-200"
            onClick={() => handleEditClick(instructor)}
            aria-label="Edit instructor"
          >
            <Edit size={18} />
          </button>
        </div>
      </div>

      <ViewModal />
      <EditModal />
    </div>
  );
};

export default InstructorCard;