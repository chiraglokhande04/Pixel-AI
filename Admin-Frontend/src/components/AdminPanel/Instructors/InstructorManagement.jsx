import { useState } from 'react';
import { Plus } from 'lucide-react';
import AddInstructorModal from './AddInstructorModal';

import InstructorList from './InstructorList';

export default function InstructorManagement() {
  // Sample instructor data - in a real app this would come from an API
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'Dr. Jane Smith', department: 'Computer Science', email: 'jane.smith@university.edu' },
    { id: 2, name: 'Prof. Michael Johnson', department: 'Mathematics', email: 'michael.johnson@university.edu' },
    { id: 3, name: 'Dr. Sophia Williams', department: 'Physics', email: 'sophia.williams@university.edu' }
  ]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentInstructor, setCurrentInstructor] = useState(null);
  

  


  
  // Modal components


  return (
    <div className="container mx-auto p-6">
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Instructors</h2>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus size={18} className="mr-1" />
          Add Instructor
        </button>
      </div>
      
      <InstructorList />
      
      {/* Render modals */}

      <AddInstructorModal  isOpen = {showAddModal} onClose = {()=>{setShowAddModal(false)}}/>
    </div>
  );
}