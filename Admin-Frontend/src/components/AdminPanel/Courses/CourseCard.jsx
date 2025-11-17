import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import EditCourseForm from './EditForm';

const CourseCard = ({ course, onCourseUpdate }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const handleUpdateSuccess = (updatedCourse) => {
    // Call the parent component's update handler if provided
    if (onCourseUpdate) {
      onCourseUpdate(updatedCourse);
    }
    // Close the edit dialog
    handleEditClose();
  };

  const {
    title,
    duration,
    actualPrice,
    discountedPrice,
    instructor,
    img,
    description,
    highlights,
    benefits,
    toolsTeached,
    curriculum,
    projects,
    faq,
  } = course;

  return (
    <div className="border p-4 rounded-2xl shadow-md flex flex-col gap-4 max-w-md w-full bg-white">
      {/* Title and Duration */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{duration}</p>
        </div>
        <div className="text-right">
          <p className="text-sm line-through text-red-400">₹{actualPrice}</p>
          <p className="text-lg font-bold text-green-600">₹{discountedPrice}</p>
        </div>
      </div>

      <div className="text-sm text-gray-700">
        Instructor: <strong>{instructor?.[0]?.name || "Unknown"}</strong>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button onClick={handleViewOpen} variant="contained" color="primary" className="w-full">
          View
        </Button>
        <Button onClick={handleEditOpen} variant="contained" color="secondary" className="w-full">
          Edit
        </Button>
      </div>

      {/* View Dialog */}
      <Dialog open={viewOpen} onClose={handleViewClose} maxWidth="md" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <img src={img} alt={title} className="w-full rounded-lg mb-4" />
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Price:</strong> ₹{discountedPrice} <span className="line-through text-red-400">₹{actualPrice}</span></p>
          <p><strong>Description:</strong> {description}</p>
          <div>
            <strong>Highlights:</strong>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {highlights?.map((point, idx) => <li key={idx}>{point}</li>)}
            </ul>
          </div>
          <div>
            <strong>Benefits:</strong>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {benefits?.map((point, idx) => <li key={idx}>{point}</li>)}
            </ul>
          </div>
          <div>
            <strong>Tools Taught:</strong>
            <ul className="flex flex-wrap gap-2">
              {toolsTeached?.map((tool, idx) => (
                <li key={idx} className="bg-gray-100 px-2 py-1 rounded">{tool.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Curriculum:</strong>
            {curriculum?.map((mod, i) => (
              <div key={i}>
                <p className="font-medium mt-2">{mod.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {mod.lessons?.map((lesson, j) => (
                    <li key={j}>{lesson.title} - {lesson.duration}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <strong>Projects:</strong>
            {projects?.map((proj, i) => (
              <div key={i} className="text-sm mt-1">
                <p className="font-semibold">{proj.title}</p>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
          <div>
            <strong>FAQs:</strong>
            {faq?.map((f, i) => (
              <details key={i} className="border p-2 rounded mb-2">
                <summary className="font-medium cursor-pointer">{f.question}</summary>
                <p className="text-sm">{f.answer}</p>
              </details>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleViewClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Course Form Dialog */}
      <EditCourseForm 
        open={editOpen} 
        handleClose={handleEditClose} 
        course={course} 
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  );
};

export default CourseCard;