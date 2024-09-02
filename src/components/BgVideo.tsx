import React from "react";
import video from "../assets/Video.mp4";
import "./BgVideo.css";
function BgVideo() {
  return (
    <div className="bgContainer">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="container"></div>
    </div>
  );
}

export default BgVideo;
