import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SolutionPage from './pages/SolutionPage.jsx'

import './App.css'


function App() {


  return (
    <BrowserRouter>

    <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<SolutionPage />} />

      </Routes>
    <Footer />

    </BrowserRouter>


  )
}

export default App
