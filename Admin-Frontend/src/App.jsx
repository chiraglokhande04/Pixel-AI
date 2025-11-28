import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Sidebar";
import AdminAuth from "./pages/AdminAuth";


const App = () => {
 

  return (

        <BrowserRouter>
          <Routes>
           
          <Route path="/" element={<AdminAuth />} />
          <Route path="/dashboard" element={<Sidebar />} />
          </Routes>
        </BrowserRouter>

  );
};

export default App;
