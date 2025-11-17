import React, { createContext, useContext, useEffect, useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;
import axios from 'axios';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/jobs`);
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
