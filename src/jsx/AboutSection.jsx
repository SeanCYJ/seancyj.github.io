import React from "react";
import '/src/css/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = () => {    
    return (
        <>
            <div className="row section-2">
                <div className="col-lg-12 g-0">
                    <h2>
                        About Me
                    </h2>
                    <div className="abt-cont">
                        <img className="abt-img" src={"../landingPicMain_2.svg"}/>
                        <div className="abt-text">
                            <span>
                                I am a 3rd year MEng student with practical experience in engineering projects, alongside a passion in programming and
                                design. I aim to apply my skills into diverse aerospace projects that can challenge my abilities, while enabling me to showcase my strengths and creativity
                                in solving problems. 
                            </span><br/><br/>
                            <span className="abt-header">Education:</span>
                            <ul>
                                <li>University of Southampton | MEng Aeronautics and Astronautics | Oct 2021 - Present</li>
                                <li>Taylor's College | Cambridge A-Levels | Jan 2020 - Jun 2021</li>
                            </ul>
                            <span className="abt-header">Skills:</span>
                            <ul>
                                <li>SolidWorks, COMSOL, Ansys</li>
                                <li>Python, Arduino, html, CSS, JavaScript, Git</li>
                            </ul>
                            <span className="abt-header">Interests:</span>
                            <ul>
                                <li>Flight Simulator, Blender, Programming, Video Games</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutSection;