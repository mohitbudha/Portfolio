import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './UI/Top';
import AboutMe from './UI/About';
import ProjectSection from './UI/Projects';
import Footer from './UI/Footer';
import AdminLogin from './Admin/Adminlogin';
import AddProject from './Admin/addProject';
import Hero from './UI/Hero';
import Top1 from './Admin/adminTop';
import AdminContact from './Admin/adminContact';
import Contact from './UI/Contact';

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleProjectAdded = (newProject) => {
    setProjects((prev) => [...prev, newProject]); // Update state when new project added
  };

  return (
    <ThemeProvider>
      <Router>
        
        <Routes>
          {/* Normal User Route */}
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Hero/>
                <AboutMe />
                <ProjectSection projects={projects} />
               <Contact/>
                <Footer />
              </>
            }
          />

          {/* Admin Panel Route */}
          <Route
            path="/admin"
            element={
              
              isLoggedIn ? (
                <>
              <Top1/>
                <AddProject onProjectAdded={handleProjectAdded} />
                <AdminContact/>
               </>
               ) : (
                <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />
             
              )
            }
            
          />
        </Routes>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
