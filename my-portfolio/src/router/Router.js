// src/router/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar here
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar placed globally here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
