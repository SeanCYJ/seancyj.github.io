import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import '/src/css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// export function LandingSection() {
const LandingSection = () => {
    const navigate = useNavigate();

    const handlePageChange = (path) => {
        navigate(path);
    };

    // useEffect(() => {
    // })

    return (
        <>
            <div className="row section-1">
                <div className="col-lg-6 g-0 land-name">
                    <div className="concat-cloud-l">
                        <img className="cloud-bg-l" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                    </div>
                    <div className="landing-text">
                        <span className="text-small">Hi, I am</span><br/>
                        <span className="Name">Sean Choo</span><br/>

                        <div className="short-cuts">
                        <button className="shortcut-btn abt-btn" onClick={() => {handlePageChange('/about')}}>About Me</button>
                        <button className="shortcut-btn contact-btn" onClick={() => {handlePageChange('/contact')}}>Contact</button>
                        <button className="shortcut-btn gh-btn" onClick={() => {window.open('https://github.com/SeanCYJ')}}>
                            GitHub
                            <img className="gh-logo" src={"../github-mark-white.svg"}/>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 g-0 landing-cont">
                    <div className="concat-cloud-r">
                        <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                        <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                        <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                        <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                    </div>
                    <img className="landing-image fly-lr" src={"../landingPicMain_2.svg"} alt="sitting on the edge of the wing"/>
                </div>
            </div>
        </>
    );
}

export default LandingSection;


