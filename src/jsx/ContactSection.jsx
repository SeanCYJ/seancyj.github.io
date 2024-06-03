import React, {useState, useEffect} from "react";
import '/src/css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// export function ContactSection() {
const ContactSection = () => {

    const [output, setOutput] = useState('Email');
    const [link, setlink] = useState('My CV');

    const encyrptEmail = "lqxx7|njw@;"
    const EmailDecrypt = () => {
        return encyrptEmail.split('').map(char => String.fromCharCode((char.charCodeAt(0)-9))).join('') + '@gmail.com';
    }

    const EmailReveal = () => {
        if (output === 'Email') {
            setOutput(EmailDecrypt);  
        } else {
            window.location = "mailto:" + output;
        }
    }

    const halfLink = 'https://drive.google.com/uc?export=download&id=';
    const FullLink = () => {
        return halfLink + '1xj3A1j9RS0MYub80x4EUQHvDmKNilxDR';
    }
    
    const CVdownload = () => {
        if (link === 'My CV') {
            setlink('CV - confirm download');
        } else {
            window.open(FullLink());
        }
    }

    return (
        <>
            <div className="row section-4">
                <div className="col-lg-12 g-0 my-auto">
                    <h2>Contact Me</h2>
                    <div className="contact-cont">
                        <div>
                            <div className="contact-txt">Thank you for your time. Feel free to reach out if you have any questions or collaboration ideas. I am always looking for a new challenge.</div>
                        </div>
                        <div className="contact-btn-cont">
                            {/* https://drive.google.com/file/d/1xj3A1j9RS0MYub80x4EUQHvDmKNilxDR/view?usp=drive_link */}
                            <button className="ctact-btn ctact-cv" onClick={CVdownload}>{link}</button>
                            <button className="ctact-btn ctact-email" onClick={EmailReveal}>{output}</button>
                            <button className="ctact-btn ctact-lin" onClick={() => {window.open('https://www.linkedin.com/in/sean-choo/')}}>
                                LinkedIn
                                {/* <img className="gh-logo" src="./src/assets/github-mark-white.svg"/> */}
                                </button>
                            <button className="ctact-btn ctact-gh" onClick={() => {window.open('https://github.com/SeanCYJ')}}>
                                GitHub
                                <img className="gh-logo" src="./src/assets/github-mark-white.svg"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactSection;