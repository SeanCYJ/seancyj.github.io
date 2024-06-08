import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSection from './jsx/LandingSection';
import AboutSection from './jsx/AboutSection';
import ExpSection from './jsx/ExperienceSection';
import ContactSection from './jsx/ContactSection';
// import { AwdJson } from './jsx/AwardsSection';
// import { DarkModeSwitch } from './jsx/Switches';
import NavBar from './jsx/Navbar';
import { DarkModeProvider } from './jsx/DarkModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <DarkModeProvider>
      <Router>
        <div>
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}/>
          <Routes>
            <Route path="/" element={<LandingSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/experience" element={<ExpSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  </>,
);
