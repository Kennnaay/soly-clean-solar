import React from "react";
import "./ProjectPageVidLeft.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
interface vidInfo {
  bigString: string;
  smallString: string;
  description: string;
  vidURL: string;
  buttonDescription: string;
}
function VideoWithTextLeft({
  bigString,
  smallString,
  description,
  vidURL,
  buttonDescription,
}: vidInfo) {
  return (
    <div className="page-section-one">
      <div className="page-section-one-child">
        <div className="video-container">
          {/* Put your picture or video component here */}
          <video autoPlay loop muted>
            <source src={vidURL} type="video/mp4" />
          </video>
        </div>
        <div className="text-container">
          <h3 className="big_string"> {bigString} </h3>
          <h5 className="small_string"> {smallString}</h5>
          <p className="description">{description}</p>
          <div className="second-button">
            {/* <Link
              to="/team-members"
              className="transparent-button team-members-button"
            >
              {buttonDescription}
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoWithTextLeft;
