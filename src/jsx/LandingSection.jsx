import React, {useContext, Suspense} from "react";
import { useNavigate } from 'react-router-dom';
import '/src/css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeContext } from "./DarkModeContext";



const LandingSection = () => {
    const {darkTheme} = useContext(DarkModeContext);
    const navigate = useNavigate();

    const handlePageChange = (path) => {
        navigate(path);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <>
            <div className={darkTheme ? "row section-1 dm" : "row section-1"}>
                <div className="col-lg-12 g-0 land-name">
                    {/* <div className="concat-cloud-l">
                        <img className="cloud-bg-l" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                    </div> */}
                    <div className="landing-text">
                        <div>
                            <div>
                                <span className="text-small">Hi, I am</span><br/>
                                <span className={darkTheme ? "Name dm" : "Name"}>Sean Choo</span><br/>
                            </div>
                            
                            <div className="short-cuts-cont">
                                <div className={darkTheme ? "short-cuts dm" : "short-cuts"}>
                                    <button className="shortcut-btn abt-btn" onClick={() => {handlePageChange('/about')}}>About Me</button>
                                    <button className="shortcut-btn contact-btn" onClick={() => {handlePageChange('/contact')}}>Contact</button>
                                    <button className="shortcut-btn gh-btn" onClick={() => {window.open('https://github.com/SeanCYJ')}}>
                                        GitHub
                                        <img className="gh-logo" src={"../github-mark-white.svg"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-6 g-0 landing-cont">
                    <div className={darkTheme ?"concat-cloud-r dm" : "concat-cloud-r"}>
                            <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                            <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                            <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                            <img className="cloud-bg-r" src={"../landingPicBG_2.svg"} alt="stylized clouds"/>
                    </div>
                    <img className={darkTheme ? "landing-image fly-lr dm" : "landing-image fly-lr"} src={"../landingPicMain_2.svg"} alt="sitting on the edge of the wing"/>
                </div> */}
            </div>
        </>
        </Suspense>
    );
}

export default LandingSection;


