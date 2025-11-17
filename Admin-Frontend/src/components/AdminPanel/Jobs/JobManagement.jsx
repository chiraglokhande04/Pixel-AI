import React, { useState,useEffect } from 'react';
import {
  Button,
  Typography,
  Grid,

} from '@mui/material';
import {  Add } from '@mui/icons-material';


import JobForm from './JobForm'; // Assuming JobForm is in the same directory
import JobCard from './JobCard';
import { useJobs } from '../../../config/JobContext'; // Adjust path if needed

// Main Component
const JobManagement = () => {
  const [Jobs, setJobs] = useState([]); // Local state for jobs
  

    const {jobs} = useJobs();
    useEffect(()=>{
        setJobs(jobs);
    },[]) // Use context to get jobsList

  const [openJobForm, setOpenJobForm] = useState(false);

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleOpenJobForm = () => {
    setOpenJobForm(true);
  };

  const handleCloseJobForm = () => {
    setOpenJobForm(false);
  };

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography variant="h5">Job Management</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<Add />}
          onClick={handleOpenJobForm}
        >
          Add Job
        </Button>
      </div>

      <Grid container spacing={3}>
        {jobs.map((job) => (
            <JobCard job={job} key={job.id} handleDelete={handleDelete} />
        ))}
      </Grid>

      <JobForm 
        open={openJobForm}
        handleClose={handleCloseJobForm}
        addJob={addJob}
      />
    </div>
  );
};

export default JobManagement;