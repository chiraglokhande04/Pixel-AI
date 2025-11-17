import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Sidebar";
import AdminAuth from "./pages/AdminAuth";



import { CourseProvider } from "./config/CourseContext";
import { JobProvider } from "./config/JobContext"; // ✅ Import JobProvider

const App = () => {
 

  return (
    <CourseProvider>
      <JobProvider> {/* ✅ Wrap your job-related state here */}
        <BrowserRouter>
          <Routes>
           
          <Route path="/" element={<AdminAuth />} />
          <Route path="/dashboard" element={<Sidebar />} />
          </Routes>
        </BrowserRouter>
      </JobProvider>
    </CourseProvider>
  );
};

export default App;
