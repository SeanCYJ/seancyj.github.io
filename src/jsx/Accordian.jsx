import React, {useState} from "react";
import '/src/css/accordian.css';

export function AccordianTemp({index, title, content}) {

    const [Expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!Expand);
    }

    const UnpackContent = (contentPacked) => {
        if (contentPacked.length === 1) {
            return (
                <ul>
                    <li key={title+index} dangerouslySetInnerHTML={{ __html: content}}></li>
                </ul>
            );
        }
        return(
            <ul>
            {contentPacked.map((item, index) => (
                <li key={title+index} dangerouslySetInnerHTML={{__html: item}}></li>
            ))}
            </ul>
        );
    
    }

    return(<>
        <div className="accordian-cont" 
           onClick={handleClick}
        >
           <button 
           id={index}
           className="accordian-title"
           ><span>{title}</span><span>+</span></button> 
           <div 
           id={index}
           className={Expand ? "accordian-content expand" : "accordian-content"}
           ><br/>{UnpackContent(content)}</div>
        </div>
    </>);
}