import React, {useContext} from "react";
import "/src/css/darkmode-switch.css";
import { DarkModeContext } from "./DarkModeContext";


const DarkModeToggle = () => {

    const {darkTheme, ToggleDM} = useContext(DarkModeContext);

    return(
        <>
            <div className="dm-btn-cont">
                {/* <span className={darkTheme ? "btn-descrip dm" : "btn-descrip"}>Mode</span> */}
                <button className={darkTheme ? "dm-btn dm" : "dm-btn"}
                    onClick={ToggleDM}
                >
                    {/* <div className="light">LIGHT</div>
                    <div className="dark">DARK</div> */}
                    <div></div>
                </button>
                {/* <div className="inop-tag">INOP</div> */}
            </div>
        </>
    )

};

export default DarkModeToggle;
