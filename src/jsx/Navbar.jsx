// src/components/NavBar.js
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/navbar.css';


const NavBar = () => {
    const navItems = ['', 'About', 'Work', 'Contact'];
    const paths = ['/', '/about', '/experience', '/contact'];
    // const [isPending, startTransition] = useTransition();
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
        // console.log(paths[active]);
        setCurrentPage(navItems[active]);
        if (paths[active] != navRef) {
            handlePageChange(navRef, paths.indexOf(navRef));
        }
        window.onpopstate = () => {
            // const urlRef = window.location.href;
            // const navRef = urlRef.substring(urlRef.lastIndexOf('/'));
            // console.log(urlRef.lastIndexOf('/'));
            // console.log(navRef);
            handlePageChange(navRef, paths.indexOf(navRef));
        }
    })
    

   
    
    return (
        <>
        <nav>
        <div className="pill" style={{ left: `${active/4 * 98}%`}} />
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
        <button className="abt-btn-work" style={{display: currentPage === 'About' ? 'flex' : 'none'}} onClick={() => {handlePageChange('Work', 2)}}>Work ▶</button>
        <button className="exp-btn-contact" style={{display: currentPage === 'Work' ? 'flex' : 'none'}} onClick={() => {handlePageChange('Contact', 3)}}>Contact ▶</button>
        </>
    );
};

export default NavBar;