import React, { createContext, useState, useEffect, useContext } from "react";
const apiUrl = import.meta.env.VITE_API_URL;


const CoursesContext = createContext();

// Provider Component
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/courses`);
      const data = await response.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data.courses)) {
        setCourses(data.courses);
      } else {
        console.error("Courses data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, loading }}>
      {children}
    </CoursesContext.Provider>
  );
};

// Custom Hook
export const useCourses = () => useContext(CoursesContext);
