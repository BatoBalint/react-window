import React, { useState } from "react";
import "./window.css";


// WindowCanvas overwrites zIndex
const Window = ({ children, contentClassName, zIndex, onWindowClick, id = -1 }) => {
  const [prevWindowPos, setPrevWindowPos] = useState({ x: 100, y: 100 });
  const [windowPos, setWindowPos] = useState(prevWindowPos);
  const [mouseDown, setMouseDown] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setMouseDown(true);
    setDragStartPos({
      x: e.clientX,
      y: e.clientY,
    });
    if (onWindowClick) onWindowClick(id);
  };

  const onMouseUp = (e) => {
    setMouseDown(false);
    setPrevWindowPos({ ...windowPos });
  };

  const onMouseMove = (e) => {
    if (mouseDown) {
      let newPos = {
        x: prevWindowPos.x + (e.clientX - dragStartPos.x),
        y: prevWindowPos.y + (e.clientY - dragStartPos.y),
      };
      setWindowPos(newPos);
    }
  };

  return (
    <div
      className="window"
      style={{
        left: windowPos.x,
        top: windowPos.y,
        zIndex: mouseDown ? 9999 : 1,
      }}
    >
      <div className="top-bar" onMouseDown={onMouseDown}>
        <span className="text-xs">Index: {zIndex}</span>
      </div>
      <div className={contentClassName}>{children}</div>
      <div
        className="cover"
        hidden={!mouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      ></div>
    </div>
  );
};

export default Window;
