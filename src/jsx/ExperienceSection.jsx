import React, { useState, useEffect, useRef } from 'react';
import { ExpBlock } from "./ExperienceBlock";
import { ExpFilter, ExpFilterBtn } from './ExperienceFilter';
import '/src/css/expBlock.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// extract json
// sent to filter component and output
// export function ExpJson() {
const ExpSection = () => {
    // -------------------------Get JSON-------------------------------------------------
    // const invisRef = useRef(null);
    const [data, setData] = useState(null);
    const buttonList = ['Featured', 'Engineering', 'Programming', 'Others'];
    const [clickedButtons, setClickedButtons] = useState(
        [true, false, false, false]
    );
    const [selectedParams, setSelectedParams] = useState(
        // new Array(buttonList.length).fill("-")
        [buttonList[0], '-', '-', '-']
    );
    const [keepData, setKeep] = useState(data);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('../ExpJson.json');
            const jsonData = await response.json();
            setData(jsonData);
            if (data) {
                setKeep(ExpFilter(data, selectedParams));
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData(); // Call the fetchData function when the component mounts

        // setKeep(ExpFilter({data}, selectedParams));
        // Interface();

            // Optional cleanup function
            return () => {
            // Cleanup logic here, if needed
            };
    }, []); // Empty dependency array means the effect runs only once after the initial render

    // ------------------------------------Filter---------------------------------------


    const handleButtonClick = (e) => {
        const updatedClickedButtons = [...clickedButtons];
        const updatedSelectedParams = [...selectedParams];
        const index = e.currentTarget.id;
        const filterPara = e.currentTarget.innerHTML;
        updatedClickedButtons[index] = !updatedClickedButtons[index];

        console.log(index);

        if (updatedClickedButtons[index] && index > 0) {
            // if btns other than featured is clicked
            updatedSelectedParams[index] = filterPara;
            updatedSelectedParams[0] = "-";
            updatedClickedButtons[0] = false;
        } else if (updatedClickedButtons[0] && index == 0) {
            // if featured btn clicked
            updatedSelectedParams[index] = filterPara;
            for (let i = 1; i <= 3; i++) {
                updatedSelectedParams[i] = "-"; // 2nd parameter means remove one item only
                updatedClickedButtons[i] = false;
            } 
        } else if (index > 0 && (updatedClickedButtons[1] || updatedClickedButtons[2] || updatedClickedButtons[3])) {
            // if other btn unclicked
            updatedSelectedParams[index] = "-";
        } else {
            updatedSelectedParams[index] = '-';
            updatedClickedButtons[index] = false;
            updatedSelectedParams[0] = "Featured";
            updatedClickedButtons[0] = true;
        }


        console.log("up-clk-btn: " + updatedClickedButtons);
        console.log("up-slt-Para: " + updatedSelectedParams);
        // console.log("FilterReturn: " + ExpFilter({data}, selectedParams));

        setSelectedParams(updatedSelectedParams);
        setKeep(ExpFilter({data}, updatedSelectedParams));
        setClickedButtons(updatedClickedButtons);

        
        // console.log("clk-btn: " + clickedButtons);
        // console.log("slt-Para: " + selectedParams);
        // console.log("FilterReturn: " + ExpFilter({data}, selectedParams));
        
    };


    return(
    <>
        <div className='row section-3'>
            {/* <h2>
                My Experiences
            </h2> */}

            <div className="button-container">
                {data && buttonList.map((buttonText, index) => (
                    <ExpFilterBtn
                    key = {index}
                    buttonText={buttonText} 
                    index={index} 
                    onClick={handleButtonClick} 
                    clicked={clickedButtons} 
                    />
                ))}
            </div>
            {data && 
                <ExpBlock data={keepData ? keepData : data.slice(0,9)}/>
            }
        </div>

    </>
    );
}


export default ExpSection;

