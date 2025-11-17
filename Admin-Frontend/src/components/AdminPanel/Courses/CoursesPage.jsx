
import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CourseCard from './CourseCard';
import CourseForm from './CourseForm';
import { useCourses } from '../../../config/CourseContext'; // Adjust path if needed

const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const { courses } = useCourses(); // Use context to get coursesList

  // Update local state when context changes
  useEffect(() => {
    if (courses) {
      setCoursesList(courses);
      setLoading(false);
    }
  }, [courses]);

  // Handle adding a new course
  const handleAddCourse = (newCourse) => {
    setCoursesList(prev => [...prev, newCourse]);
  };

  // Handle updating an existing course
  const handleUpdateCourse = (updatedCourse) => {
    setCoursesList(prev =>
      prev.map(course =>
        course._id === updatedCourse._id ? updatedCourse : course
      )
    );
  };

  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} mt={2}>
        <Typography variant="h4">Courses List</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setAddDialogOpen(true)}
        >
          Add New Course
        </Button>
      </Box>

      {loading ? (
        <Typography>Loading courses...</Typography>
      ) : (
        <Grid container spacing={3}>
          {coursesList.map(course => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course._id}>
              <CourseCard
                course={course}
                onCourseUpdate={handleUpdateCourse}
              />
            </Grid>
          ))}
          {coursesList.length === 0 && (
            <Grid item xs={12}>
              <Typography textAlign="center" color="text.secondary">
                No courses found. Create your first course by clicking the "Add New Course" button.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}

      {/* Add Course Dialog */}
      <CourseForm
        open={addDialogOpen}
        handleClose={() => setAddDialogOpen(false)}
        onCreateSuccess={handleAddCourse}
      />
    </Container>
  );
};

export default CoursesPage;
