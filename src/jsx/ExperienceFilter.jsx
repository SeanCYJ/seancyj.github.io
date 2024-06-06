import React from 'react';
import '/src/css/exp-block.css';
import PropTypes from 'prop-types';


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

ExpFilterBtn.PropTypes = {
    buttonText: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    clicked: PropTypes.arrayOf(PropTypes.bool).isRequired
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

ExpFilter.PropTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        "picture-link": PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
      })
    ).isRequired, 
    para: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
    
