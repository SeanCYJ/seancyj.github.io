import React, { useState, useEffect } from 'react';
import '/src/css/expBlock.css';


export function ExpFilterBtn({buttonText, index, onClick, clicked}) {
    const cssName = ["ftr-btn", "ftr-btn selected"];
    return (
            <button key={index} 
            id={index}
            className={clicked[index] ? cssName[1] : cssName[0]}
            onClick={onClick}
            >
            {buttonText}
            </button>
    );
}


// checks whether the parameters selected is associated with the experience
// builds out the exp cards
export function ExpFilter({data}, para) {
    console.log("Exp Para: " + para);
    const sltpara = new Set(para);

    if (data) {
        return data.filter(dt => {
            const dtCategory = dt.category.split(', ');
            return dtCategory.some(cat => sltpara.has(cat));
        });
    }
}
    
