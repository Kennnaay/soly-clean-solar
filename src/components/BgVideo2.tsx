import React from "react";
import video from "../assets/panelField.mp4";
function BgVideo2() {
  return (
    <div className="bgContainer">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted preload="auto" />
      <div className="container"></div>
    </div>
  );
}

export default BgVideo2;
