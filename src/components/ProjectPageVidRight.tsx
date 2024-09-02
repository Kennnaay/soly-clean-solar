import React from "react";
import "./ProjectPageVidRight.css"; // Import your CSS file for styling

interface vidInfo {
  bigString: string;
  smallString: string;
  description: string;
  vidURL: string;
}

function VideoWithTextRight({
  bigString,
  smallString,
  description,
  vidURL,
}: vidInfo) {
  return (
    <div className="-right-page-section-one">
      <div className="right-page-section-one-child">
        <div className="right-text-container">
          <h3 className="big_string">{bigString}</h3>
          <h5 className="small_string">{smallString}</h5>
          <p className="right-description">{description}</p>
        </div>
        <div className="video-container-right">
          {/* Put your picture or video component here */}
          <video autoPlay loop muted>
            <source src={vidURL} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoWithTextRight;
