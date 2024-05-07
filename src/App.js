import React, { useState, useRef } from 'react';
import './contextMenu.css';
import ContextMenu from "./contextMenu.jsx";

const App = () => {

  const [contextMenu, setContextMenu] = useState({
    position: {
      x: 0,
      y: 0,
    },
    toggled: false
  })

  const contextMenuRef = useRef(null);

  const handleOnContextMenu = (e, elementClicked) => {
    e.preventDefault();
    if(!contextMenuRef.current) return
    const contextMenuAttr = contextMenuRef.current.getBoundingClientRect();

    console.log('contextMenuAttr',contextMenuAttr)
    
    const isLeft = e.clientX < window?.innerWidth / 2

    let x;
    let y = e.clientY

    if(isLeft) {
      x = e.clientX
    } else {
      x = e.clientX - contextMenuAttr.width
    }
    console.log('elementClicked', elementClicked)
    setContextMenu({
      position: {
        x,
        y
      },
      toggled: true
    })
  }

  return (<>
    <div className='container' onClick={() => setContextMenu({...contextMenu, toggled: false})}>
      <div>
        <p className='element' onContextMenu={(event) => handleOnContextMenu(event )}>
          Click me with right button
        </p>
      </div>
      <ContextMenu
          contextMenuRef={contextMenuRef}
          isToggled={contextMenu.toggled}
          positionX={contextMenu.position.x}
          positionY={contextMenu.position.y}
          buttons={[
            {
              text: "Click A",
              icon: "🕵️‍♀️",
              onClick: () => alert('Click A'),
            },
            {
              text: "Click B",
              icon: "☢",
              onClick: () => alert('Click B'),
            },
            {
              text: "Click C",
              icon: "🐱‍🏍",
              onClick: () => alert('Click C'),
            },
            {
              text: "Click D",
              icon: "🐱‍👤",
              onClick: () => alert('Click D'),
            }
          ]}
      />
    </div>
    </>);
}

export default App;
