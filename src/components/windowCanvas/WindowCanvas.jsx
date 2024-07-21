import React, { useState } from "react";

const WindowCanvas = ({ children }) => {
  const onWindowClick = (id) => {
    console.log("From window canvas: " + id);
  };

  const test = () => {
    let windows = children.filter((c) => c.type && c.type.name === "Window");
    return React.Children.map(windows, (child, index) => {
      return React.cloneElement(child, {
        id: index,
        onWindowClick: onWindowClick,
        zIndex: 0,
      });
    });
  };

  return <>{test()}</>;
};

export default WindowCanvas;
