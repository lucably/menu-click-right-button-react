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
    <div onClick={() => console.log("cliquei")}>
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

export default ContextMenu;
