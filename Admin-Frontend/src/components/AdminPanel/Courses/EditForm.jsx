import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Grid,
  IconButton,
  Chip,
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const EditCourseForm = ({ open, handleClose, course, onUpdateSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ...course
  });
  
  // State for file uploads
  const [files, setFiles] = useState({
    img: null,
    brochure: null,
    certificate: null
  });
  
  // Preview URLs for uploaded files
  const [previews, setPreviews] = useState({
    img: course.img || '',
    brochure: course.brochure || '',
    certificate: course.certificate || ''
  });

  // Basic input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // File input change handler
  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    if (fileList && fileList[0]) {
      setFiles(prev => ({ ...prev, [name]: fileList[0] }));
      
      // Create preview URL
      const previewUrl = URL.createObjectURL(fileList[0]);
      setPreviews(prev => ({ ...prev, [name]: previewUrl }));
    }
  };

  // Array field handlers (highlights, benefits)
  const handleArrayItemChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: [...(prev[field] || []), ''] 
    }));
  };

  const removeArrayItem = (field, index) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  // Tool handlers
  const handleToolChange = (index, field, value) => {
    const newTools = [...formData.toolsTeached];
    newTools[index] = { ...newTools[index], [field]: value };
    setFormData(prev => ({ ...prev, toolsTeached: newTools }));
  };

  const addTool = () => {
    setFormData(prev => ({ 
      ...prev, 
      toolsTeached: [...(prev.toolsTeached || []), { name: '', img: '' }] 
    }));
  };

  const removeTool = (index) => {
    const newTools = [...formData.toolsTeached];
    newTools.splice(index, 1);
    setFormData(prev => ({ ...prev, toolsTeached: newTools }));
  };

  // Curriculum handlers
  const handleModuleChange = (moduleIndex, field, value) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex] = { ...newCurriculum[moduleIndex], [field]: value };
    setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
  };

  const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
    const newCurriculum = [...formData.curriculum];
    if (!newCurriculum[moduleIndex].lessons) {
      newCurriculum[moduleIndex].lessons = [];
    }
    newCurriculum[moduleIndex].lessons[lessonIndex] = { 
      ...newCurriculum[moduleIndex].lessons[lessonIndex], 
      [field]: value 
    };
    setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
  };

  const addModule = () => {
    setFormData(prev => ({ 
      ...prev, 
      curriculum: [...(prev.curriculum || []), { title: '', lessons: [] }] 
    }));
  };

  const removeModule = (index) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum.splice(index, 1);
    setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
  };

  const addLesson = (moduleIndex) => {
    const newCurriculum = [...formData.curriculum];
    if (!newCurriculum[moduleIndex].lessons) {
      newCurriculum[moduleIndex].lessons = [];
    }
    newCurriculum[moduleIndex].lessons.push({ 
      title: '', 
      duration: '',
      locked: false,
      isTest: false 
    });
    setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
  };

  const removeLesson = (moduleIndex, lessonIndex) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex].lessons.splice(lessonIndex, 1);
    setFormData(prev => ({ ...prev, curriculum: newCurriculum }));
  };

  // Project handlers
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setFormData(prev => ({ ...prev, projects: newProjects }));
  };

  const addProject = () => {
    setFormData(prev => ({ 
      ...prev, 
      projects: [...(prev.projects || []), { title: '', description: '' }] 
    }));
  };

  const removeProject = (index) => {
    const newProjects = [...formData.projects];
    newProjects.splice(index, 1);
    setFormData(prev => ({ ...prev, projects: newProjects }));
  };

  // FAQ handlers
  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...formData.faq];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    setFormData(prev => ({ ...prev, faq: newFaqs }));
  };

  const addFaq = () => {
    setFormData(prev => ({ 
      ...prev, 
      faq: [...(prev.faq || []), { question: '', answer: '' }] 
    }));
  };

  const removeFaq = (index) => {
    const newFaqs = [...formData.faq];
    newFaqs.splice(index, 1);
    setFormData(prev => ({ ...prev, faq: newFaqs }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Create form data for file uploads
      const formDataToSend = new FormData();
      
      // Add all regular fields
      Object.keys(formData).forEach(key => {
        if (key !== 'img' && key !== 'brochure' && key !== 'certificate') {
          if (Array.isArray(formData[key])) {
            formDataToSend.append(key, JSON.stringify(formData[key]));
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
      });
      
      // Add file fields if they exist
      if (files.img) formDataToSend.append('img', files.img);
      if (files.brochure) formDataToSend.append('brochure', files.brochure);
      if (files.certificate) formDataToSend.append('certificate', files.certificate);
      
      // Send PUT request
      const response = await axios.put(`https://iaimers-1.onrender.com/api/courses/${course._id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.status === 200) {
        // Call the success callback with updated data
        onUpdateSuccess(response.data);
        handleClose();
      }
    } catch (error) {
      console.error('Error updating course:', error);
      // Handle error (show error message, etc.)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="lg" 
      fullWidth
      scroll="paper"
    >
      <DialogTitle>Edit Course: {course.title}</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit} id="edit-course-form">
          <Grid container spacing={3}>
            {/* Basic Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Basic Information</Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                name="title"
                label="Course Title"
                value={formData.title || ''}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="duration"
                label="Duration"
                value={formData.duration || ''}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                name="actualPrice"
                label="Actual Price"
                type="number"
                value={formData.actualPrice || ''}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                name="discountedPrice"
                label="Discounted Price"
                type="number"
                value={formData.discountedPrice || ''}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formData.description || ''}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category || ''}
                  onChange={handleInputChange}
                  label="Category"
                >
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            {/* File Uploads */}
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>File Uploads</Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Course Image</Typography>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="img-upload"
                name="img"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="img-upload">
                <Button variant="outlined" component="span" fullWidth>
                  Upload Image
                </Button>
              </label>
              {previews.img && (
                <Box mt={2} position="relative">
                  <img 
                    src={previews.img} 
                    alt="Course Preview" 
                    style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} 
                  />
                </Box>
              )}
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Brochure PDF</Typography>
              <input
                accept="application/pdf"
                style={{ display: 'none' }}
                id="brochure-upload"
                name="brochure"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="brochure-upload">
                <Button variant="outlined" component="span" fullWidth>
                  Upload Brochure
                </Button>
              </label>
              {previews.brochure && (
                <Box mt={2}>
                  <Typography variant="body2" noWrap>
                    {files.brochure ? files.brochure.name : "Current brochure"}
                  </Typography>
                </Box>
              )}
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1">Certificate Sample</Typography>
              <input
                accept="image/*,application/pdf"
                style={{ display: 'none' }}
                id="certificate-upload"
                name="certificate"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="certificate-upload">
                <Button variant="outlined" component="span" fullWidth>
                  Upload Certificate
                </Button>
              </label>
              {previews.certificate && (
                <Box mt={2}>
                  <Typography variant="body2" noWrap>
                    {files.certificate ? files.certificate.name : "Current certificate"}
                  </Typography>
                </Box>
              )}
            </Grid>
            
            {/* Highlights & Benefits */}
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Highlights & Benefits</Typography>
            </Grid>
            
            {/* Highlights */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Highlights</Typography>
              {formData.highlights?.map((highlight, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <TextField
                    fullWidth
                    value={highlight}
                    onChange={(e) => handleArrayItemChange('highlights', index, e.target.value)}
                    size="small"
                  />
                  <IconButton color="error" onClick={() => removeArrayItem('highlights', index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button 
                startIcon={<AddIcon />} 
                onClick={() => addArrayItem('highlights')}
                variant="outlined"
                size="small"
                sx={{ mt: 1 }}
              >
                Add Highlight
              </Button>
            </Grid>
            
            {/* Benefits */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Benefits</Typography>
              {formData.benefits?.map((benefit, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <TextField
                    fullWidth
                    value={benefit}
                    onChange={(e) => handleArrayItemChange('benefits', index, e.target.value)}
                    size="small"
                  />
                  <IconButton color="error" onClick={() => removeArrayItem('benefits', index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button 
                startIcon={<AddIcon />} 
                onClick={() => addArrayItem('benefits')}
                variant="outlined"
                size="small"
                sx={{ mt: 1 }}
              >
                Add Benefit
              </Button>
            </Grid>
            
            {/* Tools Taught */}
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Tools Taught</Typography>
              <Grid container spacing={2}>
                {formData.toolsTeached?.map((tool, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box border={1} borderColor="grey.300" borderRadius={1} p={2} position="relative">
                      <IconButton 
                        size="small" 
                        color="error" 
                        onClick={() => removeTool(index)}
                        sx={{ position: 'absolute', top: 5, right: 5 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <TextField
                        fullWidth
                        label="Tool Name"
                        value={tool.name || ''}
                        onChange={(e) => handleToolChange(index, 'name', e.target.value)}
                        margin="normal"
                        size="small"
                      />
                      <TextField
                        fullWidth
                        label="Tool Image URL"
                        value={tool.img || ''}
                        onChange={(e) => handleToolChange(index, 'img', e.target.value)}
                        margin="normal"
                        size="small"
                      />
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button 
                    startIcon={<AddIcon />} 
                    onClick={addTool}
                    variant="outlined"
                  >
                    Add Tool
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            
            {/* Curriculum */}
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Curriculum</Typography>
              {formData.curriculum?.map((module, moduleIndex) => (
                <Box key={moduleIndex} mb={3} border={1} borderColor="grey.300" borderRadius={1} p={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="subtitle1">Module {moduleIndex + 1}</Typography>
                    <IconButton color="error" onClick={() => removeModule(moduleIndex)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  
                  <TextField
                    fullWidth
                    label="Module Title"
                    value={module.title || ''}
                    onChange={(e) => handleModuleChange(moduleIndex, 'title', e.target.value)}
                    margin="normal"
                  />
                  
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>Lessons</Typography>
                  {module.lessons?.map((lesson, lessonIndex) => (
                    <Box key={lessonIndex} display="flex" flexWrap="wrap" alignItems="center" mb={1} pl={2} pr={2} borderLeft={1} borderColor="grey.200">
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={4}>
                          <TextField
                            fullWidth
                            label="Lesson Title"
                            value={lesson.title || ''}
                            onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'title', e.target.value)}
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            fullWidth
                            label="Duration"
                            value={lesson.duration || ''}
                            onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'duration', e.target.value)}
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <FormControl fullWidth size="small">
                            <InputLabel>Locked</InputLabel>
                            <Select
                              value={lesson.locked ? "true" : "false"}
                              onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'locked', e.target.value === "true")}
                              label="Locked"
                            >
                              <MenuItem value="true">Yes</MenuItem>
                              <MenuItem value="false">No</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <FormControl fullWidth size="small">
                            <InputLabel>Is Test</InputLabel>
                            <Select
                              value={lesson.isTest ? "true" : "false"}
                              onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'isTest', e.target.value === "true")}
                              label="Is Test"
                            >
                              <MenuItem value="true">Yes</MenuItem>
                              <MenuItem value="false">No</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={1}>
                          <IconButton color="error" onClick={() => removeLesson(moduleIndex, lessonIndex)}>
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => addLesson(moduleIndex)}
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1 }}
                  >
                    Add Lesson
                  </Button>
                </Box>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={addModule}
                variant="outlined"
                sx={{ mt: 1 }}
              >
                Add Module
              </Button>
            </Grid>
            
            {/* Projects */}
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Projects</Typography>
              <Grid container spacing={2}>
                {formData.projects?.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box border={1} borderColor="grey.300" borderRadius={1} p={2} position="relative">
                      <IconButton 
                        size="small" 
                        color="error" 
                        onClick={() => removeProject(index)}
                        sx={{ position: 'absolute', top: 5, right: 5 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <TextField
                        fullWidth
                        label="Project Title"
                        value={project.title || ''}
                        onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                        margin="normal"
                      />
                      <TextField
                        fullWidth
                        label="Project Description"
                        value={project.description || ''}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        margin="normal"
                        multiline
                        rows={2}
                      />
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button 
                    startIcon={<AddIcon />} 
                    onClick={addProject}
                    variant="outlined"
                  >
                    Add Project
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            
            {/* FAQs */}
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>FAQs</Typography>
              {formData.faq?.map((faq, index) => (
                <Box key={index} mb={2} border={1} borderColor="grey.300" borderRadius={1} p={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="subtitle2">FAQ {index + 1}</Typography>
                    <IconButton color="error" onClick={() => removeFaq(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <TextField
                    fullWidth
                    label="Question"
                    value={faq.question || ''}
                    onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Answer"
                    value={faq.answer || ''}
                    onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                    margin="normal"
                    multiline
                    rows={2}
                  />
                </Box>
              ))}
              <Button 
                startIcon={<AddIcon />} 
                onClick={addFaq}
                variant="outlined"
              >
                Add FAQ
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">Cancel</Button>
        <Button 
          type="submit" 
          form="edit-course-form" 
          color="primary" 
          variant="contained"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Course'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCourseForm;