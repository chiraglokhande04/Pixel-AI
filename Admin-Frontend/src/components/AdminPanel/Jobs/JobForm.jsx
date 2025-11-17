import React, { useState } from 'react';
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const JobForm = ({ open, handleClose, addJob }) => {
    const [formData, setFormData] = useState({
      position: '',
      description: '',
      location: '',
      employmentType: '',
      salary: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
      // Clear error when field is edited
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.position.trim()) newErrors.position = 'Position is required';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
      if (!formData.employmentType) newErrors.employmentType = 'Employment type is required';
      if (!formData.salary) newErrors.salary = 'Salary is required';
      return newErrors;
    };
  
    const handleSubmit = async () => {
      const formErrors = validateForm();
      
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }
  
      try {
        // Format salary for display
        const formattedSalary = `₹${parseInt(formData.salary).toLocaleString()}/year`;
        
        // Prepare data for API
        const jobData = {
          position: formData.position,
          description: formData.description,
          location: formData.location,
          employmentType: formData.employmentType,
          salary: parseInt(formData.salary)
        };
  
        // API call would go here
        const response = await fetch('https://iaimers-1.onrender.com/api/jobs/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobData),
        });
        const result = await response.json();
        
        // For now, simulate a successful API response with an ID
        const mockResult = {
          ...jobData,
          id: Date.now(), // Use timestamp as temporary ID
          type: jobData.employmentType === 'Full-Time' ? 'Full-time' : 'Part-time', // Format to match existing data
          salary: formattedSalary
        };
        
        addJob(mockResult);
        handleClose();
        
        // Reset form
        setFormData({
          position: '',
          description: '',
          location: '',
          employmentType: '',
          salary: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error adding job:', error);
        // Handle error (show error message, etc.)
      }
    };
  
    return (
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="position"
            label="Position"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.position}
            onChange={handleChange}
            error={!!errors.position}
            helperText={errors.position}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.location}
            onChange={handleChange}
            error={!!errors.location}
            helperText={errors.location}
          />
          <FormControl fullWidth margin="dense" error={!!errors.employmentType}>
            <InputLabel id="employment-type-label">Employment Type</InputLabel>
            <Select
              labelId="employment-type-label"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              label="Employment Type"
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
            </Select>
            {errors.employmentType && (
              <Typography variant="caption" color="error">
                {errors.employmentType}
              </Typography>
            )}
          </FormControl>
          <TextField
            margin="dense"
            name="salary"
            label="Salary (₹)"
            type="number"
            fullWidth
            variant="outlined"
            value={formData.salary}
            onChange={handleChange}
            error={!!errors.salary}
            helperText={errors.salary}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };


export default JobForm;