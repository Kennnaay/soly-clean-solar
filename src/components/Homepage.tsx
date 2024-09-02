import React from "react";
import { Link } from "react-router-dom";
import "../Homepage.css";
import BgVideo from "./BgVideo"; // Import the BgVideo component
import { motion } from "framer-motion";
import BgVideo2 from "./BgVideo2"; // Import the BgVideo2 component

function Homepage() {
  return (
    <div>
      <BgVideo />
      <div className="homepage-content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h1 className="mb-4">Introducing: Sol'y Clean Solar</h1>
              <p className="lead">
                An innovative, ground-breaking solution to solar power
              </p>
              <div className="mt-5">
                <Link to="/project-info" className="transparent-button mr-3">
                  Learn More
                </Link>
                <Link to="/team-members" className="transparent-button">
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="video-with-text">
          <BgVideo2 />
          <div className="text-overlay">
            <h2>
              It takes 108,000,000 gallons of water to clean the Nevada Solar
              One Farm.
            </h2>
            <div className="second-button">
              <Link to="/project-info" className="transparent-button-two mr-3">
                Our Solution
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Homepage;
