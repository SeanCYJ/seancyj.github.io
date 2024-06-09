// src/components/NavBar.js
import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/navbar.css';
import DarkModeToggle from './DarkModeSwitch';
import { DarkModeContext } from "./DarkModeContext";



const NavBar = () => {
    const {darkTheme, ToggleDM} = useContext(DarkModeContext);
    const navItems = ['', 'About', 'Work', 'Contact'];
    const paths = ['/', '/about', '/experience', '/contact'];
    const [currentPage, setCurrentPage] = useState(navItems[0]);
    const [active, setActive] = useState(0);

    const navigate = useNavigate();
    const handlePageChange = (page, index) => {
        setActive(index);
        setCurrentPage(page);
        navigate(paths[index]);
    };

    useEffect(() => {
        const urlRef = window.location.href;
        const navRef = urlRef.substring(urlRef.lastIndexOf('/'));
        setCurrentPage(navItems[active]);
        if (paths[active] != navRef) {
            handlePageChange(navRef, paths.indexOf(navRef));
        }
        window.onpopstate = () => {
            handlePageChange(navRef, paths.indexOf(navRef));
        }
    })
    

   
    
    return (
        <>
        <nav className={darkTheme ? 'dm' : ''}>
        <div className={darkTheme ? "pill dm" : "pill"} style={{ left: `${active/4 * 98}%`}} />
        <ul>
            {navItems.map((item, index) => (
                <li key = {index}
                href = {"/" + item.toString().toLowerCase()}
                className={currentPage === item ? 'highlight' : 'non-highlight'} onClick={() => handlePageChange(item != '' ? item : '', index)}>{item != '' ? item : 'Home'}</li>
            ))}
        </ul>
        {/* <div>
            {currentPage}
        </div> */}
        </nav>
        <div className='nav-aid-cont'>
            <DarkModeToggle/>
            <button className={darkTheme ? "abt-btn-work dm" : "abt-btn-work"} style={{display: currentPage === 'About' ? 'flex' : 'none'}} onClick={() => {handlePageChange('Work', 2)}}>Work ▶</button>
            <button className={darkTheme ? "exp-btn-contact dm" : "exp-btn-contact"} style={{display: currentPage === 'Work' ? 'flex' : 'none'}} onClick={() => {handlePageChange('Contact', 3)}}>Contact ▶</button>
        </div>
        </>
    );
};

export default NavBar;