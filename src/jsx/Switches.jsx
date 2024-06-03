import React from "react";
import '/src/css/sideButtons.css';

export function DarkModeSwitch() {
    return (
        <>
            <div className="dm-btn-cont">
                <span className="btn-descrip">Mode</span>
                <button className="dm-btn">
                    <div className="light">LIGHT</div>
                    <div className="dark">DARK</div>
                </button>
                <div className="inop-tag">INOP</div>
            </div>
        </>
    );
}