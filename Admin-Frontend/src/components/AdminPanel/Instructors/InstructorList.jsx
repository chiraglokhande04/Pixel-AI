import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstructorCard from './InstructorCard';

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axios.get('https://iaimers-1.onrender.com/api/instructors'); // Replace with your deployed URL if needed
        setInstructors(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <p>Loading instructors...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {instructors.map((instructor) => (
       <InstructorCard instructor={instructor} key={instructor._id} />
      ))}
    </div>
  );
};

export default InstructorList;
