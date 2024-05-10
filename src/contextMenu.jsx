import "./contextMenu.css";
import React from "react";

const ContextMenu = ({
  rightClickItem,
  positionX,
  positionY,
  isToggled,
  buttons,
  contextMenuRef,
}) => {
  return (
    <div>
      <menu
        style={{
          top: positionY + 2 + "px",
          left: positionX + 2 + "px",
        }}
        className={`context-menu ${isToggled ? "active" : ""}`}
        ref={contextMenuRef}
      >
        {buttons.map((button, index) => {
          const handleClick = (e) => {
            e.stopPropagation();
            button.onClick(e, rightClickItem);
          };

          return (
            <button
              onClick={handleClick}
              key={index}
              className="context-menu-button"
            >
              <span>{button.text}</span>
              <span className="icon">{button.icon}</span>
            </button>
          );
        })}
      </menu>
    </div>
  );
};

const handleOnContextMenu = (e, contextMenuRef, setContextMenu, elementClicked) => {
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

export {ContextMenu, handleOnContextMenu};
