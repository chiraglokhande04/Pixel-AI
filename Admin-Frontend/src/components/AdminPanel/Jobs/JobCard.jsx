import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { Edit, Visibility, Delete } from '@mui/icons-material';
import EditForm from './EditForm';
import axios from 'axios';

const JobCard = ({ job }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleOpenEditForm = () => {
    setEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setEditFormOpen(false);
  };

  const jobId = job._id


const handleDelete = async (jobId) => {
  try {
    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (!confirmed) return;

    const res = await axios.delete(`https://iaimers-1.onrender.com/api/jobs/${jobId}`); // 🔁 Replace with your actual backend URL
    console.log("Job deleted:", res.data);

  } catch (error) {
    console.error("Failed to delete job:", error);
    alert("Error deleting job. Try again.");
  }
};


  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={job.id}>
        <Card>
          <CardContent>
            <Typography variant="h6">{job.position}</Typography>
            <Typography variant="body2" color="textSecondary">{job.description}</Typography>
            <Typography variant="body2">📍 {job.location}</Typography>
            <Typography variant="body2">⏰ {job.employmentType}</Typography>
            <Typography variant="body2">💰 {job.salary}</Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <IconButton color="primary">
                <Visibility />
              </IconButton>
              <IconButton color="primary" onClick={handleOpenEditForm}>
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(job._id)}>
                <Delete />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Edit Form Dialog */}
      <EditForm
        job={job}
        open={editFormOpen}
        handleClose={handleCloseEditForm}
        
      />
    </>
  );
};

export default JobCard;