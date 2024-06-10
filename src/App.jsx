import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSection from './jsx/LandingSection';
import AboutSection from './jsx/AboutSection';
import ExpSection from './jsx/ExperienceSection';
import ContactSection from './jsx/ContactSection';
import NavBar from './jsx/Navbar';
import { DarkModeContext } from "./jsx/DarkModeContext";
import '/src/css/main.css';

const App = () => {
    const {darkTheme} = useContext(DarkModeContext);
    return (
        <>
        
            <Router>
            <div className={darkTheme ? 'container-fluid land-bg dm' : 'container-fluid land-bg'}>
                <NavBar />
                <Routes>
                <Route path="/" element={<LandingSection />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/experience" element={<ExpSection />} />
                <Route path="/contact" element={<ContactSection />} />
                </Routes>
            </div>
            </Router>
      </>
    );
};

export default App;
