import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SolutionsPage from './pages/SolutionsPage.jsx'
import IndustriesPage from "./pages/IndustriesPage";
import IndustryDetailsPage from "./pages/IndustryDetailsPage.jsx";
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'


import './App.css'


function App() {


  return (
    <BrowserRouter>

    <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
     

      </Routes>
    <Footer />

    </BrowserRouter>


  )
}

export default App
