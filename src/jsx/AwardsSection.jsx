import React, {useEffect, useState} from "react";
import '/src/css/awdBlock.css';

export function AwdJson() {
    // -------------------------Get JSON-------------------------------------------------
    // const invisRef = useRef(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/src/assets/AwdJson.json');
            const jsonData = await response.json();
            setData(jsonData);

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

    return (
    <>
        <AwardBlock data={data}/>
    </>
    );

}

function AwardScroll() {

}

function AwardBlock({data}) {

    const scroll = (scrollOffset) => {
        const ref = document.getElementById('awdGal');
        ref.scrollLeft += scrollOffset;
    };

    return (
        <>
        {/* Render the fetched data */}
        <h2>
            Awards
        </h2>
        {data && (
            <div className="awdGallery row">
                <button className="awdGal-btn" onClick={() => scroll(-1024)}>left</button>
                <div id="awdGal" className='awdBlock-cont'>
                {data.map(item => (
                <div className="awdBlock" key={item.id}>
                        <div className='awdTextCont'>
                            <span className="awdTitle">{item.title}</span><br/>
                            <span>{item.date}</span><br/>
                            <span>{item.description}</span>
                        </div>
                    </div> 
                ))}
                </div>
                <button className="awdGal-btn" onClick={() => scroll(1024)}>right</button>
            </div>
        )}
        </>
    );
}