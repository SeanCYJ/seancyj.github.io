// used to create each experience as their own block from JSON

// JSON
// {
//     {
//          "id" : "unique ID to match photo"
//          "date" : "Date shown"
//          "title" : "Main Title"
//          "description" : "Short Description"
//          "picture-link" : ["", "", ...]
//          "category" : ["engineering", "python", ...]
//     },
//      {
//          "id" : "unique ID to match photo"
//          "date" : "Date shown"
//          "title" : "Main Title"
//          "description" : "Short Description"
//          "picture-link" : ["", "", ...]
//          "category" : ["engineering", "python", ...]
//     },
// }

import React, {useState, useEffect, useRef} from 'react';
import { useDrag } from '@use-gesture/react';
import '/src/css/expBlock.css';

// the html code for a single exp card
export function ExpBlock({data}) {
  const [visibleDiv, setVisibleDiv] = useState(null);
  const [dragging, setDrag] = useState(false);

  const [position, setPosition] = useState({ x: window.innerWidth * 0.05, y: window.innerHeight * 0.1 });
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 689);
  const [disablePointerEvents, setDisablePointerEvents] = useState(false);
  const popupRef = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 568);
  };

  const updatePosition = () => {
    setPosition({ x: window.innerWidth * 0.05, y: window.innerHeight * 0.1 });
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    if (position.y < window.innerHeight * 0.1 && !dragging) {
      setPosition({ x: window.innerWidth * 0.05, y: position.y + 10});
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const bind = useDrag(({ dragging, movement: [x, y] }) => {
    console.log("Dragging:", dragging, "Movement:", x, y);
    console.log("Cursor Position:", cursorPosition.x, cursorPosition.y);
    console.log("Position:", position.x, position.y);
    if (isMobile && y < window.innerHeight * 0.1) {
      setPosition({
        x: position.x,
        y: y
      });
      setDrag(dragging);

      if (y < -window.innerHeight * 0.1) {
        setVisibleDiv(null);
        updatePosition();
      } else {
        // setTimeout(() => {
        //   setPosition({
        //     x: position.x,
        //     y: y < window.innerHeight*0.1 ? y-10 : y
        //   });
        // }, 1000);
      }
    }
  });

  const toggleDiv = (divId) => {
    setVisibleDiv(visibleDiv === divId ? null : divId);
    setDisablePointerEvents(true);

    setTimeout(() => {
      setDisablePointerEvents(false);
    }, 100);
  };


  const handleClickOutside = (event) => {
    // Check if the clicked target is not one of the content divs or buttons
    if (!event.target.closest('.expDescrip-cont') && !event.target.closest('button')) {
      setVisibleDiv(null);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
   
  }, []);

  return (
    <>
      {/* Render the fetched data */}
      {data && (
        <div className='expBlock-cont'>
          {data.map(item => (
            <button 
            className="expBlock" 
            key={item.id}
            onTouchEnd={() => toggleDiv(item.title)}
            onClick={() => toggleDiv(item.title)}
            style={{ pointerEvents: disablePointerEvents ? 'none' : 'auto'}}
            >
                
                <div className='textCont'>
                    <span>{item.title}</span>
                    {/* <br/> */}
                    {/* <span>{item.date}</span><br/> */}
                    {/* <span>{item.description}</span> */}
                </div>

                {/* <div className='imgCont'>
                    <span>{item["picture-link"]}</span><br/>
                </div> */}
            </button>
          ))}
          {/* THE EXPANDED EXP DESCRIPTION */}
          {data.map(item => (
            <div
              key={item.title}
              id={item.title}
              className="expDescrip-bg"
              style={{ 
                display: visibleDiv === item.title ? 'block' : 'none',
              }}
              onMouseMove={handleMouseMove}
            >
              <div className='expDescrip-cont'
                 ref={popupRef}
                 {...(isMobile ? bind() : {})}
                 style={{
                   top: position.y,
                   left: position.x,
                   touchAction: 'none', // Prevent default touch actions
                   cursor: isMobile ? 'grab' : 'default',
                  animation: visibleDiv === item.title && isMobile ? 'slide-in ease-out 0.3s' : 'none'
                 }}
                 onMouseUp={isMobile ? handleMouseUp() : null}
              >
                <div className='expD-img-cont'>
                  <img className='expD-img' src={'/src/assets/' + item["picture-link"] + '.png'}/>
                </div>
                <div className='expD-text-cont'>
                  <span className='expD-title'>{item.title}</span><br/>
                  {/* <span className='expD-b'>{item.location}</span><br/><br/> */}
                  <span className='expD-a'>{item.role}</span><br/><br/>
                  <span className='expD-a'>{item.description}</span><br/><br/>
                  <span className='expD-b'>{item.location} | {item.date}</span>
                </div>
                <button className='closeExpDescrip-btn' onTouchEnd={() => toggleDiv(item.title)} onClick={() => toggleDiv(item.title)}></button>
                <div className='closeExpDescrip-mobile' style={{ display: isMobile ? 'block' : 'none'}}>Swipe up to close</div> 
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}