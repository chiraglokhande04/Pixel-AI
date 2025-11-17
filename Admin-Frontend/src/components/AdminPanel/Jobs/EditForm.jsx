import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';
import axios from 'axios';

const EditForm = ({ job, open, handleClose }) => {
  const [formData, setFormData] = useState({
    position: job?.position || '',
    description: job?.description || '',
    location: job?.location || '',
    employmentType: job?.type || '',
    salary: job?.salary || ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when job changes
  React.useEffect(() => {
    if (job) {
      setFormData({
        position: job.position || '',
        description: job.description || '',
        location: job.location || '',
        employmentType: job.type || '',
        salary: job.salary || ''
      });
    }
  }, [job]);

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
    
    if (!formData.salary) {
      newErrors.salary = 'Salary is required';
    } else if (isNaN(formData.salary) || Number(formData.salary) <= 0) {
      newErrors.salary = 'Please enter a valid salary amount';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Send update request to backend
      const response = await axios.put(`https://iaimers-1.onrender.com/api/jobs/${job._id}`, formData);
      
  
      
      handleClose();
    } catch (error) {
      console.error('Error updating job:', error);
      // Handle API errors
      if (error.response && error.response.data) {
        setErrors({ api: error.response.data.message || 'Failed to update job' });
      } else {
        setErrors({ api: 'Network error occurred. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Job Opening</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {errors.api && (
            <FormHelperText error>{errors.api}</FormHelperText>
          )}
          
          <TextField
            margin="dense"
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            fullWidth
            error={!!errors.position}
            helperText={errors.position}
          />
          
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description}
          />
          
          <TextField
            margin="dense"
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            error={!!errors.location}
            helperText={errors.location}
          />
          
          <FormControl 
            fullWidth 
            margin="dense"
            error={!!errors.employmentType}
          >
            <InputLabel>Employment Type</InputLabel>
            <Select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
            </Select>
            {errors.employmentType && (
              <FormHelperText>{errors.employmentType}</FormHelperText>
            )}
          </FormControl>
          
          <TextField
            margin="dense"
            label="Salary"
            name="salary"
            type="number"
            value={formData.salary}
            onChange={handleChange}
            fullWidth
            error={!!errors.salary}
            helperText={errors.salary}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button 
            type="submit" 
            color="primary" 
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditForm;